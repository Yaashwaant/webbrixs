import Link from "next/link";

export const metadata = {
  title: "Our Process",
  description: "Webbrixs' transparent, rigorous blueprint for design and development. Discovery, design concept, and engineering steps ensuring high fidelity and quality.",
};

export default function ProcessPage() {
  const steps = [
    {
      num: "01",
      title: "Discovery Phase",
      desc: "We dive deep into understanding your brand, objectives, and target audience. Through comprehensive research and stakeholder interviews, we define the strategic foundation.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCviVX1LH1CteVePgYV_Y-ZVHw0rOmMAi0i3vYAN608wfNsKLtzUQVyDtvASmKYvI4gi22L2cVmlTarrwb26Tl6IEQuezUwdLTSRZK1rqkjSOQLhqfs8iF8bhF_erS2Ifalbm9vjFMw_EjZfcZbMLQGTACEgdyycn9Tuv6dPnNWZEHIEsWtMCESNL5P8cmEvkE7xByH9CoxFXu71jpzU8c-GuMzLDsxujiusO9jQ6PBAYOTJ9_4py5Ero5TcxQVXbERPaMzLlrqnpB7",
      icon: "travel_explore",
      isEven: false,
    },
    {
      num: "02",
      title: "Design Concept",
      desc: "Translating insights into visual realities. We create wireframes, interactive prototypes, and high-fidelity designs that align with your brand identity and user expectations.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2xCIzJ_tdWRADMRwNv555BqWX1CZEyLsLaxYK4czDrbXQNCAG96hPMZJk3E4K9jRQ0BViaonCzXjkZPpv20FoDv8ZAfVEcHFnFbzQ2HBObUjO1UhclNo38eAl8M9F4Jhjg06Si7b4whM00-euEeaK_eacFSyeFONwhE08XuFL8HRM1YsEaHv3dgAB-hTzxCSYpvp3UQOu-QzU27q_LELnp1Gumi5ROQBuqfReiI-hSomG_CljmsP1zCvTHyFqvTMAtnB3MA_8ypcz",
      icon: "design_services",
      isEven: true,
    },
  ];

  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="px-6 md:px-20 py-24 max-w-7xl mx-auto relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary-container/20 to-transparent blur-[120px] -z-10 rounded-full"></div>
        
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-container/15 border border-primary-container/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(125,211,252,0.8)]"></span>
            <span className="font-semibold text-xs text-primary uppercase tracking-wider">Methodology</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-on-surface-variant leading-[1.1]">
            Our Design &amp; <br />Development Process
          </h1>
          
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mb-8 leading-relaxed">
            A rigorous, transparent methodology ensuring on-time delivery and flawless execution. We transform complex challenges into elegant digital solutions through structured innovation.
          </p>
          
          <a 
            href="#blueprint" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-background bg-primary hover:scale-105 glow-hover transition-all duration-300"
          >
            Explore The Process
            <span className="material-symbols-outlined text-[18px]">south</span>
          </a>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="px-6 md:px-20 py-24 max-w-7xl mx-auto relative" id="blueprint">
        <h2 className="text-3xl md:text-5xl font-bold mb-24 text-center text-on-surface">The Webbrixs Blueprint</h2>
        
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2"></div>
          
          <div className="flex flex-col gap-24">
            {steps.map((step) => (
              <div 
                key={step.num}
                className="relative flex flex-col md:flex-row items-center justify-between gap-12 group"
              >
                {/* Left Side */}
                <div className={`w-full md:w-5/12 ${step.isEven ? "order-1 md:order-2 text-left" : "order-2 md:order-1 text-left md:text-right"}`}>
                  <div className="glass-panel p-8 rounded-3xl w-full max-w-md relative overflow-hidden transition-all duration-500 hover:border-primary/30 hover:glow-hover">
                    <div className={`absolute top-0 text-9xl font-bold font-display-xl text-primary/5 -z-10 -mt-8 ${step.isEven ? "left-0 -ml-8" : "right-0 -mr-8"}`}>
                      {step.num}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Central Icon Indicator */}
                <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-surface-elevated border-2 border-primary z-10 flex items-center justify-center shadow-[0_0_30px_rgba(125,211,252,0.2)] md:flex hidden">
                  <span className="material-symbols-outlined text-primary text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {step.icon}
                  </span>
                </div>

                {/* Right Side (Image panel) */}
                <div className={`w-full md:w-5/12 ${step.isEven ? "order-2 md:order-1" : "order-1 md:order-2"}`}>
                  <div className="aspect-video rounded-3xl overflow-hidden glass-panel flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-transparent mix-blend-overlay"></div>
                    <img 
                      className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" 
                      src={step.img} 
                      alt={step.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-20 py-24 max-w-7xl mx-auto">
        <div className="glass-panel rounded-3xl p-12 md:p-24 text-center relative overflow-hidden bg-surface/50 border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 via-transparent to-secondary-container/10"></div>
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="material-symbols-outlined text-6xl text-primary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>
              rocket_launch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-6">Ready to start your project?</h2>
            <p className="text-base md:text-lg text-text-secondary mb-10">
              Let's transform your vision into a high-performance digital reality. Our team is ready to begin the discovery phase.
            </p>
            <Link 
              href="/contact" 
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-background bg-primary hover:scale-105 glow-hover transition-all duration-300"
            >
              Start a Project
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
