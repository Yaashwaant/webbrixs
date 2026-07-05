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
  ];


  return (
    <header className="fixed top-0 w-full z-50 bg-transparent pt-4 pointer-events-none">
      <div className="flex justify-between items-center px-6 md:px-16 py-4 w-full mx-auto relative pointer-events-auto">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="font-bold tracking-tighter text-xl md:text-2xl text-on-surface hover:text-white transition-all duration-300 flex items-center gap-2 mr-8"
        >
          <span>Webbrixs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-10 items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link 
            href="/" 
            className={`font-medium text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
              isRouteActive("/") ? "text-white" : "text-white/70 hover:text-white"
            }`}
          >
            Home
          </Link>
          
          <Link 
            href="/about" 
            className={`font-medium text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
              isRouteActive("/about") ? "text-white" : "text-white/70 hover:text-white"
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
              className={`font-medium text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 flex items-center gap-1 focus:outline-none ${
                isServicesActive ? "text-white" : "text-white/70 hover:text-white"
              }`}
            >
              Services
              <span className="material-symbols-outlined text-[14px]">keyboard_arrow_down</span>
            </button>
            
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 w-56 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl py-2 mt-4 shadow-2xl animate-fade-in">
                {services.map((service) => (
                  service.external ? (
                    <a
                      key={service.name}
                      href={service.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-xs md:text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {service.name}
                    </a>
                  ) : (
                    <Link
                      key={service.path}
                      href={service.path}
                      className={`block px-4 py-3 text-xs md:text-sm transition-colors hover:bg-white/5 ${
                        isRouteActive(service.path) ? "text-white font-bold" : "text-white/70 hover:text-white"
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
            className={`font-medium text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
              isRouteActive("/pricing") ? "text-white" : "text-white/70 hover:text-white"
            }`}
          >
            Pricing
          </Link>

          <Link 
            href="/portfolio" 
            className={`font-medium text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
              isRouteActive("/portfolio") ? "text-white" : "text-white/70 hover:text-white"
            }`}
          >
            Portfolio
          </Link>

        </nav>

        {/* Contact Us button */}
        <Link 
          href="/contact-us" 
          className="hidden lg:flex items-center justify-center font-medium text-[11px] px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 tracking-wider"
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
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 flex flex-col p-6 gap-6 shadow-2xl animate-slide-down max-h-[85vh] overflow-y-auto">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className={`text-base font-semibold ${isRouteActive("/") ? "text-accent" : "text-white"}`}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={`text-base font-semibold ${isRouteActive("/about") ? "text-accent" : "text-white"}`}>
            About
          </Link>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-white/60 uppercase tracking-wider mb-2">Our Services</span>
            {services.map((service) => (
              service.external ? (
                <a
                  key={service.name}
                  href={service.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 text-sm text-white/80 hover:text-white"
                >
                  {service.name}
                </a>
              ) : (
                <Link
                  key={service.path}
                  href={service.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-sm transition-colors ${
                    isRouteActive(service.path) ? "text-accent font-bold" : "text-white/80 hover:text-white"
                  }`}
                >
                  {service.name}
                </Link>
              )
            ))}
          </div>

          <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className={`text-base font-semibold ${isRouteActive("/pricing") ? "text-accent" : "text-white"}`}>
            Pricing
          </Link>

          <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className={`text-base font-semibold ${isRouteActive("/portfolio") ? "text-accent" : "text-white"}`}>
            Portfolio
          </Link>


          <Link
            href="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center font-bold text-base px-6 py-4 rounded-xl bg-accent text-black hover:bg-accent-hover transition-all w-full text-center mt-2"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
