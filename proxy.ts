import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const RATE_LIMITED_PATHS = [/^\/api\//i];
const SENSITIVE_PATHS = [/^\/(?:\.env|package-lock\.json|tsconfig\.json)/i];

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();

  for (const pattern of SENSITIVE_PATHS) {
    if (pattern.test(url.pathname)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  const response = NextResponse.next();

  // Generate CSRF token cookie if missing using double-submit approach
  if (!request.cookies.get("csrf-token")) {
    const token = crypto.randomUUID().replace(/-/g, "");
    response.cookies.set("csrf-token", token, {
      httpOnly: false,
      sameSite: "strict",
      secure: true,
      path: "/"
    });
  }

  // Security headers
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://*.tile.openstreetmap.org; connect-src 'self' https://*.tile.openstreetmap.org; frame-ancestors 'self'; form-action 'self'"
  );
  response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");

  // Basic path-based rate limit blocking repeated access to API entry points via middleware
  if (RATE_LIMITED_PATHS.some((regex) => regex.test(url.pathname))) {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      request.headers.get("cf-connecting-ip") ||
      "unknown";
    const key = `mw-rate-${ip}`;
    const now = Date.now();
    const limitWindow = 60_000;
    const maxHits = 60;
    const entry = request.cookies.get(key);
    let payload = { hits: 0, expires: now + limitWindow };

    if (entry) {
      try {
        payload = JSON.parse(entry.value) as typeof payload;
      } catch {
        payload = { hits: 0, expires: now + limitWindow };
      }
    }

    if (now > payload.expires) {
      payload = { hits: 0, expires: now + limitWindow };
    }
    payload.hits += 1;

    if (payload.hits > maxHits) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    response.cookies.set(key, JSON.stringify(payload), {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      path: "/",
      maxAge: limitWindow / 1000
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
