"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import { TextChoreography, MaskReveal } from "@/src/components/TextChoreography";
import { FloatingMotion } from "@/src/hooks/useParallax";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const orbContainerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    // Hero title animation with character reveal
    const split = new SplitType(titleRef.current, { types: "chars,words" });

    gsap.from(split.chars, {
      duration: 1,
      opacity: 0,
      y: 30,
      stagger: 0.03,
      ease: "back.out",
    });

    // Subtitle fade in
    if (subtitleRef.current) {
      gsap.from(subtitleRef.current, {
        duration: 1,
        opacity: 0,
        y: 20,
        delay: 0.4,
        ease: "power2.out",
      });
    }

    // Orb scale and rotation on scroll
    if (orbContainerRef.current) {
      gsap.to(orbContainerRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: "bottom 80%",
          scrub: 1,
          markers: false,
        },
        scale: 0.8,
        opacity: 0.7,
      });
    }

    // CTA buttons animation
    if (ctaRef.current) {
      gsap.from(ctaRef.current.children, {
        duration: 0.8,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        delay: 0.8,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden bg-gradient-to-b from-background via-background to-[#0a0a0a]"
    >
      {/* Gradient background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-amber-900/15 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-900/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Main Gemstone Image */}
        <MaskReveal direction="down" delay={0.2} className="mb-12">
          <div className="relative w-full max-w-md mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-amber-500/20 rounded-full filter blur-3xl opacity-60 animate-pulse" />
            <Image
              src="/Rubby_01.png"
              alt="Premium Ruby Gemstone"
              width={400}
              height={500}
              className="relative w-full max-w-sm mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </MaskReveal>

        {/* Main Title */}
        <MaskReveal direction="up" delay={0.3} className="mb-6">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-amber-400"
          >
            Own Precious Gemstones
          </h1>
        </MaskReveal>

        {/* Subtitle */}
        <MaskReveal direction="up" delay={0.4} className="mb-12">
          <p
            ref={subtitleRef}
            className="text-lg md:text-2xl text-amber-100/80 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
          >
            Powered by Blockchain
          </p>
        </MaskReveal>

        {/* Description Text */}
        <MaskReveal direction="up" delay={0.5} className="mb-12">
          <p
            ref={subtitleRef}
            className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Invest in rare colored diamonds, rubies, emeralds & sapphires. 
            Tokenized. Redeemable. Secure.
          </p>
        </MaskReveal>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center">
          <FloatingMotion duration={3}>
            <button className="px-10 py-4 bg-amber-400 text-black font-semibold rounded-full hover:bg-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl text-lg">
              Start Investing Now
            </button>
          </FloatingMotion>
          <FloatingMotion duration={3.5}>
            <button className="px-10 py-4 bg-transparent border-2 border-amber-400 text-amber-400 font-semibold rounded-full hover:bg-amber-400 hover:text-black transition-all duration-300 shadow-lg text-lg">
              Learn More
            </button>
          </FloatingMotion>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-amber-400/70">Scroll to explore</span>
          <svg
            className="w-6 h-6 text-amber-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
