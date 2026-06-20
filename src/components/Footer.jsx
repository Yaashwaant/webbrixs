import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Privacy Policy", path: "/legal/privacy-policy" },
    { name: "Terms & Conditions", path: "/legal/terms-and-conditions" },
    { name: "Delivery Policy", path: "/legal/delivery-policy" },
    { name: "Hosting Policy", path: "/legal/hosting-policy" },
    { name: "Maintenance Policy", path: "/legal/maintenance-policy" },
    { name: "NDA Policy", path: "/legal/nda" },
    { name: "SLA Policy", path: "/legal/sla" },
  ];

  return (
    <footer className="glass-panel w-full border-t border-white/5 bg-surface-container-lowest relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-20 py-16 max-w-7xl mx-auto">
        {/* Brand & Description */}
        <div className="flex flex-col gap-4 col-span-1">
          <Link href="/" className="font-bold tracking-tighter text-xl text-on-surface flex items-center gap-2">
            <img 
              src="/images/projects/logo.png" 
              alt="Webbrixs Logo" 
              className="w-6 h-6 object-contain"
            />
            <span>Webbrixs</span>
          </Link>
          <p className="text-sm text-text-secondary leading-relaxed max-w-xs mt-2">
            Engineering premium digital experiences for forward-thinking enterprises. Experienced team delivering exceptional, tailored digital solutions.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com/webbrixs" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-accent transition-colors duration-300" aria-label="Facebook">
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a href="https://linkedin.com/company/webbrixs" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-accent transition-colors duration-300" aria-label="LinkedIn">
              <span className="material-symbols-outlined text-xl">link</span>
            </a>
            <a href="https://instagram.com/webbrixs" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-accent transition-colors duration-300" aria-label="Instagram">
              <span className="material-symbols-outlined text-xl">photo_camera</span>
            </a>
          </div>
        </div>

        {/* Services Links */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold text-on-surface uppercase tracking-widest mb-2">Our Services</span>
          <Link href="/services/web-design-development" className="text-sm text-on-surface-variant hover:text-accent transition-colors duration-300">
            Web Design & Dev
          </Link>
          <Link href="/services/software-development" className="text-sm text-on-surface-variant hover:text-accent transition-colors duration-300">
            Software Development
          </Link>
          <Link href="/services/end-to-end-ecommerce" className="text-sm text-on-surface-variant hover:text-accent transition-colors duration-300">
            E-commerce Solutions
          </Link>
          <a href="https://www.cutoutexpert.com" target="_blank" rel="noopener noreferrer" className="text-sm text-on-surface-variant hover:text-accent transition-colors duration-300">
            Photo Editing ↗
          </a>
        </div>

        {/* Quick Links / Legal */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold text-on-surface uppercase tracking-widest mb-2">Quick Links</span>
          {quickLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path} 
              className="text-sm text-on-surface-variant hover:text-accent transition-colors duration-300"
            >
              • {link.name}
            </Link>
          ))}
          <Link href="/careers" className="text-sm text-on-surface-variant hover:text-accent transition-colors duration-300">
            • Career Portal
          </Link>
        </div>

        {/* Office address & Contact */}
        <div className="flex flex-col gap-4 text-xs md:text-sm text-on-surface-variant">
          <span className="text-xs font-bold text-on-surface uppercase tracking-widest mb-1">Get In Touch</span>
          <a href="mailto:hello@webbrixs.in" className="hover:text-accent transition-colors duration-300 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">mail</span>
            hello@webbrixs.in
          </a>
          <a href="tel:+918275700505" className="hover:text-accent transition-colors duration-300 flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">phone</span>
            +91 82757 00505
          </a>
          
          <div className="mt-2 space-y-2">
            <div>
              <span className="font-bold text-on-surface text-xs block">India Headquarters:</span>
              <span className="text-xs text-text-secondary leading-normal block">
                Hinjewadi Phase 1, Pune,<br />
                Maharashtra, 411057, India
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom copyright */}
      <div className="border-t border-white/5 py-6 text-center px-6">
        <p className="text-xs text-on-surface-variant">
          © {new Date().getFullYear()} Webbrixs. All Rights Reserved. Made by Webbrixs.
        </p>
      </div>
    </footer>
  );
}
