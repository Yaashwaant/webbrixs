"use client";

import { useRef, useState } from "react";
import Link from "next/link";

export default function InteractiveCard({ 
  children, 
  className = "", 
  imgUrl, 
  title, 
  desc, 
  badge, 
  href,
  onClick
}) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Normalized coordinates (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    setCoords({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  const maxRotate = 8; // Max degrees of rotation
  const rotateX = isHovered ? -coords.y * maxRotate : 0;
  const rotateY = isHovered ? coords.x * maxRotate : 0;
  
  const imgTranslateX = isHovered ? coords.x * -8 : 0;
  const imgTranslateY = isHovered ? coords.y * -8 : 0;
  const imgScale = isHovered ? 1.05 : 1.0;

  const glossX = isHovered ? (coords.x + 0.5) * 100 : 50;
  const glossY = isHovered ? (coords.y + 0.5) * 100 : 50;

  const CardWrapper = ({ children: wrapperChildren }) => {
    if (href) {
      if (href.startsWith("http")) {
        return (
          <a
            ref={cardRef}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden rounded-2xl border bg-surface/50 transition-all duration-300 ease-out select-none cursor-pointer block ${className}`}
            style={{
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transformStyle: "preserve-3d",
              boxShadow: isHovered 
                ? "0 20px 40px rgba(0,0,0,0.6), 0 0 35px rgba(255, 90, 54, 0.2)" 
                : "0 4px 20px rgba(0,0,0,0.3)",
              borderColor: isHovered ? "rgba(255, 90, 54, 0.3)" : "rgba(255, 255, 255, 0.08)",
            }}
          >
            {wrapperChildren}
          </a>
        );
      }
      return (
        <Link
          ref={cardRef}
          href={href}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`relative overflow-hidden rounded-2xl border bg-surface/50 transition-all duration-300 ease-out select-none cursor-pointer block ${className}`}
          style={{
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transformStyle: "preserve-3d",
            boxShadow: isHovered 
              ? "0 20px 40px rgba(0,0,0,0.6), 0 0 35px rgba(255, 90, 54, 0.2)" 
              : "0 4px 20px rgba(0,0,0,0.3)",
            borderColor: isHovered ? "rgba(255, 90, 54, 0.3)" : "rgba(255, 255, 255, 0.08)",
          }}
        >
          {wrapperChildren}
        </Link>
      );
    }
    return (
      <div
        ref={cardRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative overflow-hidden rounded-2xl border bg-surface/50 transition-all duration-300 ease-out select-none ${className}`}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
          boxShadow: isHovered 
            ? "0 20px 40px rgba(0,0,0,0.6), 0 0 35px rgba(255, 90, 54, 0.2)" 
            : "0 4px 20px rgba(0,0,0,0.3)",
          borderColor: isHovered ? "rgba(255, 90, 54, 0.3)" : "rgba(255, 255, 255, 0.08)",
        }}
      >
        {wrapperChildren}
      </div>
    );
  };

  return (
    <CardWrapper>
      {imgUrl && (
        <img
          src={imgUrl}
          alt={title || "Background decoration"}
          className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-300 ease-out -z-10"
          style={{
            transform: `scale(${imgScale}) translateX(${imgTranslateX}px) translateY(${imgTranslateY}px)`,
          }}
        />
      )}
      
      {/* Gloss reflection shine layer */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-20"
        style={{
          background: `radial-gradient(circle at ${glossX}% ${glossY}%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)`,
        }}
      />

      {/* Default Overlay gradient if image exists */}
      {imgUrl && (
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent -z-10"></div>
      )}

      {/* Children or Default Layout */}
      {children ? (
        <div 
          className="w-full h-full"
          style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      ) : (
        <div 
          className="p-8 w-full h-full flex flex-col justify-end"
          style={{ transform: "translateZ(25px)" }}
        >
          {badge && (
            <span className="self-start px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-accent/20 text-accent border border-accent/20 mb-3">
              {badge}
            </span>
          )}
          {title && (
            <h3 className="text-xl md:text-2xl font-bold text-on-surface group-hover:text-accent transition-colors">
              {title}
            </h3>
          )}
          {desc && (
            <p className="text-xs md:text-sm text-text-secondary mt-2 leading-relaxed">
              {desc}
            </p>
          )}
        </div>
      )}
    </CardWrapper>
  );
}
