# Modern SaaS Boilerplate 🚀

![License](https://img.shields.io/github/license/meklasdev/modern-saas-starter?style=flat-square)
![Stars](https://img.shields.io/github/stars/meklasdev/modern-saas-starter?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square)

The ultimate production-ready boilerlate for building high-performance SaaS applications in 2024/2025.
Built by **[meklas](https://github.com/meklasdev)** for Indie Hackers who want to ship fast and scale.

**[View Demo](https://modern-saas-starter.vercel.app)** · **[Report Bug](https://github.com/meklasdev/modern-saas-starter/issues)** · **[Request Feature](https://github.com/meklasdev/modern-saas-starter/issues)**

---

## 🌟 Features

Everything you need to build a SaaS, nothing you don't.

- **🔋 Next.js 14 App Router**: Utilizing Server Components and Server Actions for maximum performance.
- **🛡️ Authentication**: Complete implementation with **Supabase Auth** (Email/Password + Social Providers).
- **🔒 Protected Routes**: Robust Middleware to secure dashboard and user data.
- **💳 Payments**: **Stripe** integration ready for Subscriptions (Checkout + Webhooks).
- **🎨 UI/UX**: Beautifully designed with **Tailwind CSS** and **shadcn/ui**.
- **🗄️ Database**: **PostgreSQL** (via Supabase) with automatic profile creation triggers.
- **🏗️ Type Safety**: End-to-end type safety with **TypeScript** and **Zod** schema validation.
- **📱 Responsive**: Mobile-first design that looks great on any device.

## 🛠 Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js 14](https://nextjs.org/) | App Router, Server Actions |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict Mode enforced |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS |
| **Components** | [shadcn/ui](https://ui.shadcn.com/) | Reusable, accessible components |
| **Database** | [Supabase](https://supabase.com/) | PostgreSQL + Auth + Realtime |
| **Payments** | [Stripe](https://stripe.com/) | Subscription management |
| **Forms** | [React Hook Form](https://react-hook-form.com/) | Client-side form validation |
| **Schema** | [Zod](https://zod.dev/) | TypeScript-first schema validation |

## 🚀 Getting Started

Follow these steps to get your project up and running locally.

### 1. Clone the Repository

```bash
git clone https://github.com/meklasdev/modern-saas-starter.git
cd modern-saas-starter
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Copy the example environment file and update it with your secrets.

```bash
cp .env.example .env.local
```

**Required Variables (`.env.local`):**

```env
# Supabase - Get these from your Supabase Project Settings > API
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Stripe - Get these from Stripe Dashboard > Developers > API Keys
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Database Setup (Supabase)

1.  Go to your [Supabase Dashboard](https://supabase.com/dashboard).
2.  Open the **SQL Editor**.
3.  Copy the contents of `schema.sql` from this repository.
4.  Run the query to create:
    *   `public.profiles` table.
    *   `public.subscriptions` table.
    *   Automatic triggers for new user signups.

### 5. Run the Developer Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

A clean, opinionated structure designed for scalability.

```text
modern-saas-starter/
├── src/
│   ├── actions/        # Server Actions (Mutations & Data Access)
│   ├── app/            # Next.js App Router (Pages, Layouts, API Routes)
│   │   ├── (auth)/     # Auth-related pages (grouped)
│   │   ├── dashboard/  # Protected application routes
│   │   └── page.tsx    # Landing page
│   ├── components/     # React Components
│   │   ├── ui/         # Generic accessible UI atoms (shadcn)
│   │   └── ...         # Feature-specific components
│   ├── lib/            # Utilities (Supabase helpers, Stripe SDK, Utils)
│   └── types/          # Global TypeScript definitions
├── public/             # Static assets (images, fonts)
├── middleware.ts       # Edge Middleware for Route Protection
└── schema.sql          # Database Schema Source of Truth
```

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 👤 Author

**meklas**

*   GitHub: [@meklasdev](https://github.com/meklasdev)

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
