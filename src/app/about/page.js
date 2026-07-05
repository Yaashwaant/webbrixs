import Link from "next/link";
import ProcessBlock from "../../components/ProcessBlock";
import Stats from "../../components/Stats";
import ScrollReveal from "../../components/ScrollReveal";

export const metadata = {
  title: "About Us",
  description: "Discover the inspiring journey behind Webbrixs' success, our core values of innovation, trust, and scale, and meet our team of dedicated specialists.",
};

export default function AboutPage() {
  const values = [
    {
      num: "01",
      title: "Innovate",
      desc: "Shaping tomorrow with bold ideas and cutting-edge technologies. We constantly push the boundaries of digital possibilities.",
    },
    {
      num: "02",
      title: "Trust",
      desc: "Delivering unwavering transparency, rigorous NDA commitments, and absolute security compliance for all enterprise data.",
    },
    {
      num: "03",
      title: "Scale",
      desc: "Constructing robust systems engineered for high concurrency, fast loading, and infinite operational growth.",
    },
  ];

  return (
    <main className="w-full animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center px-6 md:px-20 pt-[140px] pb-24 text-center overflow-hidden">
        {/* Glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10"></div>
        <div 
          className="absolute inset-0 z-0 opacity-40" 
          style={{ background: "radial-gradient(circle at 50% 40%, rgba(0, 240, 255, 0.15) 0%, rgba(6, 6, 10, 0) 70%)" }}
        ></div>

        <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center gap-6">
          <ScrollReveal delay={0} direction="up">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">
              2026 / Explore Our Journey
            </span>
          </ScrollReveal>
          <ScrollReveal delay={150} direction="up">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-gradient leading-[1.1]">
              Discover the Inspiring Journey Behind Our Success.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={300} direction="up">
            <p className="text-base md:text-lg text-text-secondary max-w-2xl mt-4 leading-relaxed">
              We began as an elite engineering collective and evolved into a premium full-service digital design agency, delivering flawless web products globally.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* History Story */}
      <section className="px-6 md:px-20 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal delay={0} direction="left" className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-on-surface">Our Story</h2>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed">
            It started the way most ambitious things do — quietly, and on the side.
          </p>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed">
            While still in college, founder Yashwant began designing and building websites for local businesses, friends, and anyone willing to take a chance on a student who genuinely loved the craft. What began as a way to cover textbook money turned into something bigger: a reputation for clean design, fast delivery, and code that actually worked the way it was supposed to.
          </p>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed">
            That reputation became Webbrixs.
          </p>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed">
            Today, what was once a one-person side gig has grown into a team of 10+ designers, developers, and automation specialists. We design intuitive UI/UX, build modern websites end-to-end, and — increasingly — help businesses save hours every week with personalized AI workflow automation built around how they actually work, not a one-size-fits-all template.
          </p>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed font-semibold">
            The hustle hasn't changed. Just the scale.
          </p>
          <div className="flex gap-4 pt-4">
            <Link href="/contact-us" className="bg-accent text-on-surface font-bold text-xs px-6 py-3 rounded-lg hover:bg-accent-hover transition-colors">
              Work With Us
            </Link>
          </div>
        </ScrollReveal>

        {/* Decorative graphic block */}
        <ScrollReveal delay={200} direction="right">
          <div className="relative h-96 rounded-2xl overflow-hidden border border-white/10 bg-surface/50 flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-50"></div>
            <div className="text-center space-y-4">
              <span className="material-symbols-outlined text-7xl text-accent animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>
                workspace_premium
              </span>
              <h3 className="text-2xl font-bold">Resilient Digital Scale</h3>
              <p className="text-xs text-text-secondary max-w-xs">Building scalable, resilient digital infrastructures for startups and enterprise platforms worldwide.</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Shaping Tomorrow Values */}
      <section className="px-6 md:px-20 py-24 max-w-7xl mx-auto border-t border-white/5">
        <ScrollReveal delay={0} direction="up" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Shaping Tomorrow w/ Bold Ideas</h2>
          <p className="text-sm md:text-base text-text-secondary max-w-2xl mx-auto">
            Our core values define every line of code we write and every layout we design.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <ScrollReveal key={idx} delay={idx * 150} direction="up">
              <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-accent/30 glow-hover transition-all flex flex-col justify-between h-full">
                <div>
                  <span className="font-mono text-xs text-accent font-bold block mb-4">{val.num}</span>
                  <h3 className="text-xl font-bold text-on-surface mb-3">{val.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{val.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Stats component */}
      <Stats />

      {/* Shared Process Methodology */}
      <ProcessBlock />

      {/* Team Roster Grid */}
      <section className="px-6 md:px-20 py-24 max-w-7xl mx-auto border-t border-white/5" id="team">
        <ScrollReveal delay={0} direction="up" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet The Team</h2>
          <p className="text-sm md:text-base text-text-secondary max-w-2xl mx-auto">
            We are an elite squad of designers, software engineers, and product leaders working collaboratively to craft premium products.
          </p>
        </ScrollReveal>

        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 text-center relative overflow-hidden max-w-3xl mx-auto">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] pointer-events-none"></div>
          <span className="material-symbols-outlined text-accent text-5xl opacity-40 mb-4">group</span>
          <h3 className="text-2xl md:text-3xl font-bold text-on-surface mb-4">Our team is growing!</h3>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-xl mx-auto mb-8">
            Our team of software engineers, UI/UX designers, and product leaders are based in Pune, India and operate under a unified discovery blueprint. Want to discuss how we can help engineer your next system? Let's connect on a discovery call!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact-us" className="bg-accent text-on-surface font-bold text-xs px-6 py-3 rounded-lg hover:bg-accent-hover transition-colors">
              Book Discovery Call
            </Link>
            <Link href="/careers" className="bg-white/5 border border-white/10 text-on-surface font-semibold text-xs px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
