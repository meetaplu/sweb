"use client";

import React from "react";
import { MaskReveal } from "@/src/components/TextChoreography";

const metrics = [
  { label: "Average Annual Growth", value: "8-12", unit: "%" },
  { label: "Gemstones Tokenized", value: "12", unit: "Assets" },
  { label: "Portfolio Value", value: "€1.612B", unit: "" },
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

      </div>
    </section>
  );
}
