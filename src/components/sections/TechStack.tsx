"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TextChoreography, MaskReveal } from "@/src/components/TextChoreography";
import { useParallax, FloatingMotion } from "@/src/hooks/useParallax";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  { name: "Pink Diamond - 0.85 CT", category: "Rare • Certified GIA" },
  { name: "Burmese Ruby - 2.1 CT", category: "Premium • Vivid Red" },
  { name: "Colombian Emerald - 1.5 CT", category: "Fine • Deep Green" },
  { name: "Blue Sapphire - 3.2 CT", category: "Exceptional • Cornflower" },
  { name: "Padparadscha Sapphire - 0.95 CT", category: "Rare • Peach-Pink" },
  { name: "Tanzanite - 4.8 CT", category: "Unique • Violet-Blue" },
  { name: "Spinel - 1.3 CT", category: "Collector's • Crimson" },
  { name: "Tourmaline Mix - 5 Pieces", category: "Investment Lot • Multi-Color" },
  { name: "Aquamarine - 2.7 CT", category: "Aqua Series • Serene Blue" },
  { name: "Opal Black - 2.2 CT", category: "Australian • Rainbow Play" },
  { name: "Garnet Collection - 12 CT", category: "Precious Mix • Various Reds" },
];

export function TechStack() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const techItemsRef = useRef<HTMLDivElement[]>([]);

  useParallax(bgRef, 0.5);

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 60%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
      });
    }

    techItemsRef.current.forEach((item, index) => {
      // Parallax for individual items
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          markers: false,
        },
        y: Math.random() * 40 - 20,
      });

      // Entrance animation
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
        },
        opacity: 0,
        x: index % 2 === 0 ? -30 : 30,
        duration: 0.6,
        delay: index * 0.05,
      });
    });
  }, []);

  return (
    <section className="min-h-screen py-32 px-6 bg-gradient-to-b from-background to-[#1a1a1a] relative overflow-hidden">
      {/* Parallax background layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 opacity-30 pointer-events-none will-change-transform"
      >
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-900/20 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl font-bold text-center mb-4"
        >
          Available Gem Lots
        </h2>
        <p className="text-center text-muted text-xl mb-16 max-w-2xl mx-auto">
          Curated collection of certified precious gemstones ready for tokenization
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {technologies.map((tech, index) => (
            <FloatingMotion key={index} duration={4 + index * 0.5}>
              <div
                ref={(el) => {
                  if (el) techItemsRef.current[index] = el;
                }}
                className="p-4 rounded-lg bg-[#1a1a1a]/80 backdrop-blur-sm border border-gray-800 hover:border-amber-500 transition-all duration-300 group transform hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-amber-400 transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-muted">{tech.category}</p>
                  </div>
                  <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2">
                    →
                  </div>
                </div>
              </div>
            </FloatingMotion>
          ))}
        </div>

        <MaskReveal direction="circle" className="p-8 rounded-xl bg-gradient-to-r from-amber-900/20 to-rose-900/20 border border-gray-800">
          <h3 className="text-2xl font-semibold mb-4">Why Our Gemstones?</h3>
          <ul className="space-y-3 text-muted">
            <li className="flex items-start gap-3">
              <span className="text-amber-400 mt-1">✓</span>
              <span>
                <strong className="text-white">Certified:</strong> Every gemstone 
                certified by GIA, AGS, or international standards
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 mt-1">✓</span>
              <span>
                <strong className="text-white">Curated Selection:</strong> Rare 
                and investment-grade stones only
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 mt-1">✓</span>
              <span>
                <strong className="text-white">Tokenized & Liquid:</strong> Trade 
                your gem tokens on secondary markets
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 mt-1">✓</span>
              <span>
                <strong className="text-white">Full Insurance:</strong> All stored 
                gemstones fully insured in secure vaults
              </span>
            </li>
          </ul>
        </MaskReveal>
      </div>
    </section>
  );
}
