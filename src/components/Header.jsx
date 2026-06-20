"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  const isRouteActive = (path) => pathname === path;
  const isServicesActive = pathname.startsWith("/services");

  const services = [
    { name: "Web Design & Dev", path: "/services/web-design-development" },
    { name: "Software Development", path: "/services/software-development" },
    { name: "End to End E-commerce", path: "/services/end-to-end-ecommerce" },
    { name: "Photo Editing ↗", path: "https://www.cutoutexpert.com", external: true },
  ];


  return (
    <header className="glass-panel fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-6 md:px-20 py-4 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-bold tracking-tighter text-xl md:text-2xl text-on-surface hover:text-accent transition-all duration-300 flex items-center gap-2"
        >
          <img 
            src="/images/projects/logo.png" 
            alt="Webbrixs Logo" 
            className="w-8 h-8 object-contain"
          />
          <span>Webbrixs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 items-center relative">
          <Link 
            href="/" 
            className={`font-semibold text-sm transition-colors duration-300 ${
              isRouteActive("/") ? "text-accent border-b-2 border-accent pb-1" : "text-on-surface-variant hover:text-accent"
            }`}
          >
            Home
          </Link>
          
          <Link 
            href="/about" 
            className={`font-semibold text-sm transition-colors duration-300 ${
              isRouteActive("/about") ? "text-accent border-b-2 border-accent pb-1" : "text-on-surface-variant hover:text-accent"
            }`}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button 
              className={`font-semibold text-sm transition-colors duration-300 flex items-center gap-1 focus:outline-none ${
                isServicesActive ? "text-accent" : "text-on-surface-variant hover:text-accent"
              }`}
            >
              Services
              <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
            </button>
            
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 w-56 bg-surface border border-white/10 rounded-xl py-2 mt-1 shadow-2xl animate-fade-in">
                {services.map((service) => (
                  service.external ? (
                    <a
                      key={service.name}
                      href={service.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-xs md:text-sm text-on-surface-variant hover:text-accent hover:bg-white/5 transition-colors"
                    >
                      {service.name}
                    </a>
                  ) : (
                    <Link
                      key={service.path}
                      href={service.path}
                      className={`block px-4 py-3 text-xs md:text-sm transition-colors hover:bg-white/5 ${
                        isRouteActive(service.path) ? "text-accent font-bold" : "text-on-surface-variant hover:text-accent"
                      }`}
                    >
                      {service.name}
                    </Link>
                  )
                ))}
              </div>
            )}
          </div>

          <Link 
            href="/pricing" 
            className={`font-semibold text-sm transition-colors duration-300 ${
              isRouteActive("/pricing") ? "text-accent border-b-2 border-accent pb-1" : "text-on-surface-variant hover:text-accent"
            }`}
          >
            Pricing
          </Link>

          <Link 
            href="/portfolio" 
            className={`font-semibold text-sm transition-colors duration-300 ${
              isRouteActive("/portfolio") ? "text-accent border-b-2 border-accent pb-1" : "text-on-surface-variant hover:text-accent"
            }`}
          >
            Portfolio
          </Link>

        </nav>

        {/* Contact Us button */}
        <Link 
          href="/contact-us" 
          className="hidden lg:flex items-center justify-center font-semibold text-sm px-6 py-3 rounded-xl bg-accent text-on-surface hover:bg-accent-hover hover:shadow-[0_0_15px_rgba(255,90,54,0.4)] transition-all duration-300"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-on-surface hover:text-accent transition-colors p-1"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-surface/95 backdrop-blur-2xl border-b border-white/10 flex flex-col p-6 gap-6 shadow-2xl animate-slide-down max-h-[85vh] overflow-y-auto">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`text-base font-semibold ${isRouteActive("/") ? "text-accent" : "text-on-surface"}`}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={`text-base font-semibold ${isRouteActive("/about") ? "text-accent" : "text-on-surface"}`}>
            About
          </Link>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Our Services</span>
            {services.map((service) => (
              service.external ? (
                <a
                  key={service.name}
                  href={service.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 text-sm text-on-surface-variant hover:text-accent"
                >
                  {service.name}
                </a>
              ) : (
                <Link
                  key={service.path}
                  href={service.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-sm transition-colors ${
                    isRouteActive(service.path) ? "text-accent font-bold" : "text-on-surface-variant hover:text-accent"
                  }`}
                >
                  {service.name}
                </Link>
              )
            ))}
          </div>

          <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className={`text-base font-semibold ${isRouteActive("/pricing") ? "text-accent" : "text-on-surface"}`}>
            Pricing
          </Link>

          <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className={`text-base font-semibold ${isRouteActive("/portfolio") ? "text-accent" : "text-on-surface"}`}>
            Portfolio
          </Link>


          <Link
            href="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center font-bold text-base px-6 py-4 rounded-xl bg-accent text-on-surface hover:bg-accent-hover transition-all w-full text-center mt-2"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
