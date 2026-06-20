"use client";

import { useState } from "react";
import ScrollReveal from "../../components/ScrollReveal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "Web Design & Development",
    message: "",
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "Web Design & Development",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="flex-grow pt-32 pb-24 px-6 md:px-20 max-w-7xl mx-auto w-full relative z-10">
      {/* Page Title */}
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <ScrollReveal delay={0} direction="up">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-on-surface mb-6">
            Let's start the <span className="text-gradient">dialogue now!</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={150} direction="up">
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            Expect a response from us within 24 hours. We're happy to sign an NDA upon request. Get access to a team of dedicated product specialists.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form Container */}
        <div className="lg:col-span-8 glass-panel rounded-xl p-8 md:p-12 relative overflow-hidden bg-surface/50">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] pointer-events-none"></div>
          
          {submitted ? (
            <div className="text-center py-16 space-y-6">
              <span className="material-symbols-outlined text-6xl text-accent animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
              <h2 className="text-3xl font-bold text-on-surface">Query Sent Successfully!</h2>
              <p className="text-text-secondary max-w-md mx-auto text-sm md:text-base leading-relaxed">
                Thank you for reaching out. A product specialist from Webbrixs will review your message and connect with you within 24 hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="bg-accent/25 border border-accent text-accent px-6 py-2 rounded-lg hover:bg-accent hover:text-on-surface transition-all duration-300 font-semibold cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <ScrollReveal delay={100} direction="none">
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-text-secondary">Full Name *</label>
                    <input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-surface border border-white/10 rounded-lg px-4 py-3 text-on-surface focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none" 
                      placeholder="John Doe" 
                      type="text"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-text-secondary">Email *</label>
                    <input 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-surface border border-white/10 rounded-lg px-4 py-3 text-on-surface focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none" 
                      placeholder="john@company.com" 
                      type="email"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-text-secondary">Company *</label>
                    <input 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-surface border border-white/10 rounded-lg px-4 py-3 text-on-surface focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none" 
                      placeholder="Company Name" 
                      type="text"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-text-secondary">Phone *</label>
                    <input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-surface border border-white/10 rounded-lg px-4 py-3 text-on-surface focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none" 
                      placeholder="+1 (555) 000-0000" 
                      type="tel"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-text-secondary">Select a service *</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bg-surface border border-white/10 rounded-lg px-4 py-3 text-on-surface focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none"
                  >
                    <option>Web Design &amp; Development</option>
                    <option>Software Development</option>
                    <option>End to end E-commerce Solution</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-text-secondary">Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-surface border border-white/10 rounded-lg px-4 py-3 text-on-surface focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none resize-none" 
                    placeholder="Tell us about your project..." 
                    rows={4}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-accent text-on-surface font-semibold text-sm px-8 py-4 rounded-lg hover:bg-accent-hover hover:scale-102 hover:shadow-[0_0_20px_rgba(255,90,54,0.3)] transition-all duration-300 w-full mt-4 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </ScrollReveal>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-6">
          {/* Founder Profile */}
          <ScrollReveal delay={200} direction="right">
            <div className="glass-panel rounded-xl p-8 flex flex-col items-center text-center bg-surface/50 border border-white/5">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-accent to-accent/30 mb-4 flex items-center justify-center text-on-surface font-extrabold text-3xl shadow-[0_0_20px_rgba(255,90,54,0.3)]">
                Y
              </div>
              <h3 className="text-xl font-bold mb-1 text-on-surface">Yashwant</h3>
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Founder &amp; CEO, Webbrixs</p>
              <p className="text-xs text-text-secondary leading-relaxed mb-6 max-w-[240px]">
                Started building websites in college; now leads a team turning design and AI automation into real business growth.
              </p>
              <div className="flex flex-col gap-2.5 items-center">
                <a 
                  className="flex items-center gap-2 text-accent hover:text-accent-hover transition-colors font-semibold text-sm" 
                  href="tel:+918275700505"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>+91 82757 00505</span>
                </a>
                <a 
                  className="flex items-center gap-2 text-[#25D366] hover:text-[#20ba5a] transition-colors font-semibold text-sm" 
                  href="https://wa.me/918793334476"
                  target="_blank" 
                  rel="noopener noreferrer" 
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Office Locations */}
          <ScrollReveal delay={300} direction="right">
            <div className="glass-panel rounded-xl p-8 space-y-6 bg-surface/50 border border-white/5">
              <h3 className="text-xl md:text-2xl font-bold text-on-surface">Our Offices</h3>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-sm text-accent flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">location_on</span> 
                  <span>India Headquarters</span>
                </h4>
                <p className="text-xs md:text-sm text-text-secondary pl-7 leading-relaxed">
                  Hinjewadi Phase 1, Pune,<br />
                  Maharashtra, 411057, India
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
