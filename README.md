# Vyom Garud — Landing Page

A modern, responsive landing page built with Next.js, TypeScript and Tailwind CSS. It includes reusable UI components (hero, feature cards, product cards, contact form), animation via Framer Motion, and icons from Lucide.

Made by Manya Shukla

## Features

- Minimal, responsive landing layout
- Reusable UI components in `src/components`
- Built with Next.js (app router), TypeScript, Tailwind CSS
- Small animations with `framer-motion`

## Folder structure

```
.
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── AnimatedSection.tsx
│       ├── ContactForm.tsx
│       ├── FeatureCard.tsx
│       ├── HeroSection.tsx
│       └── ProductCard.tsx
└── README.md
```

## Quick Start

Prerequisites: Node.js (16+ recommended)

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
npm run start
```

4. Lint

```bash
npm run lint
```

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

## Contributing

Contributions are welcome — open an issue or a pull request.

---

Made with ❤️ by Manya Shukla
