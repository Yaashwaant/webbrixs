"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import ScrollReveal from "../../../components/ScrollReveal";

const policies = {
  "privacy-policy": {
    title: "Privacy Policy",
    date: "Last updated: June 20, 2026",
    sections: [
      {
        h: "1. Information Collection",
        p: "We collect information you directly provide us, including name, email, company details, phone number, and project scopes, to formulate project briefs and build customized systems."
      },
      {
        h: "2. Data Utilization",
        p: "The gathered parameters are strictly leveraged to service design requests, scale cloud deployments, manage client tickets, and maintain secure project records. We never monetize nor sell your private data."
      },
      {
        h: "3. Compliance & Security",
        p: "All data is securely handled with end-to-end encryption protocols. We periodically review our databases for unauthorized queries and ensure compliance benchmarks are rigorously enforced."
      }
    ]
  },
  "terms-and-conditions": {
    title: "Terms and Conditions",
    date: "Last updated: June 20, 2026",
    sections: [
      {
        h: "1. Project Engagement",
        p: "Engaging Webbrixs initiates a collaborative discovery blueprint. Deliverables are specified in individual work orders and customized contract parameters."
      },
      {
        h: "2. Payment & Retainers",
        p: "Client payments are processed securely. Retainers and milestones follow clear, preset installment structures. Hosting or support subscriptions require active billing profiles."
      },
      {
        h: "3. Intellectual Property",
        p: "Upon complete settlement of invoice payloads, full intellectual property rights of engineered source code, custom layouts, and assets transfer directly to the client."
      }
    ]
  },
  "nda": {
    title: "Non-Disclosure Agreement (NDA)",
    date: "Last updated: June 20, 2026",
    sections: [
      {
        h: "1. Confidential Information",
        p: "We protect all proprietary source material, mockups, databases, and company parameters provided during project engagement under full legal confidentiality."
      },
      {
        h: "2. Safe-keeping Commitments",
        p: "Webbrixs ensures only assigned engineers and product specialists access your confidential data under signed internal NDAs."
      }
    ]
  },
  "sla": {
    title: "Service Level Agreement (SLA)",
    date: "Last updated: June 20, 2026",
    sections: [
      {
        h: "1. System Uptime",
        p: "Webbrixs targets a 99.9% uptime benchmark for client custom SaaS, cloud architectures, and headless CMS integrations."
      },
      {
        h: "2. Incident Response",
        p: "Critical server incidents receive response allocations within 2 hours. General requests are answered within standard 24-hour windows."
      }
    ]
  }
};

export default function LegalPolicyPage() {
  const params = useParams();
  const slug = params?.slug || "privacy-policy";
  const policy = policies[slug] || policies["privacy-policy"];

  return (
    <main className="flex-grow pt-32 pb-24 px-6 md:px-20 max-w-4xl mx-auto w-full relative z-10">
      <ScrollReveal delay={0} direction="up">
        <Link 
          href="/" 
          className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent-hover mb-8 group"
        >
          <span className="material-symbols-outlined text-[16px] transition-transform group-hover:-translate-x-1">arrow_back</span>
          <span>Back to Home</span>
        </Link>
      </ScrollReveal>

      <div className="space-y-8">
        <ScrollReveal delay={100} direction="up">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface">
            {policy.title}
          </h1>
          <p className="text-xs text-text-secondary mt-2">{policy.date}</p>
        </ScrollReveal>

        <div className="w-full h-px bg-white/10 my-8"></div>

        <div className="space-y-8">
          {policy.sections.map((sec, idx) => (
            <ScrollReveal key={idx} delay={150 + idx * 100} direction="up" className="space-y-3">
              <h2 className="text-xl font-bold text-on-surface">{sec.h}</h2>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed">{sec.p}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
