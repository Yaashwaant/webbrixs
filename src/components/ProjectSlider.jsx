"use client";

import { useState, useEffect, useRef } from "react";
import InteractiveCard from "./InteractiveCard";

const projects = [
  {
    title: "LeatherCraft E-Store",
    category: "E-Commerce",
    desc: "Premium wallet & leather goods e-commerce marketplace.",
    img: "/images/projects/project11.png",
  },
  {
    title: "FurniStudio Catalog",
    category: "Web Design",
    desc: "Minimalist catalog & customized furniture portal.",
    img: "/images/projects/project1.png",
  },
  {
    title: "Travelora App",
    category: "SaaS Platform",
    desc: "Immersive travel booking portal interface.",
    img: "/images/projects/project14.png",
  },
  {
    title: "FinTech Advisory Mobile",
    category: "Mobile App",
    desc: "Modern portfolio advisory and financial mobile application.",
    img: "/images/projects/project16.png",
  },
  {
    title: "FlexStore Market",
    category: "E-Commerce",
    desc: "End-to-end custom Shopify connector marketplace.",
    img: "/images/projects/project12.png",
  },
  {
    title: "MediFlow Dashboard",
    category: "SaaS Platform",
    desc: "Healthcare patient portal and SaaS analytics dashboard.",
    img: "/images/projects/project5.png",
  },
  {
    title: "EstateFlow Portal",
    category: "SaaS Platform",
    desc: "Real estate properties and brokerage listings manager.",
    img: "/images/projects/project6.png",
  }
];

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const dragStartTime = useRef(0);

  // Auto-play effect
  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoplay]);

  const handleNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setDragOffset(0);
  };

  const handlePrev = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setDragOffset(0);
  };

  // Drag / Touch gestures
  const getClientX = (e) => {
    if (e.touches && e.touches.length > 0) {
      return e.touches[0].clientX;
    }
    return e.clientX;
  };

  const handleStart = (e) => {
    isDragging.current = true;
    startX.current = getClientX(e);
    dragStartTime.current = Date.now();
    setIsAutoplay(false);
  };

  const handleMove = (e) => {
    if (!isDragging.current) return;
    const currentX = getClientX(e);
    const diff = currentX - startX.current;
    
    // Dampen drag offset for premium feel
    setDragOffset(diff);
  };

  const handleEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    
    const dragTime = Date.now() - dragStartTime.current;
    // Swipe detection (quick swipe or drag threshold of 80px)
    if (dragOffset < -80 || (dragOffset < -30 && dragTime < 250)) {
      handleNext();
    } else if (dragOffset > 80 || (dragOffset > 30 && dragTime < 250)) {
      handlePrev();
    } else {
      setDragOffset(0);
    }
  };

  return (
    <div 
      className="relative w-full overflow-hidden py-6 select-none"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      {/* Slider Viewport Container */}
      <div className="w-full overflow-hidden px-4 md:px-12 py-4">
        <div 
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-grab active:cursor-grabbing gap-6"
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
            transitionDuration: isDragging.current ? "0ms" : "700ms"
          }}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
        >
          {projects.map((proj, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={idx}
                className="w-full shrink-0 aspect-[4/3] md:aspect-[16/9] relative transition-all duration-700"
                style={{
                  opacity: isActive ? 1 : 0.3,
                  transform: isActive ? "scale(1)" : "scale(0.96)",
                }}
              >
                <InteractiveCard 
                  imgUrl={proj.img} 
                  title={proj.title}
                  desc={proj.desc}
                  badge={proj.category}
                  href="/portfolio"
                  className="w-full h-full"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation & Controls */}
      <div className="flex justify-between items-center mt-8 px-4 md:px-12 max-w-7xl mx-auto w-full">
        {/* Pagination Dots */}
        <div className="flex gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsAutoplay(false);
                setCurrentIndex(idx);
                setDragOffset(0);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 bg-accent" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Arrow Buttons */}
        <div className="flex gap-4">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/10 bg-surface/50 backdrop-blur-md flex items-center justify-center hover:border-accent hover:text-accent hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer"
            aria-label="Previous Project"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/10 bg-surface/50 backdrop-blur-md flex items-center justify-center hover:border-accent hover:text-accent hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer"
            aria-label="Next Project"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}
