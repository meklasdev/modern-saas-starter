# Modern SaaS Boilerplate 🚀

A production-ready starting point for building high-performance SaaS applications with Next.js 14+, Supabase, Stripe, and Tailwind CSS. Designed for Indie Hackers who want to ship fast.

## 🛠 Tech Stack

- **Framework:** Next.js 14+ (App Router, Server Components)
- **Language:** TypeScript (Strict)
- **Styling:** Tailwind CSS + shadcn/ui
- **Auth & Database:** Supabase (PostgreSQL)
- **Payments:** Stripe (Subscriptions)
- **Forms:** React Hook Form + Zod

## 📂 Project Structure

```bash
.
├── src/
│   ├── actions/        # Server Actions (mutations)
│   ├── app/            # Next.js App Router (pages & layouts)
│   ├── components/     # React Components
│   │   ├── ui/         # Reusable shadcn/ui atoms
│   │   └── ...         # Feature components
│   ├── lib/            # Utilities & library configurations
│   │   └── supabase/   # Supabase clients
│   └── types/          # TypeScript definitions
├── public/             # Static assets
├── middleware.ts       # Auth protection middleware
├── schema.sql          # Database schema
├── next.config.mjs
└── tailwind.config.ts
```

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/meklasdev/modern-saas-starter.git
cd modern-saas-starter
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env.local` and fill in your keys:

```bash
cp .env.example .env.local
```

**Required Variables:**
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Database Setup
Run the SQL commands in `schema.sql` in your Supabase SQL Editor to set up:
- `profiles` table (triggers on auth.users)
- `subscriptions` table

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 🛡 Features
- **Authentication**: Secure email/password & social login via Supabase.
- **Protected Routes**: Middleware routing for authenticated users.
- **Subscription Usage**: Stripe checkout and portal integration.
- **Type Safety**: End-to-end type safety with TypeScript and Zod.
