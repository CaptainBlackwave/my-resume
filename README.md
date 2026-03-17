# Christian MacDonald — Resume & Portfolio

**Senior Developer | AI Architect | Former CTO**
Sydney, NS, Canada · chris.j.c.mac@gmail.com · +1 902 921 8102

> This is my personal resume and portfolio site, built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion. It is also an **open template** — anyone can fork it, replace the data files with their own information, and have a production-ready resume site in minutes.

---

## Live Site

Deploy your own via Vercel, Netlify, or any static host that supports Next.js serverless functions.

---

## About Me

Innovative Senior Developer, AI Architect, and former CTO with over 12 years of experience architecting high-performance, scalable web ecosystems and leading digital transformations. Expert in modern PHP 8.4, Vue.js, and Agentic AI integration, with a proven track record of migrating legacy systems into hardened, secure, and containerized environments.

Strategic leader in the deployment of Autonomous AI Systems, specialized in fine-tuning LLMs via Unsloth and engineering custom agentic coding teams to accelerate the SDLC. Unique expertise in merging high-level software engineering with IoT, IoT-AI edge computing, and government-level compliance (Health Canada).

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.x | React framework with App Router |
| React | 19.x | UI library |
| TypeScript | 5.9.x | Type-safe JavaScript |
| Tailwind CSS | 4.x | Utility-first CSS |
| Framer Motion | 12.x | Animations |
| Lucide React | 0.562.x | Icons |
| React Hook Form + Zod | 7.x / 4.x | Contact form validation |
| Bun | Latest | Package manager & runtime |

---

## Use This as Your Own Resume Template

This project is designed to be fully customizable via a handful of data files. You do not need to touch any component code to have a complete, personalized resume site.

### Quick Start

```bash
# 1. Fork this repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/my-resume.git
cd my-resume

# 2. Install dependencies (requires Bun)
bun install

# 3. Start the dev server
bun dev
# Visit http://localhost:3000
```

### Customize Your Content

All personal content lives in `src/data/` and `src/config/`. **You only need to edit these files.**

| File | What to change |
|---|---|
| `src/data/profile.ts` | Name, title, email, phone, location, social links, summary, highlights |
| `src/data/experience.ts` | Work history — each job entry with achievements and technologies |
| `src/data/skills.ts` | Skills with proficiency levels (0–100) and categories |
| `src/data/education.ts` | Degrees, certifications, awards |
| `src/data/projects.ts` | Portfolio projects with descriptions, tech stack, and links |
| `src/config/site.config.ts` | Theme color, feature toggles, SEO metadata, navigation |

### Change the Theme Color

In `src/config/site.config.ts`, update `theme.primaryColor` using HSL format:

```ts
theme: {
  primaryColor: '220 92% 50%', // Blue (default)
  // primaryColor: '280 70% 50%', // Purple
  // primaryColor: '150 70% 45%', // Green
  // primaryColor: '30 90% 50%',  // Orange
  // primaryColor: '180 70% 45%', // Teal
}
```

### Toggle Sections On/Off

```ts
features: {
  portfolio: true,       // Show/hide portfolio page
  certifications: true,  // Show/hide certifications
  languages: true,       // Show/hide spoken languages
  skillBars: true,       // Show skill progress bars vs plain list
  sideNav: true,         // Desktop side navigation
  contactForm: true,     // Contact form
  pdfDownload: true,     // PDF download button
}
```

### Add Your Profile Photo

Drop your photo at `public/images/profile.jpg`. To use initials as a fallback instead, set `photo: ''` in `src/data/profile.ts`.

### Add Project Thumbnails

Place images in `public/projects/` and reference them in `src/data/projects.ts`:

```ts
thumbnail: '/projects/your-project-thumb.jpg',
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Main resume page
│   ├── portfolio/          # Portfolio grid + project detail pages
│   ├── print/page.tsx      # Print-optimized view (for PDF export)
│   └── api/                # Contact form + export endpoints
├── components/
│   ├── layout/             # Header, Footer, SideNav
│   ├── resume/             # ProfileHeader, ExperienceTimeline, SkillsSection, etc.
│   ├── portfolio/          # ProjectGrid, ProjectCard, ProjectFilters
│   ├── contact/            # ContactForm, SocialLinks
│   └── ui/                 # Button, Card, Badge, Progress, Timeline, etc.
├── config/
│   └── site.config.ts      # ALL site-wide configuration
├── data/                   # ALL user content (edit these!)
│   ├── profile.ts
│   ├── experience.ts
│   ├── skills.ts
│   ├── education.ts
│   └── projects.ts
└── lib/
    └── utils.ts
```

---

## Available Commands

```bash
bun install       # Install dependencies
bun dev           # Start dev server at http://localhost:3000
bun build         # Production build
bun typecheck     # TypeScript type checking
bun lint          # ESLint
```

---

## Features

- **Responsive** — Mobile-first design, works on all screen sizes
- **Dark mode** — System preference aware, with manual toggle
- **Print / PDF export** — Dedicated `/print` route optimized for PDF generation
- **Portfolio page** — Filterable project grid with detail pages
- **Side navigation** — Desktop sticky nav with scroll tracking
- **Smooth animations** — Framer Motion scroll-triggered transitions
- **Contact form** — Validated form with API route handler
- **SEO ready** — Meta tags, Open Graph, and structured title templates
- **Fast** — Static generation, optimized images, tree-shaken icons

---

## Deployment

The simplest path is [Vercel](https://vercel.com):

1. Push your fork to GitHub
2. Import the repo at vercel.com/new
3. Deploy — zero configuration needed for Next.js

For other hosts (Netlify, Cloudflare Pages, Railway, etc.), run `bun build` and deploy the `.next` output. The contact form API route requires a serverless runtime; for purely static hosts, set `contactForm: false` in `site.config.ts`.

---

## License

MIT — free to use, fork, and modify for personal or commercial projects. Attribution appreciated but not required.
