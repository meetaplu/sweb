"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TextChoreography, MaskReveal } from "@/src/components/TextChoreography";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: "💎",
    title: "Rare Gemstones",
    description: "Curated selection of certified colored diamonds, rubies, emeralds & sapphires",
  },
  {
    icon: "🔗",
    title: "Blockchain Verified",
    description: "Every gem tokenized on-chain with transparent provenance",
  },
  {
    icon: "💵",
    title: "Fractional Ownership",
    description: "Own fractions of premium gemstones starting from $100",
  },
  {
    icon: "🎁",
    title: "Physical Redemption",
    description: "Redeem tokens for actual certified gemstones delivered to you",
  },
  {
    icon: "📊",
    title: "Market Transparency",
    description: "Real-time pricing & historical value trends",
  },
  {
    icon: "🏆",
    title: "Expert Curation",
    description: "Each gem certified by international gemological institutes",
  },
  {
    icon: "🔒",
    title: "Secure Storage",
    description: "Insured vault storage with optional personal delivery",
  },
  {
    icon: "🌍",
    title: "Global Access",
    description: "Invest in precious gemstones from anywhere in the world",
  },
];

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Title animation with scroll trigger
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

    // Staggered card animations with parallax
    cardsRef.current.forEach((card, index) => {
      // Parallax effect
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          markers: false,
        },
        y: -30 * (index % 2 === 0 ? 1 : -1),
      });

      // Fade and scale animation
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        delay: index * 0.1,
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen py-32 px-6 bg-background relative"
    >
      {/* Parallax background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-900/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-900/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl font-bold text-center mb-4"
        >
          Why Choose Gem Tokens?
        </h2>
        <p className="text-center text-muted text-xl mb-16 max-w-2xl mx-auto">
          Own certified precious gemstones with blockchain transparency and fractional access
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <MaskReveal
              key={index}
              direction={index % 4 === 0 ? "left" : index % 4 === 3 ? "right" : "up"}
              delay={index * 0.08}
            >
              <div
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="p-6 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-gray-800 hover:border-amber-500 transition-all duration-300 group h-full transform hover:scale-105"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </MaskReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
