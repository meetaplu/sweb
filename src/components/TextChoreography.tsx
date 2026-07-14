"use client";

import React, { useEffect, useRef, useState } from "react";

interface TextChoreographyProps {
  children: string;
  type?: "chars" | "words" | "lines";
  stagger?: number;
  trigger?: "scroll" | "immediate";
  className?: string;
}

export function TextChoreography({ children, className = "" }: TextChoreographyProps) {
  return <div className={className}>{children}</div>;
}

interface MaskRevealProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "circle";
  className?: string;
}

export function MaskReveal({
  children,
  className = "",
  duration = 700,
  delay = 0,
  direction = "up",
}: MaskRevealProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const translateMap = {
    up: "translate3d(0, 24px, 0)",
    down: "translate3d(0, -24px, 0)",
    left: "translate3d(-24px, 0, 0)",
    right: "translate3d(24px, 0, 0)",
    circle: "translate3d(0, 12px, 0) scale(0.97)",
  };

  const transform = visible ? "translate3d(0, 0, 0) scale(1)" : translateMap[direction];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform,
        transition: `opacity ${duration}ms ease, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        transitionDelay: `${delay}s`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}

interface GlitchProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export function GlitchText({ children, className = "" }: GlitchProps) {
  return <div className={className}>{children}</div>;
}
