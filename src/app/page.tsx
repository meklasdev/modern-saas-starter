import { ActionButton } from "@/components/ui/action-button"; // Does not exist yet, using inline button instead
import { PricingTable } from "@/components/pricing-table";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 xl:py-48 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
              🚀 Version 2.0 is live
            </div>
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 pb-2">
              Launch Your SaaS <br className="hidden md:inline" />
              In Days, Not Months.
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl dark:text-gray-400">
              The comprehensive Next.js boilerplate for startups. Auth, Payments, Database, and UI pre-configured. Focus on your product.
            </p>
            <div className="space-x-4 pt-4">
              <Link
                href="/login"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#features"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-24 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 p-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Authentication Ready</h3>
              <p className="text-muted-foreground">
                Secure user management with Supabase Auth. Email/Password, Social Login, and Protected Routes configured via Middleware.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 p-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Subscription Payments</h3>
              <p className="text-muted-foreground">
                Stripe integration with webhook handling. Manage subscriptions, upgrades, and cancellations effortlessly.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 p-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Modern UI/UX</h3>
              <p className="text-muted-foreground">
                Built with Tailwind CSS and shadcn/ui. Responsive, accessible, and easily themeable components.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingTable />

      {/* Footer */}
      <footer className="w-full py-12 border-t">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
           <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by <a href="https://github.com/meklasdev" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">meklas</a>. The source code is available on <a href="https://github.com/meklasdev/modern-saas-starter" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">GitHub</a>.
          </p>
        </div>
      </footer>
    </main>
  );
}
