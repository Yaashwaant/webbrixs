"use client";

import ScrollReveal from "../../components/ScrollReveal";
import Link from "next/link";

export default function CareersPage() {
  const openings = [
    { title: "Senior React Developer", type: "Full-Time", location: "Remote / Dhaka", dept: "Engineering" },
    { title: "UI/UX Designer", type: "Full-Time", location: "Remote / USA", dept: "Design" },
    { title: "Product Manager", type: "Full-Time", location: "Hybrid / Dhaka", dept: "Management" }
  ];

  return (
    <main className="flex-grow pt-32 pb-24 px-6 md:px-20 max-w-5xl mx-auto w-full relative z-10">
      <div className="text-center mb-16">
        <ScrollReveal delay={0} direction="up">
          <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-semibold uppercase tracking-wider">
            Careers
          </span>
        </ScrollReveal>
        <ScrollReveal delay={150} direction="up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-on-surface mt-4 mb-6">
            Join the <span className="text-gradient">Webbrixs Squad</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={300} direction="up">
          <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            We are always looking for passionate engineers, designers, and innovators to build the future of headless CMS and digital experiences.
          </p>
        </ScrollReveal>
      </div>

      <div className="space-y-6">
        {openings.map((job, idx) => (
          <ScrollReveal key={idx} delay={idx * 100} direction="up">
            <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 hover:border-accent/40 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <span className="text-xs text-accent font-semibold tracking-wider uppercase">{job.dept}</span>
                <h3 className="text-xl md:text-2xl font-bold text-on-surface mt-1">{job.title}</h3>
                <div className="flex gap-4 text-xs text-text-secondary mt-2">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span> {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">location_on</span> {job.location}
                  </span>
                </div>
              </div>
              <Link 
                href="/contact-us"
                className="bg-accent/10 border border-accent/20 text-accent font-semibold text-xs px-6 py-3.5 rounded-xl hover:bg-accent hover:text-on-surface transition-colors cursor-pointer"
              >
                Apply Now
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}
