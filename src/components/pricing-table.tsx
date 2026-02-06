import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Hobby",
    description: "Perfect for side projects and experiments.",
    price: "$0",
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "Community support",
      "48-hour response time",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "For serious indie hackers and startups.",
    price: "$29",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority email support",
      "24-hour response time",
      "Custom domain",
    ],
    cta: "Subscribe Now",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large teams and scaling businesses.",
    price: "$99",
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "Dedicated account manager",
      "1-hour response time",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function PricingTable() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, transparent pricing
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-muted-foreground">
          Choose the plan that fits your needs. No hidden fees. Cancel anytime.
        </p>
        
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "flex flex-col justify-between rounded-3xl bg-card p-8 ring-1 ring-border xl:p-10 transition-all hover:shadow-lg",
                plan.popular ? "ring-2 ring-primary relative scale-105 shadow-md" : "ring-gray-200"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                   <div className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
                     Most Popular
                   </div>
                </div>
              )}
              
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-foreground">
                    {plan.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {plan.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-foreground">{plan.price}</span>
                  <span className="text-sm font-semibold leading-6 text-muted-foreground">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                className={cn(
                  "mt-8 block rounded-md px-3.5 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-primary"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 ring-1 ring-inset ring-border"
                )}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
