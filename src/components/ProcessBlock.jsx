import Link from "next/link";

export default function ProcessBlock() {
  const steps = [
    {
      num: "01",
      title: "Discovery Phase",
      desc: "Understanding your brand, objectives, and target audience to define strategic project goals.",
      icon: "travel_explore",
    },
    {
      num: "02",
      title: "Design Concept",
      desc: "Creating initial custom visual wireframes and high-fidelity prototypes based on gathered insights.",
      icon: "design_services",
    },
    {
      num: "03",
      title: "Development & Testing",
      desc: "Coding and refining the platform, ensuring optimal functionality, responsive speed, and cross-device testing.",
      icon: "code",
    },
    {
      num: "04",
      title: "Launch & Support",
      desc: "Deploying the finalized platform to production and providing ongoing optimizations and maintenance.",
      icon: "rocket_launch",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Design Process</h2>
        <p className="text-sm md:text-base text-text-secondary max-w-2xl mx-auto">
          Explore our streamlined approach to creating bespoke digital solutions that align perfectly with your business goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="glass-panel rounded-2xl p-8 hover:border-accent/40 hover:glow-hover transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
          >
            {/* Ambient Background Number */}
            <div className="absolute top-0 right-0 text-7xl font-bold text-accent/5 -z-10 -mt-4 -mr-4 font-mono select-none group-hover:text-accent/10 transition-colors">
              {step.num}
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl">{step.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-on-surface group-hover:text-accent transition-colors">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                {step.desc}
              </p>
            </div>

            {idx < 3 && (
              <div className="hidden md:block absolute top-1/2 left-full w-8 h-px bg-white/10 -translate-y-1/2 z-20"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
