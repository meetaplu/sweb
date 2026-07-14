"use client";

import React from "react";
import { MaskReveal } from "@/src/components/TextChoreography";

const metrics = [
  { label: "Average Annual Growth", value: "8-12", unit: "%" },
  { label: "Gemstones Tokenized", value: "500+", unit: "Lots" },
  { label: "Total Value Locked", value: "$2.8M", unit: "USD" },
  { label: "Active Investors", value: "12K+", unit: "Users" },
];

export function Performance() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-amber-900/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-rose-900/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <MaskReveal direction="up" className="mb-4 text-center">
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">Market Metrics</h2>
        </MaskReveal>
        <MaskReveal direction="up" delay={0.1} className="mx-auto mb-20 max-w-2xl text-center text-xl text-muted">
          Transparent data showing the growth and scale of gem tokenization.
        </MaskReveal>

        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <MaskReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={0.08 * index}>
              <div className="rounded-2xl border border-amber-900/30 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 text-center transition-transform duration-500 hover:-translate-y-2">
                <div className="mb-2 text-4xl font-bold text-amber-400">
                  {metric.value}
                  <span className="ml-1 text-lg text-muted">{metric.unit}</span>
                </div>
                <p className="text-muted">{metric.label}</p>
              </div>
            </MaskReveal>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <MaskReveal direction="left" delay={0.2}>
            <div className="rounded-3xl border border-gray-800 bg-[#1a1a1a] p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-2xl font-bold">Why Invest in Gems</h3>
              <ul className="space-y-4 text-muted">
                <li className="flex items-start gap-3"><span className="font-bold text-amber-400">•</span><span><strong className="text-white">Historical Value Growth:</strong> Consistent annual appreciation.</span></li>
                <li className="flex items-start gap-3"><span className="font-bold text-amber-400">•</span><span><strong className="text-white">Tangible Asset:</strong> Physical ownership with real value.</span></li>
                <li className="flex items-start gap-3"><span className="font-bold text-amber-400">•</span><span><strong className="text-white">Portfolio Diversification:</strong> Non-correlated to stocks.</span></li>
                <li className="flex items-start gap-3"><span className="font-bold text-amber-400">•</span><span><strong className="text-white">Hedge Against Inflation:</strong> Gemstone values rise with inflation.</span></li>
              </ul>
            </div>
          </MaskReveal>

          <MaskReveal direction="right" delay={0.2}>
            <div className="rounded-3xl border border-gray-800 bg-[#1a1a1a] p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-2xl font-bold">How Redemption Works</h3>
              <ul className="space-y-4 text-muted">
                <li className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-amber-400" /><span>Hold gem tokens for desired time.</span></li>
                <li className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-amber-400" /><span>Request physical redemption anytime.</span></li>
                <li className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-amber-400" /><span>Certified gem shipped insured to you.</span></li>
                <li className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-amber-400" /><span>Full authentication documentation included.</span></li>
              </ul>
            </div>
          </MaskReveal>
        </div>
      </div>
    </section>
  );
}
