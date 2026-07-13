"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StackingSectionProps {
  children: React.ReactNode;
  index: number;
  totalSections: number;
  backgroundColor?: string;
}

export function StackingSection({
  children,
  index,
  totalSections,
  backgroundColor = "bg-background",
}: StackingSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const SCALE_MIN = 0.9; // 90% scale
    const OVERLAP = 0.35; // 35% overlap
    const SECTION_HEIGHT = window.innerHeight;

    // For sections after the first one, apply stacking animation
    if (index > 0 && sectionRef.current) {
      const currentSection = sectionRef.current;
      
      // Find the previous section to use as trigger
      const previousSection = currentSection.previousElementSibling as HTMLElement | null;
      
      if (previousSection) {
        gsap.to(currentSection, {
          scrollTrigger: {
            trigger: previousSection,
            start: "bottom 65%",
            end: "bottom 35%",
            scrub: 1.2,
            markers: false,
          },
          y: -SECTION_HEIGHT * OVERLAP,
          scale: SCALE_MIN,
          transformOrigin: "top center",
          ease: "power2.inOut",
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars?.trigger === sectionRef.current?.previousElementSibling) {
          trigger.kill();
        }
      });
    };
  }, [index]);

  return (
    <div
      ref={sectionRef}
      data-section-index={index}
      className={`relative w-full min-h-screen ${backgroundColor}`}
      style={{
        transformOrigin: "top center",
        zIndex: 100 - index, // Higher z-index for later sections
      }}
    >
      {children}
    </div>
  );
}
