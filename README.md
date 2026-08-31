# Saarzya Website

Modern, responsive React website for Saarzya, a mental health and psychology initiative.

## Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Local Development

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

## Brand Assets

- Primary logo path: `public/assets/logo.jpg`
- Fallback chain in Navbar: `logo.jpg` -> `logo.png` -> `logo.svg`

## Deploy To Vercel

1. Push this project to GitHub.
2. Open Vercel and import the repository.
3. Use these settings:
	- Framework Preset: `Vite`
	- Build Command: `npm run build`
	- Output Directory: `dist`
	- Install Command: `npm install`
4. Click Deploy.

Vercel will auto-deploy on every push to your main branch.
