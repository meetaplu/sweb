"use client";

import React from "react";
import { MaskReveal } from "@/src/components/TextChoreography";

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
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-transparent via-transparent to-[#111111] opacity-80" />
      </div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-900/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-purple-900/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <MaskReveal direction="up" className="mb-4 text-center">
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Why Choose Gem Tokens?
          </h2>
        </MaskReveal>
        <MaskReveal direction="up" delay={0.1} className="mx-auto mb-16 max-w-2xl text-center text-xl text-muted">
          Own certified precious gemstones with blockchain transparency and fractional access.
        </MaskReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <MaskReveal
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={0.08 * index}
            >
              <div className="group h-full rounded-2xl border border-gray-800 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-amber-500">
                <div className="mb-4 flex h-14 items-center justify-start transition-transform duration-300 group-hover:scale-110">
                  {index % 4 === 0 ? (
                    <img src="/Red.png" alt="Red gem" className="h-12 w-12 object-contain" />
                  ) : index % 4 === 1 ? (
                    <img src="/Blue.png" alt="Blue gem" className="h-12 w-12 object-contain" />
                  ) : index % 4 === 2 ? (
                    <img src="/Green.png" alt="Green gem" className="h-12 w-12 object-contain" />
                  ) : (
                    <img src="/Yellow.png" alt="Yellow gem" className="h-12 w-12 object-contain" />
                  )}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
              </div>
            </MaskReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
