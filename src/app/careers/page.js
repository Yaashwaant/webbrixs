"use client";

import ScrollReveal from "../../components/ScrollReveal";
import Link from "next/link";

export default function CareersPage() {
  return (
    <main className="flex-grow pt-32 pb-24 px-6 md:px-20 max-w-5xl mx-auto w-full relative z-10 flex flex-col justify-center min-h-[70vh]">
      <div className="text-center max-w-2xl mx-auto w-full">
        <ScrollReveal delay={0} direction="up">
          <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-semibold uppercase tracking-wider">
            Careers
          </span>
        </ScrollReveal>
        <ScrollReveal delay={150} direction="up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-on-surface mt-6 mb-6">
            Join the <span className="text-gradient">Webbrixs Squad</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={300} direction="up">
          <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-12">
            We are always looking for passionate engineers, designers, and innovators to build the future of digital experiences and custom AI automation.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={450} direction="up">
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 text-center relative overflow-hidden w-full">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] pointer-events-none"></div>
            <span className="material-symbols-outlined text-accent text-5xl opacity-40 mb-4">work_outline</span>
            <h3 className="text-xl md:text-2xl font-bold text-on-surface mb-3">No Open Positions</h3>
            <p className="text-sm text-text-secondary leading-relaxed max-w-md mx-auto mb-8">
              We don't have any active openings right now, but we are always eager to connect with exceptional talent. If you love the craft of clean code, intuitive UI/UX, or AI automation, feel free to drop us your resume.
            </p>
            <a 
              href="mailto:hello@webbrixs.in" 
              className="inline-block bg-accent text-on-surface font-bold text-xs px-6 py-3.5 rounded-xl hover:bg-accent-hover transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Send Resume (hello@webbrixs.in)
            </a>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
