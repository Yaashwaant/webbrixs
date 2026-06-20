"use client";

import ScrollReveal from "../../components/ScrollReveal";

const departments = [
  {
    name: "Leadership",
    members: [
      { name: "Md. Ashaduzzaman", role: "CEO & Founder" },
      { name: "Md Ariful Islam", role: "Co-Founder" },
      { name: "Md Kobir Hossain", role: "Co-Founder" },
      { name: "Md Masum Kamal", role: "Co-Founder" },
      { name: "Arif Rahaman", role: "Co-Founder" },
    ]
  },
  {
    name: "Engineering & Design",
    members: [
      { name: "Fardin Evan", role: "UI/UX Designer" },
      { name: "Md Golam Sarwar", role: "Full Stack Developer" },
      { name: "Ashikur Rahman Bhuiyan", role: "Front-End Developer" },
      { name: "Md Fuyad Hasan Fahim", role: "Full Stack Developer" },
      { name: "Md. Ruhul Amin", role: "Full Stack Developer" },
      { name: "Md. Al Imran", role: "UI/UX Designer" },
    ]
  },
  {
    name: "Growth & Marketing",
    members: [
      { name: "Mamun Hasan", role: "Lead Marketer" },
      { name: "Md. Sadaf Islam", role: "Marketing Executive" },
      { name: "Somaiya Akter", role: "Marketing Executive" },
      { name: "Nowshin Jahan Tisha", role: "Marketing Executive" },
      { name: "Farhana Hossan Orpita", role: "Marketing Executive" },
    ]
  }
];

export default function TeamsPage() {
  return (
    <main className="flex-grow pt-32 pb-24 px-6 md:px-20 max-w-7xl mx-auto w-full relative z-10">
      <div className="text-center mb-20">
        <ScrollReveal delay={0} direction="up">
          <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-semibold uppercase tracking-wider">
            Our Team
          </span>
        </ScrollReveal>
        <ScrollReveal delay={150} direction="up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-on-surface mt-4 mb-6">
            The Minds Behind <span className="text-gradient">Webbrixs</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={300} direction="up">
          <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            A collaborative squad of developers, designers, and growth experts engineering minimalist and highly resilient digital products.
          </p>
        </ScrollReveal>
      </div>

      <div className="space-y-16">
        {departments.map((dept, deptIdx) => (
          <div key={deptIdx} className="space-y-8">
            <ScrollReveal delay={0} direction="left">
              <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-accent pl-4 text-on-surface">
                {dept.name}
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {dept.members.map((member, memberIdx) => (
                <ScrollReveal 
                  key={memberIdx} 
                  delay={memberIdx * 100} 
                  direction="up"
                >
                  <div className="glass-panel p-6 rounded-xl border border-white/5 text-center hover:border-accent/30 hover:scale-[1.02] transition-all duration-300 h-full flex flex-col justify-center items-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4 border border-accent/20">
                      <span className="material-symbols-outlined text-2xl">person</span>
                    </div>
                    <h4 className="font-bold text-sm md:text-base text-on-surface">{member.name}</h4>
                    <p className="text-xs text-text-secondary mt-1">{member.role}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
