"use client";

import React, { useEffect, useRef, useState } from "react";

interface StackingSectionProps {
  children: React.ReactNode;
  index: number;
  totalSections: number;
  backgroundColor?: string;
}

export function StackingSection({
  children,
  index,
  backgroundColor = "bg-background",
}: StackingSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isActive, setIsActive] = useState(index === 0);
  const [progress, setProgress] = useState(index === 0 ? 1 : 0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        const ratio = Math.min(1, Math.max(0, entry.intersectionRatio));
        setProgress(ratio);
        setIsActive(ratio > 0.35 || index === 0);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [index]);

  const contentStyle = {
    opacity: 1,
    transform: isActive
      ? "translate3d(0, 0, 0) scale(1)"
      : `translate3d(0, ${8 + (1 - progress) * 12}px, 0) scale(${0.99 + progress * 0.01})`,
    filter: "blur(0px)",
  };

  return (
    <section
      ref={sectionRef}
      data-section-index={index}
      className={`sticky top-0 flex min-h-screen w-full items-center justify-center overflow-visible ${backgroundColor}`}
      style={{
        zIndex: 10 + index,
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        willChange: "transform, opacity",
      }}
    >
      <div className="flex w-full items-center justify-center" style={{ ...contentStyle, transition: "all 700ms cubic-bezier(0.22, 1, 0.36, 1)" }}>
        {children}
      </div>
    </section>
  );
}
