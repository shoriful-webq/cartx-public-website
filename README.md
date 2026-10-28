# CartX Public Website

Official marketing and public web presence for **CartX** — a modern, connected e-commerce platform built for scale, localized checkouts, and seamless operations.

---

## 1. Permanent Project Rules

All developers and AI agents must strictly follow these permanent rules for every task across the codebase:

### A. No Sparkles Icon
- **Strict Prohibition:** Never use the `Sparkles` icon anywhere in the entire project.
- **Alternatives:** Use suitable contextual icons from `lucide-react` (e.g., `Layers`, `Zap`, `CheckCircle2`, `ShieldCheck`, etc.).
- **Proactive Check:** Do not introduce this icon in any new or modified components.

### B. Consistent Section Headings
- **Visual Reference:** Use the Home Page Hero Section's eyebrow and title styling as the visual reference standard for all sections across the website.
- **Heading Anatomy:**
  - **Eyebrow:** Branded uppercase pill badge (`text-[10px]` or `text-[11px]`, font weight 700, uppercase, letter tracking `tracking-widest`, `text-primary`, with `bg-primary/[0.06]` and `border-primary/20`).
  - **Title (H2/H1):** Responsive clamp font size, bold (`font-bold`), tight tracking (`tracking-tight`), dark heading text (`text-foreground`), and optional smooth brand text gradient (`.brand-gradient-text`) for key phrases.
  - **Supporting Description:** Responsive muted text (`text-muted-foreground`), optimal line height (`leading-relaxed`), constrained max-width (`max-w-2xl` or `max-w-xl`), centered or left-aligned matching the section layout.
- **Consistency:** Keep eyebrow typography, title font, font weight, text colors, spacing, and alignment consistent across all sections.
- **Stability:** Do not redesign the Hero Section just to achieve consistency with other sections.

### C. Global Colors & Centralized Design Tokens
- **Central Stylesheet:** Always use colors and gradients defined in `src/app/globals.css`.
- **Zero Hex Codes in Markup:** Never scatter hardcoded hex colors across components.
- **Exact Brand Palette:**
  - Primary Blue: `#2563EB` (`var(--primary)`, `bg-primary`, `text-primary`)
  - Primary Hover: `#1D4ED8` (`var(--primary-hover)`, `hover:bg-primary-hover`)
  - Secondary Accent (Sky Blue): `#38BDF8` (`var(--secondary-accent)`, `text-secondary-accent`)
  - Dark Navy Heading: `#0F172A` (`var(--foreground)`, `text-foreground`)
  - Body Text Slate: `#475569` (`var(--muted-foreground)`, `text-muted-foreground`)
  - Background Off-White: `#F8FAFC` (`var(--background)`, `bg-background`)
  - Card Surface: `#FFFFFF` (`var(--card)`, `bg-card`)
  - Border: `#E2E8F0` (`var(--border)`, `border-border`)
- **Missing Tokens:** If a required color, spacing, or gradient token is missing, define it centrally in `src/app/globals.css` first, then reference the token.

### D. Responsive Design & Accessibility
- **Breakpoints Verification:** Every new or modified section must be verified across desktop (`lg:`), tablet (`sm:` / `md:`), and mobile (`base`).
- **Layout Integrity:** Prevent horizontal overflow, broken grid wraps, awkward vertical spacing, and misaligned buttons.
- **Contrast & Accessibility:** Maintain WCAG accessible contrast ratios, visible keyboard focus rings (`:focus-visible`), and semantic HTML tags (`<section>`, `<h2>`, `<button>`, `<a>`).

---

## 2. Project Structure

```
src/
├── app/                        # Next.js App Router routes & global styles
│   ├── globals.css             # Centralized design tokens, utilities & themes
│   ├── layout.tsx              # Root layout (LanguageProvider, AnnouncementBar, Header, Footer)
│   ├── page.tsx                # Home Page route (composes Section 01, 02, 03, ...)
│   └── [routes]/...            # 28 dedicated marketing routes
├── components/
│   ├── Home/                   # Home Page-specific section components
│   │   ├── hero-section.tsx    # Section 01 — Hero Section
│   │   ├── hero-dashboard-mockup.tsx # Illustrative merchant dashboard mockup
│   │   ├── brand-trust-strip.tsx     # Section 02 — Brand Trust Strip (5 pillars)
│   │   ├── problem-solution-section.tsx # Section 03 — Problem & Solution
│   │   └── index.ts            # Clean barrel export for Home components
│   ├── layout/                 # Shared site-wide layout components
│   │   ├── announcement-bar.tsx# Top dismissible announcement bar
│   │   ├── header.tsx          # Responsive navigation header & language toggle
│   │   └── footer.tsx          # Multi-column footer & verified business info
│   └── ui/                     # Reusable design system UI primitives
│       ├── button.tsx          # Base shadcn button
│       └── cta-system.tsx      # Centralized CTA registry & CTAButton component
└── lib/
    ├── i18n/                   # Bilingual system (English & Bangla)
    │   ├── language-context.tsx# useSyncExternalStore locale state & hydration-safe provider
    │   └── translations.ts     # Central dictionary for EN and BN strings
    └── utils.ts                # Tailwind cn() utility
```

### Architecture Conventions:
- **Home Page Isolation:** Keep all Home Page-specific components inside `src/components/Home/`.
- **Shared Components:** Keep shared components (`Header`, `Footer`, `AnnouncementBar`, `CTAButton`) in their existing shared locations. Never move them into `src/components/Home/`.
- **No Duplicates:** Ensure barrel files (such as `src/components/Home/index.ts`) export each component and type exactly once.

---

## 3. Development Workflow

Before implementing any task:
1. **Read this root `README.md`** to review all active requirements and rules.
2. **Inspect existing components and global styles** before creating or modifying code.
3. **Follow all documented project rules** strictly without exception.
4. **Implement only the requested scope** — do not create unrequested sections or rewrite unrelated components.
5. **Check responsive layouts** on desktop, tablet, and mobile breakpoints.
6. **Run validation checks:**
   ```bash
   npx eslint src --max-warnings=0
   npx next build
   ```
7. **Fix any errors or warnings immediately** before completing the task.

---

## 4. Important Restrictions

- **Strict Scope:** Do not create sections, pages, or features that have not been explicitly requested.
- **No Component Duplication:** Do not create second copies of existing headers, footers, buttons, or section files.
- **No Unverified Data:** Never display fabricated merchant counters (e.g. "Trusted by 5,000+"), fake testimonials, or unapproved partner logos.
- **Visual Identity:** Preserve the established CartX aesthetic: crisp borders, restrained shadows, clean typography, and subtle light-blue gradients. Avoid neon effects, heavy glow, and generic template styling.
- **Living Documentation:** Update this `README.md` whenever permanent project rules or architectural conventions change.
