"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface TextChoreographyProps {
  children: string;
  type?: "chars" | "words" | "lines";
  stagger?: number;
  trigger?: "scroll" | "immediate";
  className?: string;
}

export function TextChoreography({
  children,
  type = "chars",
  stagger = 0.05,
  trigger = "scroll",
  className = "",
}: TextChoreographyProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const split = new SplitType(ref.current, { types: type });

    if (trigger === "scroll") {
      gsap.from(split[type], {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          end: "top 25%",
          scrub: 1,
          markers: false,
        },
        opacity: 0,
        y: 20,
        rotationX: 90,
        transformOrigin: "0% 50% -50",
        duration: 0.5,
        stagger,
      });
    } else {
      gsap.from(split[type], {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger,
        delay: 0.2,
      });
    }

    return () => {
      split.revert();
    };
  }, [children, type, stagger, trigger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
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
  duration = 0.8,
  delay = 0,
  direction = "up",
  className = "",
}: MaskRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const directions: Record<string, any> = {
      up: { clipPath: ["inset(100% 0 0 0)", "inset(0 0 0 0)"] },
      down: { clipPath: ["inset(0 0 100% 0)", "inset(0 0 0 0)"] },
      left: { clipPath: ["inset(0 100% 0 0)", "inset(0 0 0 0)"] },
      right: { clipPath: ["inset(0 0 0 100%)", "inset(0 0 0 0)"] },
      circle: { clipPath: ["circle(0%)", "circle(100%)"] },
    };

    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 75%",
      },
      ...directions[direction],
      duration,
      delay,
      ease: "power2.inOut",
    });

    return () => {
      gsap.killTweensOf(ref.current);
    };
  }, [duration, delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface GlitchProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export function GlitchText({ children, className = "", intensity = 2 }: GlitchProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes glitch-anim {
        0%, 100% { clip-path: inset(40% 0 61% 0); transform: translate(-2px, -2px); }
        20% { clip-path: inset(92% 0 1% 0); transform: translate(2px, 2px); }
        40% { clip-path: inset(43% 0 1% 0); transform: translate(-2px, 2px); }
        60% { clip-path: inset(25% 0 58% 0); transform: translate(2px, -2px); }
        80% { clip-path: inset(54% 0 7% 0); transform: translate(-2px, -2px); }
      }
      
      .glitch-text {
        position: relative;
        animation: glitch-anim 0.3s infinite;
        will-change: transform, clip-path;
      }
    `;
    document.head.appendChild(style);

    ref.current.classList.add("glitch-text");

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
