import Link from "next/link";

export const metadata = {
  title: "Our Services Overview",
  description: "Webbrixs offers flagship custom web design & development, resilient cloud-native software engineering, and high-conversion e-commerce storefront architectures.",
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Web Design & Development",
      desc: "Immersive UI/UX designs coupled with high-speed headless CMS development and fully responsive layouts.",
      path: "/services/web-design-development",
      icon: "web",
    },
    {
      title: "Software Development",
      desc: "Robust cloud architecture, API integrations, multi-tenant SaaS structures, and internal tool automation.",
      path: "/services/software-development",
      icon: "code",
    },
    {
      title: "End to End E-commerce Solution",
      desc: "Scaling business footprints w/ secure payment gates, inventories, vendor routing, and custom Shopify / Stripe connectors.",
      path: "/services/end-to-end-ecommerce",
      icon: "shopping_bag",
    },
  ];

  return (
    <main className="pt-32 pb-24 px-6 md:px-20 max-w-7xl mx-auto w-full">
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-on-surface mb-6">
          Our Services <span className="text-gradient">Index</span>
        </h1>
        <p className="text-base md:text-lg text-text-secondary leading-relaxed">
          Crafting optimized digital products w/ terracotta-precision and scalable frameworks. Explore our primary development categories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {serviceCategories.map((service, idx) => (
          <div
            key={idx}
            className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-accent/40 transition-all duration-300 group flex flex-col justify-between glow-hover"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-on-surface group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-8">{service.desc}</p>
            </div>
            
            <Link
              href={service.path}
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:translate-x-1 transition-all"
            >
              <span>Explore Capability</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
