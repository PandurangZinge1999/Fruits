# GreenHarvest Export

A premium fruit sourcing and export website built with Next.js, TypeScript, Tailwind CSS, Prisma, and PostgreSQL.

## Features

- Modern home page with hero, product highlights, testimonials, and contact sections
- Dedicated pages for products, farmers, buyers, about, gallery, and contact
- Mobile-first sticky navigation and floating WhatsApp CTA
- SEO metadata, sitemap, and robots configuration
- Admin dashboard shell for managing key business sections
- API routes for farmer registration, buyer inquiries, and contact messages

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Prisma ORM
- PostgreSQL

## Local Setup

1. Install dependencies
   ```bash
   npm install
   ```
2. Configure the database URL in `.env`
3. Generate Prisma client
   ```bash
   npx prisma generate
   ```
4. Start the development server
   ```bash
   npm run dev
   ```

## Verification

- `npm run build`
- `npm run lint`

