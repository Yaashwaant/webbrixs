"use client";

export default function Stats() {
  const statsList = [
    { value: "50+", label: "Projects Completed" },
    { value: "99.9%", label: "Platform Uptime" },
    { value: "24/7", label: "Support Operations" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto border-t border-white/5 bg-surface/10 backdrop-blur-md">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {statsList.map((stat, idx) => (
          <div key={idx} className="flex flex-col gap-2 group">
            <div className="text-4xl md:text-6xl font-bold tracking-tight text-gradient group-hover:scale-105 transition-transform duration-300">
              {stat.value}
            </div>
            <div className="text-xs md:text-sm text-text-secondary uppercase tracking-widest font-semibold">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
