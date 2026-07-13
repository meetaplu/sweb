"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TextChoreography, MaskReveal } from "@/src/components/TextChoreography";
import { BreathingScale } from "@/src/hooks/useParallax";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { label: "Average Annual Growth", value: "8-12", unit: "%" },
  { label: "Gemstones Tokenized", value: "500+", unit: "Lots" },
  { label: "Total Value Locked", value: "$2.8M", unit: "USD" },
  { label: "Active Investors", value: "12K+", unit: "Users" },
];

export function Performance() {
  const containerRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    metricsRef.current.forEach((metric, index) => {
      gsap.from(metric, {
        scrollTrigger: {
          trigger: metric,
          start: "top 75%",
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: index * 0.1,
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen py-32 px-6 bg-background relative overflow-hidden flex items-center justify-center"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-900/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-900/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
          Market Metrics
        </h2>
        <p className="text-center text-muted text-xl mb-20 max-w-2xl mx-auto">
          Transparent data showing the growth and scale of gem tokenization
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <MaskReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
              <div
                ref={(el) => {
                  if (el) metricsRef.current[index] = el;
                }}
                className="p-8 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-amber-900/30 text-center transform hover:scale-105 transition-transform"
              >
                <BreathingScale delay={index * 0.2}>
                  <div className="text-4xl font-bold text-amber-400 mb-2">
                    {metric.value}
                    <span className="text-lg text-muted ml-1">{metric.unit}</span>
                  </div>
                </BreathingScale>
                <p className="text-muted">{metric.label}</p>
              </div>
            </MaskReveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MaskReveal direction="left" delay={0.3}>
            <div className="p-8 rounded-xl bg-[#1a1a1a] border border-gray-800 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Why Invest in Gems</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>
                    <strong>Historical Value Growth:</strong> Consistent annual appreciation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>
                    <strong>Tangible Asset:</strong> Physical ownership with real value
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>
                    <strong>Portfolio Diversification:</strong> Non-correlated to stocks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>
                    <strong>Hedge Against Inflation:</strong> Gemstone values rise with inflation
                  </span>
                </li>
              </ul>
            </div>
          </MaskReveal>

          <MaskReveal direction="right" delay={0.3}>
            <div className="p-8 rounded-xl bg-[#1a1a1a] border border-gray-800 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">How Redemption Works</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
                  <span>Hold gem tokens for desired time</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
                  <span>Request physical redemption anytime</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />
                  <span>Certified gem shipped insured to you</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: "0.9s" }} />
                  <span>Full authentication documentation included</span>
                </li>
              </ul>
            </div>
          </MaskReveal>
        </div>
      </div>
    </section>
  );
}
