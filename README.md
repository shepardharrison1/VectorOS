# VectorOS — Landing Page

Production-quality landing page for **VectorOS**, an educational platform for AI literacy, systems thinking, and digital leverage.

Domain: [joinvectoros.ai](https://joinvectoros.ai)

## Stack

- **Next.js 14** — App Router
- **TypeScript**
- **Tailwind CSS** with custom design tokens
- **shadcn/ui** primitives (Button, Input)
- **Framer Motion** for orchestrated animation
- **Geist Sans + Geist Mono** — Vercel's typeface, fits the technical/infrastructure tone
- **lucide-react** for select utility icons (custom SVGs handle brand icons)

## Design system

**Strict monochrome** — black, white, grays only. No neon, no gradients beyond white-to-gray, no crypto/robot tropes.

**Aesthetic vocabulary:**

- Animated grid backgrounds with radial fade masks
- Thin-stroke SVG vector fields and system-node diagrams
- Hairline borders (`white/10`) and hairline dividers
- Glassmorphism applied sparingly via the `.glass` utility
- `font-mono` for spec-sheet metadata (uppercase, tracked-out, 10px)
- Custom-built SVG icons for the five content pillars

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Folder structure

```
.
├── app/
│   ├── globals.css          # Tailwind base + custom utilities (grid, glass, masks)
│   ├── layout.tsx           # Root layout, Geist fonts, metadata
│   └── page.tsx             # Homepage composition
│
├── components/
│   ├── effects/             # Background atmosphere
│   │   ├── animated-grid.tsx
│   │   ├── vector-field.tsx
│   │   ├── system-nodes.tsx
│   │   └── pillar-icons.tsx
│   │
│   ├── sections/            # Page sections
│   │   ├── nav.tsx
│   │   ├── hero.tsx
│   │   ├── pillars.tsx
│   │   ├── resources.tsx
│   │   ├── community.tsx
│   │   ├── vision.tsx
│   │   └── footer.tsx
│   │
│   └── ui/                  # shadcn/ui-style primitives
│       ├── button.tsx
│       ├── input.tsx
│       └── section-badge.tsx
│
├── lib/
│   └── utils.ts             # cn() helper
│
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Section reference

| # | Section    | Key effects |
|---|------------|-------------|
| 1 | Nav        | Scroll-linked glass background |
| 2 | Hero       | Layered animated grid + vector field + system nodes, blurred staggered word reveal |
| 3 | Pillars    | 5 cards with 3D tilt, cursor-following spotlight, custom SVG icons |
| 4 | Resources  | Asymmetric grid; one feature card with concentric-arc ornament |
| 5 | Community  | 4-cell panel, hairline hover glow |
| 6 | Vision     | Scroll-linked per-word opacity reveal |
| 7 | Footer     | Newsletter, social, oversized faded wordmark sign-off |

## Customizing the brand

All colors live in `tailwind.config.ts` under `theme.extend.colors`. The brand is intentionally constrained to a single hue family (grayscale). To experiment, adjust the `foreground`, `background`, and `border` HSL values — keep them in the same hue for cohesion.

Custom backgrounds (`bg-grid`, `mask-radial`, `glass`, `hairline`, `text-gradient`) are defined in `app/globals.css` under `@layer utilities`.
