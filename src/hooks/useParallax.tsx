"use client";

import React, { useEffect, useRef } from "react";

interface ParallaxLayer {
  element: HTMLElement;
  speed: number;
}

const parallaxLayers: ParallaxLayer[] = [];

export function useParallax(element: React.RefObject<HTMLElement>, speed: number = 0.5) {
  useEffect(() => {
    if (!element.current) return;

    const layer: ParallaxLayer = {
      element: element.current,
      speed,
    };

    parallaxLayers.push(layer);

    const handleScroll = () => {
      parallaxLayers.forEach((layer) => {
        const scrollY = window.scrollY;
        const yPos = scrollY * layer.speed;
        layer.element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      const index = parallaxLayers.indexOf(layer);
      if (index > -1) parallaxLayers.splice(index, 1);
    };
  }, [element, speed]);
}

export function FloatingMotion({ children, duration = 4 }: { children: React.ReactNode; duration?: number }) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    let startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % (duration * 1000)) / (duration * 1000);

      // Floating motion with multiple axes
      const floatY = Math.sin(progress * Math.PI * 2) * 20;
      const floatX = Math.cos(progress * Math.PI * 2) * 10;
      const rotation = progress * 360;
      const scale = 1 + Math.sin(progress * Math.PI * 2) * 0.05;

      element.style.transform = `translate3d(${floatX}px, ${floatY}px, 0) rotate(${rotation}deg) scale(${scale})`;

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [duration]);

  return (
    <div ref={elementRef} className="transition-all duration-300">
      {children}
    </div>
  );
}

export function BreathingScale({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const keyframes = `
      @keyframes breathing {
        0%, 100% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(1.08); opacity: 1; }
      }
    `;

    const style = document.createElement("style");
    style.innerHTML = keyframes;
    document.head.appendChild(style);

    element.style.animation = `breathing 3s ease-in-out infinite`;
    element.style.animationDelay = `${delay}s`;

    return () => {
      document.head.removeChild(style);
    };
  }, [delay]);

  return (
    <div ref={elementRef} className="will-change-transform">
      {children}
    </div>
  );
}
