"use client";

import { useState } from "react";
import ScrollReveal from "../../components/ScrollReveal";

export default function TrackTicketPage() {
  const [ticketId, setTicketId] = useState("");
  const [ticketStatus, setTicketStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    if (!ticketId.trim()) return;
    
    setLoading(true);
    setTicketStatus(null);
    
    // Simulate API fetch for ticket
    setTimeout(() => {
      setLoading(false);
      // Mock ticket data
      if (ticketId.toLowerCase().includes("err") || ticketId.toLowerCase().includes("404")) {
        setTicketStatus({
          found: false,
          message: `No active ticket found matching ID "${ticketId}". Please check the ID or contact support.`
        });
      } else {
        setTicketStatus({
          found: true,
          id: ticketId.toUpperCase(),
          subject: "Integrate Headless CMS Stripe Webhooks",
          status: "In Progress",
          statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
          updatedAt: "2 hours ago",
          assignedTo: "Golam Sarwar (Full Stack Developer)",
          description: "Setting up webhook signature verification and handling payment status updates for subscriptions in our production databases.",
          milestones: [
            { name: "Verify webhook signatures", done: true },
            { name: "Create database listeners", done: true },
            { name: "Implement checkout session success logic", done: false },
            { name: "Run test cases and verify payloads", done: false }
          ]
        });
      }
    }, 1200);
  };

  return (
    <main className="flex-grow pt-32 pb-24 px-6 md:px-20 max-w-3xl mx-auto w-full relative z-10">
      <div className="text-center mb-16">
        <ScrollReveal delay={0} direction="up">
          <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-semibold uppercase tracking-wider">
            Client Portal
          </span>
        </ScrollReveal>
        <ScrollReveal delay={150} direction="up">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mt-4 mb-6">
            Track Your <span className="text-gradient">Project Ticket</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={300} direction="up">
          <p className="text-base text-text-secondary leading-relaxed max-w-xl mx-auto">
            Input your Webbrixs ticket ID below to inspect current task status, active milestones, and assigned developers in real-time.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={200} direction="up">
        <div className="glass-panel p-8 rounded-2xl border border-white/5 bg-surface/50 mb-8">
          <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4 items-stretch">
            <input 
              type="text" 
              value={ticketId}
              onChange={(e) => setTicketId(e.target.value)}
              placeholder="e.g. WBX-4091-CMS"
              required
              className="flex-grow bg-surface border border-white/10 rounded-xl px-4 py-3 text-on-surface focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
            />
            <button 
              type="submit" 
              disabled={loading}
              className="bg-accent text-on-surface font-semibold text-sm px-8 py-3.5 rounded-xl hover:bg-accent-hover transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              {loading ? "Tracking..." : "Track Status"}
            </button>
          </form>
        </div>
      </ScrollReveal>

      {/* Ticket Result Display */}
      {ticketStatus && (
        <ScrollReveal delay={0} direction="up">
          {ticketStatus.found ? (
            <div className="glass-panel p-8 rounded-2xl border border-accent/20 bg-surface/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 blur-[80px] pointer-events-none"></div>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-6 mb-6">
                <div>
                  <span className="text-xs text-text-secondary font-mono">TICKET ID: {ticketStatus.id}</span>
                  <h3 className="text-xl md:text-2xl font-bold text-on-surface mt-1">{ticketStatus.subject}</h3>
                </div>
                <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${ticketStatus.statusColor}`}>
                  {ticketStatus.status}
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Description</h4>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{ticketStatus.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm border-y border-white/5 py-4 my-4">
                  <div>
                    <span className="text-xs font-bold text-text-secondary uppercase tracking-wider block">Assigned Developer</span>
                    <span className="text-on-surface font-medium block mt-1">{ticketStatus.assignedTo}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-text-secondary uppercase tracking-wider block">Last Updated</span>
                    <span className="text-on-surface font-medium block mt-1">{ticketStatus.updatedAt}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-4">Milestones</h4>
                  <div className="space-y-3">
                    {ticketStatus.milestones.map((milestone, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className={`material-symbols-outlined text-[20px] ${milestone.done ? "text-accent" : "text-text-secondary/40"}`}>
                          {milestone.done ? "check_circle" : "radio_button_unchecked"}
                        </span>
                        <span className={`text-sm ${milestone.done ? "text-on-surface line-through opacity-60" : "text-on-surface-variant"}`}>
                          {milestone.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="glass-panel p-8 rounded-2xl border border-red-500/20 bg-surface/50 text-center space-y-4">
              <span className="material-symbols-outlined text-4xl text-red-500 animate-bounce">warning</span>
              <p className="text-sm text-text-secondary leading-relaxed">{ticketStatus.message}</p>
            </div>
          )}
        </ScrollReveal>
      )}
    </main>
  );
}
