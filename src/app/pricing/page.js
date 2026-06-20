import Link from "next/link";
import FAQ from "../../components/FAQ";

export const metadata = {
  title: "Pricing Plans",
  description: "Webbrixs simple and affordable pricing models on custom-quotation structures for web design, software development, and end-to-end e-commerce solutions.",
};

export default function PricingPage() {
  const plans = [
    {
      title: "Web Design & Development",
      desc: "Best for growing startups, personal branding, and high-conversion landing pages.",
      checklist: [
        "Custom UI/UX Design",
        "Fully Responsive Layout",
        "Fast Loading & SEO Optimized",
        "Modern Frontend Development",
        "Admin Panel Integration",
        "API & Third-Party Integration",
        "Contact & Lead Collection System",
        "Performance & Security Optimization",
      ],
      badge: "Web Dev Package",
    },
    {
      title: "Software Development",
      desc: "Robust, custom-engineered tools designed to optimize operations and scale backend capacity.",
      checklist: [
        "Custom SaaS Development",
        "ERP/CRM Solutions",
        "POS & Billing System",
        "Inventory Management",
        "API Integration System",
        "Secure Database Architecture",
        "Automation & Workflow System",
        "Scalable Cloud Infrastructure",
      ],
      badge: "Enterprise Package",
      featured: true,
    },
    {
      title: "End to End E-commerce",
      desc: "Complete digital storefronts and multi-vendor marketplaces styled for sales conversion.",
      checklist: [
        "Multi-Vendor E-Commerce System",
        "Secure Payment Gateway Integration",
        "Courier & Delivery Integration",
        "Inventory & Order Management",
        "Marketing & Conversion Setup",
        "SEO & Speed Optimization",
        "Customer Support System",
        "Analytics & Sales Tracking",
      ],
      badge: "Storefront Package",
    },
  ];

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-16 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-on-surface mb-6">
          Simple and <span className="text-gradient">Affordable Pricing</span>
        </h1>
        <p className="text-base md:text-lg text-text-secondary leading-relaxed">
          Because we reject generic templates and build custom-tailored code, we work on a flexible custom-quotation model. Select a package category to discuss your needs.
        </p>
      </section>

      {/* Pricing Cards Grid */}
      <section className="px-6 md:px-20 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`glass-panel p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                plan.featured ? "border-accent ring-1 ring-accent" : "border-white/5 hover:border-accent/40"
              }`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-accent text-on-surface text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  Popular
                </div>
              )}
              
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-semibold text-accent">
                  {plan.badge}
                </span>
                
                <h3 className="text-2xl font-bold text-on-surface">{plan.title}</h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed">{plan.desc}</p>
                
                <div className="w-full h-px bg-white/10"></div>
                
                <ul className="space-y-3 text-xs md:text-sm">
                  {plan.checklist.map((item, cidx) => (
                    <li key={cidx} className="flex items-center gap-3 text-on-surface-variant">
                      <span className="material-symbols-outlined text-accent text-[18px]">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <Link 
                  href="/contact-us"
                  className={`block w-full py-4 text-center rounded-xl font-bold text-sm transition-all duration-300 ${
                    plan.featured 
                      ? "bg-accent text-on-surface hover:bg-accent-hover shadow-[0_0_20px_rgba(255,90,54,0.3)]" 
                      : "bg-white/5 text-on-surface hover:bg-white/10"
                  }`}
                >
                  Discuss Quotation
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-24 px-6 md:px-20 text-center max-w-4xl mx-auto">
        <div className="glass-panel p-12 rounded-3xl border border-white/5 space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold">Ready to work together?</h2>
          <p className="text-sm md:text-base text-text-secondary max-w-lg mx-auto">
            Get a tailored, line-item quotation customized to your exact timeline, budget, and business scope.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-accent text-on-surface font-bold text-xs px-8 py-4 rounded-xl hover:bg-accent-hover transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* FAQ Component */}
      <FAQ />
    </main>
  );
}
