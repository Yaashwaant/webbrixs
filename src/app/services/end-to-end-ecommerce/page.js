import Link from "next/link";
import { ProjectMarquee } from "../../../components/Marquees";
import ProcessBlock from "../../../components/ProcessBlock";
import FAQ from "../../../components/FAQ";

export const metadata = {
  title: "End to End E-commerce Solutions",
  description: "Webbrixs designs, integrates, and builds multi-vendor marketplaces, shopping systems, custom Stripe checkouts, and inventory trackers.",
};

export default function EcommercePage() {
  const offerings = [
    { t: "Multi-Vendor Marketplaces", d: "Formulating vendor-specific commission schemes, restock queues, and unified store layers." },
    { t: "Secure Gateways", d: "Fortifying Stripe, PayPal, Apple Pay, and Google checkout endpoints w/ cryptographic verification." },
    { t: "Automated Restock Alert", d: "Syncing items dynamically across multiple warehouses and alerting stock limits." },
    { t: "Cart Optimization", d: "Frictionless single-click checkout matrices designed to slash cart abandonment metrics." },
    { t: "Courier Integration", d: "Binding automated shipping quotes, label prints, and tracking links to shipping pipelines." },
    { t: "Speed-tuned Storefronts", d: "Leveraging ISR (Incremental Static Regeneration) for high concurrency scaling and speed." }
  ];

  const tools = ["Figma", "Next.js", "Node.js", "React", "Prisma", "PostgreSQL", "Docker", "JavaScript"];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center px-6 md:px-20 pt-[140px] pb-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10"></div>
        <div 
          className="absolute inset-0 z-0 opacity-30" 
          style={{ background: "radial-gradient(circle at 50% 30%, rgba(0, 240, 255, 0.15) 0%, rgba(6, 6, 10, 0) 70%)" }}
        ></div>

        <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span> Flagship Service
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-on-surface">
            End to End <span className="text-gradient">E-commerce</span>
          </h1>
          
          <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl mt-4">
            We engineer scalable, high-conversion multi-vendor platforms and digital storefronts with premium layout architectures.
          </p>
          
          <div className="flex gap-4 pt-4">
            <a 
              className="px-8 py-3.5 rounded-lg bg-accent text-on-surface hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(0, 240, 255, 0.3)] transition-all duration-300 font-semibold" 
              href="#contact"
            >
              Start Your Project
            </a>
            <Link 
              className="px-8 py-3.5 rounded-lg bg-white/5 text-on-surface border border-white/10 hover:bg-white/10 transition-all duration-300 font-semibold" 
              href="/portfolio"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Marquee scroll */}
      <section className="w-full overflow-hidden bg-surface/10 py-6 border-y border-white/5">
        <ProjectMarquee />
      </section>

      {/* What We Offer Bento Grid */}
      <section className="px-6 md:px-20 py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-on-surface">What We Offer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map((item, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-accent/40 glow-hover transition-all">
              <h3 className="text-xl font-bold mb-3 text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-accent text-[20px]">check_circle</span>
                {item.t}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>



      {/* Testimonials & Proof section */}
      <section className="px-6 md:px-20 py-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        <div className="flex flex-col justify-between gap-8">
          <div className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col justify-between h-full">
            <div>
              <span className="text-4xl md:text-5xl font-bold text-accent">148+ Creative Minds</span>
              <p className="text-sm text-text-secondary leading-relaxed mt-4">
                Our collaborative design and software engineering squad operates internationally across multi-tiered workflows.
              </p>
            </div>
          </div>
          
          <div className="glass-panel p-8 rounded-2xl border border-white/5 flex flex-col justify-between h-full">
            <div>
              <span className="text-4xl md:text-5xl font-bold text-accent">5+ Global Locations</span>
              <p className="text-sm text-text-secondary leading-relaxed mt-4">
                Managing platforms across continents with optimized content distribution networks and secure hosting matrices.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-2xl border border-white/5 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] pointer-events-none"></div>
          <span className="material-symbols-outlined text-accent text-5xl opacity-40">format_quote</span>
          <p className="text-base md:text-lg text-on-surface leading-relaxed mt-6 italic relative z-10">
            \"Webbrixs did an excellent job modernizing our product page. The new application is fast, responsive, and much easier for our customers to use. Their attention to detail and technical expertise really stood out, and we've seen a noticeable improvement in user engagement since the redesign. Very happy with the results.\"
          </p>
          <div className="mt-8 flex justify-between items-end">
            <div>
              <h4 className="font-bold text-sm md:text-base text-on-surface">Fardin Evan</h4>
              <p className="text-xs text-text-secondary mt-1">Tech Leader @ Hunter Tech</p>
            </div>
            <div className="flex items-center gap-1 text-accent font-bold text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span>4.9 / 5</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Tech We Master */}
      <section className="px-6 md:px-20 py-24 max-w-7xl mx-auto border-t border-white/5">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Tools &amp; Technologies We Master</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {tools.map((tool) => (
            <span 
              key={tool} 
              className="px-6 py-3 rounded-xl bg-surface border border-white/5 text-sm md:text-base font-semibold hover:border-accent hover:text-accent transition-all duration-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Shared Process Block */}
      <ProcessBlock />

      {/* FAQ Component */}
      <FAQ />

      {/* Contact Section */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel p-8 rounded-2xl text-center flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-accent to-accent/30 mb-4 flex items-center justify-center text-on-surface font-extrabold text-3xl shadow-[0_0_20px_rgba(0, 240, 255,0.3)]">
                Y
              </div>
              <h3 className="text-xl font-bold mb-1 text-on-surface">Yashwant</h3>
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Founder &amp; CEO, Webbrixs</p>
              <p className="text-xs text-text-secondary leading-relaxed mb-6 max-w-[240px]">
                Started building websites in college; now leads a team turning design and AI automation into real business growth.
              </p>
              <div className="flex flex-col gap-2.5 items-center">
                <a href="tel:+918275700505" className="flex items-center gap-2 text-accent hover:text-accent-hover transition-colors font-bold text-sm">
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>+91 82757 00505</span>
                </a>
                <a 
                  href="https://wa.me/918793334476" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-[#25D366] hover:text-[#20ba5a] transition-colors font-bold text-sm"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Let's start the dialogue now!</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className="bg-surface border border-border rounded-xl px-4 py-3 text-on-surface focus:border-accent outline-none" placeholder="Full Name *" type="text" required />
                <input className="bg-surface border border-border rounded-xl px-4 py-3 text-on-surface focus:border-accent outline-none" placeholder="Email *" type="email" required />
                <input className="bg-surface border border-border rounded-xl px-4 py-3 text-on-surface focus:border-accent outline-none" placeholder="Company *" type="text" required />
                <input className="bg-surface border border-border rounded-xl px-4 py-3 text-on-surface focus:border-accent outline-none" placeholder="Phone *" type="tel" required />
              </div>
              <textarea className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-on-surface focus:border-accent outline-none" placeholder="Message *" rows={4} required></textarea>
              <button className="bg-accent text-on-surface font-bold text-sm px-8 py-4 rounded-xl hover:bg-accent-hover transition-all" type="submit">
                Send my query
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
