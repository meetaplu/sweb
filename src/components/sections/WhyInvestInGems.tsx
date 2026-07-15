"use client";

import React from "react";
import { MaskReveal } from "@/src/components/TextChoreography";

const reasons = [
  {
    title: "Historical Value Growth",
    description: "Consistent annual appreciation for rare, certified gemstones.",
  },
  {
    title: "Tangible Asset",
    description: "Physical ownership with real-world value and transparent provenance.",
  },
  {
    title: "Portfolio Diversification",
    description: "A non-correlated reserve asset that balances traditional portfolios.",
  },
  {
    title: "Hedge Against Inflation",
    description: "Gemstone values have historically strengthened during inflationary cycles.",
  },
];

export function WhyInvestInGems() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-amber-900/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-rose-900/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <MaskReveal direction="up" className="mb-4 text-center">
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">Why Invest in Gems</h2>
        </MaskReveal>
        <MaskReveal direction="up" delay={0.08} className="mx-auto mb-16 max-w-2xl text-center text-lg text-white/70 md:text-xl">
          Premium gemstones offer enduring scarcity, documented provenance, and long-term value resilience.
        </MaskReveal>

        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <MaskReveal key={reason.title} direction={index % 2 === 0 ? "left" : "right"} delay={0.06 * index}>
              <div className="rounded-[1.75rem] border border-white/10 bg-[#161616]/90 p-8 shadow-[0_0_35px_rgba(251,191,36,0.08)] backdrop-blur-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/15 text-lg text-amber-300">
                  ✦
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-white">{reason.title}</h3>
                <p className="leading-relaxed text-white/70">{reason.description}</p>
              </div>
            </MaskReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
