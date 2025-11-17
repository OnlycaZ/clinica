# AI Coding Agent Instructions for Clinica

## Project Overview
**Clinica** is a Next.js 16 + React 19 + TypeScript + Tailwind CSS healthcare/clinic website. It's a single-page application with a showcase layout for a dental clinic, built entirely as a **landing page** (`app/page.tsx`) using inline React components and styled CSS objects.

### Key Architecture
- **Single-page layout**: All content lives in `app/page.tsx` (668 lines) as a monolithic React component with inline styles and structured data
- **Styling approach**: Inline CSS objects (`const styles: { [key: string]: React.CSSProperties }`) + Tailwind CSS for utilities
- **No routing**: Currently no API routes, no other pages—just one landing page
- **Data-driven UI**: Service offerings, testimonials, pricing, and stats are defined as arrays/objects at the top of `page.tsx`, not in a backend database

### Tech Stack
- **Runtime**: Node.js (via Next.js 16.0.3)
- **UI Framework**: React 19.2.0 with TypeScript 5
- **Styling**: Tailwind CSS 4 + PostCSS + inline CSS-in-JS
- **Linting**: ESLint 9 with Next.js core-web-vitals and TypeScript configs
- **Fonts**: Google Fonts (Geist and Geist_Mono) via `next/font`

## Development Workflow

### Common Commands
```bash
npm run dev      # Start dev server on http://localhost:3000 (hot reload enabled)
npm run build    # Compile for production
npm start        # Run production build
npm run lint     # Run ESLint (uses config in eslint.config.mjs)
```

### Key Files & Responsibilities
- **`app/page.tsx`**: The main landing page component—contains all UI, data structures, and styling
- **`app/layout.tsx`**: RootLayout wrapper (currently minimal, applies Geist fonts)
- **`app/globals.css`**: Global theme variables (dark mode, fonts) and Tailwind imports
- **`tsconfig.json`**: Path alias `@/*` maps to workspace root for cleaner imports
- **`next.config.ts`**: Minimal config—extend here for images, redirects, or API routes

## Code Patterns & Conventions

### Inline Styles Pattern
Styles are defined as `React.CSSProperties` objects at the component scope:
```tsx
const palette = { navy: "#0b2a3d", teal: "#00c2c7", sand: "#f7f4ef", /* ... */ };
const styles: { [key: string]: React.CSSProperties } = {
  page: { fontFamily: "'Inter', sans-serif", margin: 0, /* ... */ },
  // Apply: <div style={styles.page}>...
};
```
**Why**: Avoids CSS module fragmentation for a single-page app; keeps component logic and styling collocated.

### Data Structure Pattern
Content (services, stats, testimonials) is centralized as module-level constants:
```tsx
const services = [
  { icon: "EST", title: "Estetica dentara", description: "...", features: ["..."] },
  // Used in: services.map(s => <ServiceCard key={s.title} {...s} />)
];
```
**Why**: Separates content from UI logic; simplifies localization or CMS migration later.

### React Component Style
- **Functional components** with TypeScript props interfaces (when needed)
- **No useState/useEffect** in main component (side-effect free for SSR)
- **Accessibility**: Includes skip-link, semantic HTML (`<nav>`, `<section>`, `<main>`), ARIA labels
- **Responsiveness**: Inline media queries via inline styles or classNames for Tailwind utilities

### Naming Conventions
- **Palette colors**: kebab-case keys (`navy`, `light`, `teal`) with hex values
- **Style objects**: camelCase keys corresponding to HTML elements or semantic sections
- **Component data**: Plural arrays (`services`, `stats`, `highlights`), capitalized property names

## Integration Points & Dependencies

### External Services (Potential)
- **Google Fonts**: Already integrated via `next/font` (Geist fonts)
- **Email/Booking**: Currently no backend—prepare for API route at `app/api/bookings/route.ts` if adding form submission
- **Analytics**: No tracking yet—add tracking pixel or GA4 via `app/layout.tsx` or `_app` pattern when needed

### Build & Deployment
- **No environment variables required** currently
- **Static generation**: Page renders as static HTML for fast CDN deployment
- **Vercel ready**: Already scaffolded with `create-next-app`; deploy via `vercel` CLI or push to GitHub

## When Modifying This Codebase

### Adding New Sections
1. Add data array at top of `page.tsx` (follow naming: plural, descriptive)
2. Define section styles in the `styles` object using the palette
3. Create a small inline component or use `map()` to render the data
4. Add section to navigation array if it should appear in the header

### Updating Styling
- **Colors**: Always reference `palette` object to maintain consistency
- **Layout**: Use inline flexbox/grid for layouts, Tailwind for utilities (padding, margins, gaps)
- **Responsive**: Add inline media queries to styles, or use Tailwind `@media` rules in `globals.css`

### Performance Considerations
- **No lazy loading yet**: All components render on page load—consider lazy boundaries if page grows beyond ~100KB
- **Image optimization**: Use `next/image` for any images (currently only placeholders)
- **SEO**: Metadata is in `layout.tsx`—update for each page or use generateMetadata if adding routes

## Linting & Code Quality
- **ESLint**: Runs with Next.js core-web-vitals preset; caught issues appear in editor
- **TypeScript**: Strict mode enabled (`"strict": true`)—type all function parameters and component props
- **No formatter config**: Use your editor's default (Prettier is common)

## Known Limitations & TODOs
- **No backend API**: All data is hardcoded; consider a CMS or API when scaling
- **No routing**: Single-page app; add `/app/api/` routes or new pages incrementally
- **Inline styles at scale**: If component grows >1000 lines, consider extracting component styles to separate files
- **No testing setup**: Add Jest + React Testing Library when test coverage becomes critical
