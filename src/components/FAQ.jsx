"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "What services does Webbrixs offer?",
      a: "We specialize in custom UI/UX web design & development, cloud-native software engineering (SaaS platforms), end-to-end e-commerce ecosystems, and high-fidelity digital media editing."
    },
    {
      q: "Do you provide hosting services?",
      a: "Yes, we partner with top-tier cloud infrastructures (like Vercel, AWS, and Docker) to provide highly secure, blazing-fast, and fully managed hosting solutions."
    },
    {
      q: "How long does a typical project take?",
      a: "Standard custom websites take 3 to 6 weeks from discovery to launch. Enterprise software systems and multi-vendor e-commerce platforms typically range from 6 to 12 weeks depending on complexity."
    },
    {
      q: "How do you handle revisions during the process?",
      a: "We embrace a collaborative concept phase. We work with interactive prototypes (in Figma) and gather feedback at key design checkpoints, guaranteeing zero surprises before coding starts."
    },
    {
      q: "Do you offer ongoing support after the website launch?",
      a: "Yes, we offer comprehensive post-launch support and maintenance SLAs that cover performance tuning, server patches, security compliance, and incremental feature updates."
    },
    {
      q: "Can you help with content creation for my website?",
      a: "Yes, our team includes professional copywriters who formulate engaging, conversion-optimized, and SEO-friendly copy tailored to highlight your brand's unique value."
    },
    {
      q: "Can I see examples of your previous work?",
      a: "Of course! Our Portfolio section displays high-fidelity showcases of our custom client work, including links to inspect their live platforms."
    },
    {
      q: "Is SEO included in your web design packages?",
      a: "Always. We build advanced technical SEO right into the code—using semantic markup, fully responsive page structures, automated sitemap schemas, and highly optimized load speeds."
    },
    {
      q: "What is your pricing structure like?",
      a: "We work on a custom quotation model rather than generic fixed-price templates. Since we engineer everything from scratch, pricing is based on the specific capabilities and scope of your project."
    },
    {
      q: "What makes Webbrixs different from other agencies?",
      a: "We bypass standard off-the-shelf templates. We combine premium aesthetic minimalism with robust enterprise-level software engineering to construct future-proof digital assets."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 px-6 md:px-20 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-sm md:text-base text-text-secondary">
          Answers to common questions about our services, processes, and what sets us apart.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = activeIndex === idx;
          return (
            <div
              key={idx}
              className="glass-panel rounded-xl overflow-hidden transition-all duration-300 border border-white/5"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 text-on-surface hover:text-accent font-semibold transition-colors focus:outline-none"
              >
                <span className="text-sm md:text-base">{faq.q}</span>
                <span className="material-symbols-outlined text-accent transform transition-transform duration-300">
                  {isOpen ? "remove" : "add"}
                </span>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-48 border-t border-white/5" : "max-h-0"
                } overflow-hidden`}
              >
                <p className="px-6 py-5 text-xs md:text-sm text-text-secondary leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
