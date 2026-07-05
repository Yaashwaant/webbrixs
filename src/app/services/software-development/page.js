import Link from "next/link";
import ScrollReveal from "../../../components/ScrollReveal";

export const metadata = {
  title: "Software Development",
  description: "Webbrixs builds resilient, scalable software solutions. From cloud-native SaaS platforms to high-speed enterprise APIs and legacy modernization.",
};

export default function SoftwareDevelopmentPage() {
  const tools = ["Figma", "Next.js", "Node.js", "React", "Prisma", "PostgreSQL", "Docker", "JavaScript"];

  return (
    <main className="flex-grow pt-32 pb-24 px-6 md:px-20 max-w-7xl mx-auto w-full relative z-10">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>

      {/* Hero Section */}
      <section className="mb-32 text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <ScrollReveal delay={0} direction="left" className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-sm text-accent font-semibold mb-4 backdrop-blur-md">
            <span className="material-symbols-outlined text-[18px]">code</span>
            <span>Enterprise Engineering</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gradient leading-tight">
            Architecting <br />Digital Power.
          </h1>
          <p className="text-base md:text-lg text-text-secondary max-w-xl leading-relaxed">
            We build resilient, scalable software solutions. From high-performance SaaS architectures to robust enterprise APIs, our engineering transforms complex challenges into elegant efficiency.
          </p>
          <div className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link 
              href="/contact-us" 
              className="bg-accent/10 border border-accent/30 text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-on-surface hover:shadow-[0_0_30px_rgba(0, 240, 255,0.3)] transition-all duration-300 active:scale-95 flex items-center gap-2"
            >
              Discuss Architecture
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="right" className="relative h-[400px] w-full rounded-2xl bg-surface/50 border border-white/10 backdrop-blur-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-surface via-surface-container to-accent/5 opacity-80 z-10 mix-blend-overlay"></div>
          <img 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
            alt="Futuristic software architecture design nodes" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0WyAsqHlsTdUu5qImUYqS80OSJb8mXXbGv8Xo2tlkIgPYKUJraUbkUEcVV3-gvgheUqQ_EOItUznz2n2CYCs0GXJCZV8Uc09RBICIIpFHdrSRpK-elQ5A_-d7MCc-2qznpl4xQOjuiyQywnWp2p9zr20mcuev0eefIWH7J29BxvBaFKPEB4DGQXKWeq-sqzmfoIpB_pJPgxEK5vhcfmvv0Nfbe9TODSIk01Fdt9IRt9b65EEU0C3f4NhkQXWdRkZq_Wi9tHYw2JA9"
          />
          {/* Decorative UI Elements */}
          <div className="absolute top-6 right-6 z-20 bg-surface/80 border border-white/10 px-4 py-2 rounded-lg flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <span className="text-xs font-semibold text-on-surface">System Optimal</span>
          </div>
        </ScrollReveal>
      </section>

      {/* Core Capabilities Bento Grid */}
      <section className="mb-32">
        <ScrollReveal delay={0} direction="up">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-on-surface">Core Capabilities</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* SaaS Solutions */}
          <ScrollReveal delay={100} direction="up" className="md:col-span-2 h-full">
            <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between h-full group glow-hover transition-all duration-300 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 text-accent/5 group-hover:text-accent/10 transition-colors duration-500 pointer-events-none">
                <span className="material-symbols-outlined text-[200px]">cloud_sync</span>
              </div>
              <div>
                <span className="material-symbols-outlined text-accent text-3xl mb-4">cloud</span>
                <h3 className="text-xl font-bold mb-2 text-on-surface">SaaS Architecture</h3>
                <p className="text-text-secondary text-sm max-w-md">Multi-tenant, cloud-native applications designed for scale. We build scalable foundations that handle high concurrency with zero friction.</p>
              </div>
              <div className="flex gap-2 z-10">
                <span className="text-xs px-2 py-1 rounded border border-white/10 text-text-secondary">React</span>
                <span className="text-xs px-2 py-1 rounded border border-white/10 text-text-secondary">Node.js</span>
                <span className="text-xs px-2 py-1 rounded border border-white/10 text-text-secondary">AWS</span>
              </div>
            </div>
          </ScrollReveal>

          {/* API Dev */}
          <ScrollReveal delay={250} direction="up" className="h-full">
            <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between h-full group glow-hover transition-all duration-300">
              <div>
                <span className="material-symbols-outlined text-accent text-3xl mb-4">api</span>
                <h3 className="text-xl font-bold mb-2 text-on-surface">API Development</h3>
                <p className="text-text-secondary text-sm">RESTful and GraphQL APIs that serve as the secure, high-speed connective tissue for your digital ecosystem.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Legacy Modernization */}
          <ScrollReveal delay={150} direction="up" className="h-full">
            <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between h-full group glow-hover transition-all duration-300">
              <div>
                <span className="material-symbols-outlined text-accent text-3xl mb-4">upgrade</span>
                <h3 className="text-xl font-bold mb-2 text-on-surface">System Modernization</h3>
                <p className="text-text-secondary text-sm">Transform monolithic legacy codebases into agile, microservices architectures.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Enterprise Systems */}
          <ScrollReveal delay={300} direction="up" className="md:col-span-2 h-full">
            <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between h-full group glow-hover transition-all duration-300 relative overflow-hidden">
              <div className="flex justify-between items-start z-10 relative">
                <div>
                  <span className="material-symbols-outlined text-accent text-3xl mb-4">corporate_fare</span>
                  <h3 className="text-xl font-bold mb-2 text-on-surface">Enterprise Software</h3>
                  <p className="text-text-secondary text-sm max-w-md">Custom ERPs, CRMs, and internal tooling. Secure, compliant, and designed to streamline complex operational workflows.</p>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-30 mix-blend-screen pointer-events-none">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Technology background texture" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoPYewi4r59C6Go9sZWdS5ZKQ2RpMV7eWMy07uDNyqwikLHcJcKGE1xpAdNEMSt5759wOnU__1FHMi85BzMvC-BlrQUpy3gs33LyglV8YS47UJvjvPcaZ9TVWD8y_6cBNQoidFXnNhu6eydCfo54Ge-4bQ8eEZJMekqFVZ8ISGzuXeJ7VjVpJKvnS3A0_BZysCCD95p-0jQsrnUSJSgxaZ18z44ZCp3iiGc5fMjVHYX-iAGaGeBX6DuNQOpL_X6GemM91xoqejvaHK"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tools & Tech We Master */}
      <section className="px-6 md:px-20 py-24 max-w-7xl mx-auto border-t border-white/5">
        <ScrollReveal delay={0} direction="up">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Tools &amp; Technologies We Master</h2>
        </ScrollReveal>
        <ScrollReveal delay={150} direction="up" className="flex flex-wrap gap-4 justify-center">
          {tools.map((tool) => (
            <span 
              key={tool} 
              className="px-6 py-3 rounded-xl bg-surface border border-white/5 text-sm md:text-base font-semibold hover:border-accent hover:text-accent transition-all duration-300"
            >
              {tool}
            </span>
          ))}
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <ScrollReveal delay={0} direction="up">
        <section className="glass-panel rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-on-surface">Ready to Scale?</h2>
            <p className="text-text-secondary text-base md:text-lg">
              Let's engineer a solution that pushes the boundaries of your industry. Partner with Webbrixs for uncompromising technical quality.
            </p>
            <Link 
              href="/contact-us" 
              className="inline-block mt-6 bg-accent/20 border border-accent text-accent px-8 py-3 rounded-full font-bold hover:bg-accent hover:text-on-surface hover:shadow-[0_0_40px_rgba(0, 240, 255,0.4)] transition-all duration-300"
            >
              Initiate Project
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
