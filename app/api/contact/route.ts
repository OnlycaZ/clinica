import { NextResponse, NextRequest } from "next/server";
import crypto from "crypto";

type RateEntry = { count: number; expires: number };
const rateMap = new Map<string, RateEntry>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60_000; // 1 minute per IP
const EMAIL_RATE_LIMIT = 3;
const EMAIL_RATE_WINDOW = 10 * 60_000; // 10 minute per adresa de email

const SAFE_TEXT = (value: string) =>
  value.replace(/[<>{}[\]"]/g, "").replace(/(\r\n|\n|\r)/gm, " ").trim();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+\-\s]{6,20}$/;

function checkRateLimit(identifier: string, limit = RATE_LIMIT, windowMs = RATE_WINDOW) {
  const entry = rateMap.get(identifier);
  const now = Date.now();
  if (!entry || now > entry.expires) {
    rateMap.set(identifier, { count: 1, expires: now + windowMs });
    return true;
  }
  entry.count += 1;
  rateMap.set(identifier, entry);
  return entry.count <= limit;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    request.headers.get("cf-connecting-ip")?.trim() ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Prea multe cereri. Incearca din nou in cateva momente." }, { status: 429 });
  }

  const csrfHeader = request.headers.get("x-csrf-token");
  const csrfCookie = request.cookies.get("csrf-token")?.value;
  if (!csrfHeader || !csrfCookie || csrfHeader !== csrfCookie) {
    return NextResponse.json({ error: "Token CSRF invalid." }, { status: 403 });
  }

  let body: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    consentCommunication?: boolean;
    consentMarketing?: boolean;
    honeypot?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Payload invalid." }, { status: 400 });
  }

  const name = SAFE_TEXT(body.name ?? "");
  const email = SAFE_TEXT(body.email ?? "");
  const phone = SAFE_TEXT(body.phone ?? "");
  const message = SAFE_TEXT(body.message ?? "");
  const consentCommunication = Boolean(body.consentCommunication);
  const consentMarketing = Boolean(body.consentMarketing);
  const honeypot = (body.honeypot ?? "").toString().trim();

  // Daca honeypot-ul este completat, tratam cererea ca spam si raspundem generic
  if (honeypot.length > 0) {
    return NextResponse.json({ success: true, submissionId: crypto.randomUUID() });
  }

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json({ error: "Numele trebuie sa aiba intre 2 si 80 de caractere." }, { status: 422 });
  }
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Adresa de email invalida." }, { status: 422 });
  }

  // Limitam si pe adresa de email pentru a preveni abuzul focalizat
  if (!checkRateLimit(`email:${email.toLowerCase()}`, EMAIL_RATE_LIMIT, EMAIL_RATE_WINDOW)) {
    return NextResponse.json(
      { error: "Ai trimis prea multe solicitari intr-un interval scurt de timp. Te rugam sa incerci mai tarziu." },
      { status: 429 }
    );
  }
  if (phone && !phoneRegex.test(phone)) {
    return NextResponse.json({ error: "Numar de telefon invalid." }, { status: 422 });
  }
  if (message.length < 10 || message.length > 1200) {
    return NextResponse.json({ error: "Mesajul trebuie sa aiba intre 10 si 1200 de caractere." }, { status: 422 });
  }
  if (!consentCommunication) {
    return NextResponse.json({ error: "Este necesar consimtamantul pentru a procesa solicitarea." }, { status: 422 });
  }

  // Simulate secure persistence (redacted). In production integrate with CRM/email provider.
  const submissionId = crypto.randomUUID();
  console.info("New secure contact submission", { submissionId, name, email, phone, consentMarketing });

  return NextResponse.json({ success: true, submissionId });
}
