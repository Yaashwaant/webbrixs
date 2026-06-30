import Link from "next/link";
import { ProjectMarquee } from "../components/Marquees";
import ProcessBlock from "../components/ProcessBlock";
import Stats from "../components/Stats";
import FAQ from "../components/FAQ";
import ProjectSlider from "../components/ProjectSlider";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "Webbrixs - Custom Web Design & Software Engineering Agency",
  description: "We are a specialized engineering agency delivering elite UI/UX, full-stack web development, and custom AI automation. We build scalable digital ecosystems for businesses that demand high performance and rapid growth.",
};

export default function Home() {
  const comparisonRows = [
    {
      other: "Experienced team delivering standard solutions.",
      webbrixs: "Highly skilled specialists delivering customized solutions.",
    },
    {
      other: "Offers standard, template-based designs.",
      webbrixs: "Offers innovative, custom website designs.",
    },
    {
      other: "Limited post-launch support and updates.",
      webbrixs: "Comprehensive post-launch support and updates.",
    },
    {
      other: "Basic performance with average loading times.",
      webbrixs: "Optimal performance with fast loading times.",
    },
    {
      other: "Basic SEO practices implemented.",
      webbrixs: "Advanced SEO tactics for enhanced online visibility.",
    },
  ];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-20 pt-24 pb-12 text-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-60"
          >
            <source src="/this_is_a_video_of_website_pil.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center gap-4">
          <ScrollReveal delay={0} direction="up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-elevated text-accent font-semibold text-xs backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.2),0_0_20px_rgba(255,90,54,0.15)] transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_30px_rgba(255,90,54,0.3)] hover:scale-105 cursor-default animate-float" style={{ willChange: "transform" }}>
              <span className="relative flex h-2.5 w-2.5 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" style={{ animationDuration: '3s' }}></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              Premium Engineering Agency
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={150} direction="up">
            <div style={{ perspective: "1000px" }}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60 leading-[1.05] max-w-4xl drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]" style={{ willChange: "transform", transform: "translateZ(30px)" }}>
                We build <br className="hidden md:block" />
                <span className="text-gradient">high-performance</span> web systems.
              </h1>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={300} direction="up">
            <p className="text-base md:text-lg lg:text-xl text-text-secondary max-w-2xl mt-2 leading-relaxed font-medium drop-shadow-md">
              UI/UX, full-stack development, and AI automation — for businesses that move fast.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={450} direction="up">
            <div className="flex flex-col sm:flex-row gap-5 mt-6 w-full sm:w-auto items-center justify-center">
              <a 
                href="#contact" 
                className="group bg-accent text-white font-bold text-base px-8 py-4 rounded-xl hover:bg-accent-hover hover:scale-105 shadow-[0_0_20px_rgba(255,90,54,0.4)] hover:shadow-[0_0_40px_rgba(255,90,54,0.6)] transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </span>
              </a>
              <Link 
                href="/portfolio" 
                className="group glass-panel text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                View Portfolio
                <span className="material-symbols-outlined text-white/50 group-hover:text-white transition-colors">grid_view</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent z-10"></div>
        <div className="absolute top-1/2 -left-[10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      </section>

      {/* Project Marquee Hero Component */}
      <section className="w-full overflow-hidden bg-surface/10 border-y border-white/5 py-4">
        <ProjectMarquee />
      </section>



      {/* Core Services Section */}
      <section className="px-6 md:px-20 py-24 max-w-7xl mx-auto" id="services">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-on-surface">Explore Our Core Services</h2>
          <p className="text-sm md:text-base text-text-secondary max-w-2xl">
            Discover our comprehensive range of services tailored to enhance your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-surface/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 group flex flex-col justify-between glow-hover">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="text-accent font-bold text-4xl opacity-50">01</div>
                <span className="font-mono text-xs text-accent opacity-60">/services/web-design-development</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-on-surface group-hover:text-accent transition-colors">
                Web Design &amp; Development
              </h3>
              <p className="text-sm text-text-secondary mb-8 leading-relaxed">
                We design intuitive interfaces and seamless user experiences that enhance usability and keep your audience engaged.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Custom UI/UX Design", "Responsive Layouts", "SEO Optimized", "CMS Integration"].map((pill) => (
                  <span key={pill} className="px-3 py-1 rounded-full border border-white/5 bg-white/5 text-xs text-text-secondary">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#contact" className="bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-accent hover:text-on-surface transition-all">
                Get Quotation
              </a>
              <Link className="inline-flex items-center gap-1 text-on-surface-variant hover:text-accent text-xs font-semibold" href="/services/web-design-development">
                Learn More <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
              </Link>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-surface/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 group transform md:-translate-y-4 flex flex-col justify-between glow-hover">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="text-accent font-bold text-4xl opacity-50">02</div>
                <span className="font-mono text-xs text-accent opacity-60">/services/software-development</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-on-surface group-hover:text-accent transition-colors">
                Software Development
              </h3>
              <p className="text-sm text-text-secondary mb-8 leading-relaxed">
                Robust and scalable software solutions built for performance and growth. From custom SaaS platforms to seamless API integrations.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Custom SaaS Solutions", "API Development", "Cloud Infrastructure", "Enterprise ERP/CRM"].map((pill) => (
                  <span key={pill} className="px-3 py-1 rounded-full border border-white/5 bg-white/5 text-xs text-text-secondary">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#contact" className="bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-accent hover:text-on-surface transition-all">
                Get Quotation
              </a>
              <Link className="inline-flex items-center gap-1 text-on-surface-variant hover:text-accent text-xs font-semibold" href="/services/software-development">
                Learn More <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
              </Link>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-surface/50 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 group flex flex-col justify-between glow-hover">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div className="text-accent font-bold text-4xl opacity-50">03</div>
                <span className="font-mono text-xs text-accent opacity-60">/services/end-to-end-ecommerce</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-on-surface group-hover:text-accent transition-colors">
                End to End E-commerce
              </h3>
              <p className="text-sm text-text-secondary mb-8 leading-relaxed">
                Complete eCommerce solutions that scale with your business. We build secure payment gateways, inventories, and marketplaces.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Multi-vendor Platforms", "Secure Payments", "Inventory Systems", "Cart Optimization"].map((pill) => (
                  <span key={pill} className="px-3 py-1 rounded-full border border-white/5 bg-white/5 text-xs text-text-secondary">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#contact" className="bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-accent hover:text-on-surface transition-all">
                Get Quotation
              </a>
              <Link className="inline-flex items-center gap-1 text-on-surface-variant hover:text-accent text-xs font-semibold" href="/services/end-to-end-ecommerce">
                Learn More <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Slider Section */}
      <section className="px-6 md:px-20 py-24 max-w-7xl mx-auto my-12">
        <ScrollReveal delay={0} direction="up">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 px-4 md:px-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-on-surface">Explore Our Recent Projects</h2>
              <p className="text-sm md:text-base text-text-secondary">
                Browse through our portfolio showcasing diverse, innovative web design projects and client successes.
              </p>
            </div>
            <Link 
              href="/portfolio" 
              className="bg-accent/10 border border-accent/20 text-accent font-semibold text-sm px-6 py-3 rounded-lg hover:bg-accent hover:text-on-surface hover:shadow-[0_0_20px_rgba(255,90,54,0.3)] transition-all shrink-0 cursor-pointer"
            >
              View All Projects
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200} direction="up">
          <ProjectSlider />
        </ScrollReveal>
      </section>

      {/* Why Webbriks Stands Out */}
      <section className="px-6 md:px-20 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Webbriks Stands Out</h2>
          <p className="text-sm md:text-base text-text-secondary max-w-2xl mx-auto">
            Discover why Webbriks excels in delivering innovative, client-focused web design solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: "Expert Team", d: "Dedicated professionals with expertise in cutting-edge web design and development." },
            { t: "Client-Centric", d: "Tailoring solutions to meet your unique business needs and exceed expectations." },
            { t: "Proven Experience", d: "Years of successfully delivering impactful web solutions across diverse industries." },
            { t: "Timely Delivery", d: "Meeting deadlines consistently without compromising on quality or precision." },
            { t: "Responsive Solutions", d: "Ensuring seamless performance across all devices for optimal user experience." },
            { t: "Transparent", d: "Clear, open lines of communication throughout every stage of your project." },
          ].map((item, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-accent/30 glow-hover transition-all">
              <h3 className="text-xl font-bold mb-3 text-on-surface">{item.t}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Methodology Component */}
      <ProcessBlock />

      {/* Comparison: Choosing Webbrixs Over Others */}
      <section className="px-6 md:px-20 py-24 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Choosing Webbrixs Over Others</h2>
          <p className="text-sm md:text-base text-text-secondary">
            See why Webbrixs stands out with superior service, innovation, and client satisfaction benchmarks.
          </p>
        </div>

        <div className="glass-panel rounded-2xl overflow-hidden border border-white/5">
          <div className="grid grid-cols-12 bg-white/5 py-4 px-6 font-bold text-sm text-center uppercase tracking-widest text-text-secondary border-b border-white/5">
            <div className="col-span-5 text-left">Other Agencies</div>
            <div className="col-span-2 text-accent">VS</div>
            <div className="col-span-5 text-right text-white">Webbrixs</div>
          </div>
          <div className="divide-y divide-white/5 text-xs md:text-sm">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 py-5 px-6 items-center text-center">
                <div className="col-span-5 text-left text-text-secondary leading-relaxed">{row.other}</div>
                <div className="col-span-2 text-accent font-bold">★</div>
                <div className="col-span-5 text-right text-on-surface font-semibold leading-relaxed">{row.webbrixs}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats component */}
      <Stats />

      {/* FAQ Component */}
      <FAQ />

      {/* CTA Start Your Project Banner */}
      <section className="px-6 md:px-20 py-16 max-w-7xl mx-auto">
        <div className="glass-elevated rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 blur-[120px] pointer-events-none"></div>
          <div className="space-y-4 max-w-xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold">Start Your Project</h2>
            <p className="text-sm md:text-base text-text-secondary">
              Contact us today to start crafting your exceptional and customized website solution.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              {["Customized design", "Ongoing support", "Fast delivery"].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <a
            href="#contact"
            className="px-8 py-4 bg-accent text-on-surface hover:bg-accent-hover shadow-[0_0_30px_rgba(255,90,54,0.4)] transition-all font-bold rounded-xl text-center shrink-0"
          >
            Start a Project
          </a>
        </div>
      </section>

      {/* Contact Form Section with founder details */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6">
            {/* Founder Card */}
            <div className="glass-panel p-8 rounded-2xl text-center flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-accent to-accent/30 mb-4 flex items-center justify-center text-on-surface font-extrabold text-3xl shadow-[0_0_20px_rgba(255,90,54,0.3)]">
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

            {/* Trust Bullets */}
            <div className="glass-panel p-8 rounded-2xl space-y-4">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-accent">schedule</span>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed">Expect a response from us within 24 hours.</p>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-accent">verified_user</span>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed">We're happy to sign an NDA upon request.</p>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-accent">support_agent</span>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed">Get access to dedicated product specialists.</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8 glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] pointer-events-none"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Let's start the dialogue now!</h2>
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-text-secondary">Full Name *</label>
                  <input className="bg-surface border border-border rounded-xl px-4 py-3 text-on-surface focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="John Doe" type="text" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-text-secondary">Email *</label>
                  <input className="bg-surface border border-border rounded-xl px-4 py-3 text-on-surface focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="john@company.com" type="email" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-text-secondary">Company *</label>
                  <input className="bg-surface border border-border rounded-xl px-4 py-3 text-on-surface focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="Company Name" type="text" required />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-text-secondary">Phone *</label>
                  <input className="bg-surface border border-border rounded-xl px-4 py-3 text-on-surface focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" placeholder="+1 (555) 000-0000" type="tel" required />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-text-secondary">Select a service *</label>
                <select className="bg-surface border border-border rounded-xl px-4 py-3 text-on-surface focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all">
                  <option>Web Design &amp; Development</option>
                  <option>Software Development</option>
                  <option>End to end E-commerce Solution</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-text-secondary">Message *</label>
                <textarea className="bg-surface border border-border rounded-xl px-4 py-3 text-on-surface focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none" placeholder="Tell us about your project..." rows={4} required></textarea>
              </div>

              <button className="bg-accent text-on-surface font-bold text-sm px-8 py-4 rounded-xl hover:bg-accent-hover hover:scale-102 glow-hover transition-all w-full md:w-auto mt-4" type="submit">
                Send my query
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
