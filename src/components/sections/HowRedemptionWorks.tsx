"use client";

import React from "react";
import Image from "next/image";
import { MaskReveal } from "@/src/components/TextChoreography";

const steps = [
  "Hold gem tokens for your preferred holding period.",
  "Request physical redemption whenever you choose.",
  "Receive your certified gemstone, shipped and insured.",
  "Review full authentication documentation with your order.",
];

export function HowRedemptionWorks() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-amber-900/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-rose-900/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <MaskReveal direction="up" className="mb-4 text-center">
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">How Redemption Works</h2>
        </MaskReveal>
        <MaskReveal direction="up" delay={0.08} className="mx-auto mb-10 max-w-2xl text-center text-lg text-white/70 md:text-xl">
          A simple path from ownership to physical delivery, secured end to end.
        </MaskReveal>

        <div className="grid gap-8 md:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <MaskReveal direction="left" delay={0.12}>
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[560px] overflow-hidden sm:max-w-[640px]">
                <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
                  <Image
                    src="/token verify.png"
                    alt="Token verification process"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </MaskReveal>

          <MaskReveal direction="right" delay={0.12}>
            <div className="rounded-[1.75rem] border border-white/10 bg-[#161616]/90 p-6 shadow-[0_0_35px_rgba(251,191,36,0.08)] backdrop-blur-sm sm:p-8">
              <ul className="space-y-4 text-white/75">
                {steps.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400" />
                    <span className="text-base leading-relaxed sm:text-lg">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MaskReveal>
        </div>
      </div>
    </section>
  );
}
