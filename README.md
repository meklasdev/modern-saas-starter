<div align="center">

# 🚀 Modern SaaS Boilerplate

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=7AA2F7&center=true&vCenter=true&width=600&lines=Production-Ready+SaaS+Starter;Next.js+14+%2B+Supabase+%2B+Stripe;Ship+Fast+%7C+Scale+Faster;Built+for+Indie+Hackers" alt="Typing SVG" />

**The ultimate boilerplate for building high-performance SaaS applications**

[![License](https://img.shields.io/github/license/meklasdev/modern-saas-starter?style=for-the-badge&color=7AA2F7&labelColor=1a1b26)](LICENSE)
[![Stars](https://img.shields.io/github/stars/meklasdev/modern-saas-starter?style=for-the-badge&color=bb9af7&labelColor=1a1b26)](https://github.com/meklasdev/modern-saas-starter/stargazers)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&labelColor=1a1b26)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js&labelColor=1a1b26)](https://nextjs.org/)

**[View Demo](https://modern-saas-starter.vercel.app)** · **[Report Bug](https://github.com/meklasdev/modern-saas-starter/issues)** · **[Request Feature](https://github.com/meklasdev/modern-saas-starter/issues)**

</div>

---

## ✨ Why This Boilerplate?

<table>
<tr>
<td width="50%">

### ⚡ **Ship Faster**
Everything configured out of the box. Auth, payments, database - just add your business logic.

### �️ **Production Ready**
Battle-tested patterns, type-safe code, and security best practices baked in.

</td>
<td width="50%">

### 🎨 **Beautiful UX**
Modern UI with shadcn/ui components and Tailwind CSS. Mobile-first and accessible.

### � **Monetization Ready**
Stripe integration with subscription management and webhook handling included.

</td>
</tr>
</table>

---

## 🌟 Features

<div align="center">

| Feature | Technology | Description |
|---------|------------|-------------|
| 🔋 **Framework** | Next.js 14 | App Router + Server Components + Server Actions |
| 🛡️ **Auth** | Supabase | Email/Password + Social Providers |
| 💳 **Payments** | Stripe | Subscriptions + Webhooks |
| 🎨 **UI** | Tailwind + shadcn/ui | Beautiful, accessible components |
| 🗄️ **Database** | PostgreSQL | Via Supabase with auto triggers |
| 🏗️ **Type Safety** | TypeScript + Zod | End-to-end type safety |

</div>

---

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/meklasdev/modern-saas-starter.git
cd modern-saas-starter

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
# Edit .env.local with your Supabase and Stripe keys

# Run database migrations (see schema.sql)
# Then start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 🛠 Tech Stack

<div align="center">

**Frontend:** Next.js 14 · TypeScript · Tailwind CSS · shadcn/ui · React Hook Form

**Backend:** Supabase (PostgreSQL + Auth + Realtime) · Stripe · Server Actions

**DevOps:** Vercel · GitHub Actions · ESLint · Prettier

</div>

---

## 📂 Project Structure

```text
modern-saas-starter/
├── src/
│   ├── actions/        # Server Actions (Data mutations)
│   ├── app/            # Next.js App Router
│   │   ├── (auth)/     # Auth pages (login, signup)
│   │   ├── dashboard/  # Protected routes
│   │   └── page.tsx    # Landing page
│   ├── components/     # React Components
│   │   ├── ui/         # shadcn/ui components
│   │   └── ...         # Feature components
│   ├── lib/            # Utilities (Supabase, Stripe, helpers)
│   └── types/          # TypeScript definitions
├── middleware.ts       # Route protection
└── schema.sql          # Database schema
```

---

## 🔐 Environment Variables

Create `.env.local`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 🤝 Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push and open a PR

---

## � License

MIT © [meklasdev](https://github.com/meklasdev)

---

<div align="center">

**[⭐ Star this repo](https://github.com/meklasdev/modern-saas-starter)** if you find it useful!

Made by **[meklasdev](https://github.com/meklasdev)** with Next.js ⚡

</div>
