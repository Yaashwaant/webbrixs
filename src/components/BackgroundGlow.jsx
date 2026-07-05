"use client";

import { useEffect, useState } from "react";

export default function BackgroundGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      // Set global CSS variables for coordinates relative to the viewport
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Interactive Cyber Grid Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1] opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(circle 350px at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 240, 255, 0.12) 0%, transparent 100%),
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 50px 50px, 50px 50px",
        }}
      />

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Dynamic Cursor Light Spot */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[120px] transition-transform duration-300 ease-out"
          style={{
            background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
            left: `${mousePosition.x - 250}px`,
            top: `${mousePosition.y - 250}px`,
          }}
        ></div>

        {/* Floating Ambient Glow Spheres */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent/5 rounded-full blur-[100px] animate-float pointer-events-none"></div>
        <div 
          className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-accent/5 rounded-full blur-[130px] animate-float pointer-events-none" 
          style={{ animationDelay: "-4s" }}
        ></div>
      </div>
    </>
  );
}
