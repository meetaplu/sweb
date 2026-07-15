"use client";

import React from "react";
import Image from "next/image";
import { MaskReveal } from "@/src/components/TextChoreography";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="hero-orb absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/15 blur-3xl" />
        <div className="hero-orb absolute bottom-20 right-10 h-96 w-96 rounded-full bg-rose-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        <MaskReveal direction="down" className="mb-10">
          <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center">
            <Image
              src="/Heero_Section.png"
              alt="Premium hero gemstone"
              width={520}
              height={640}
              className="w-full max-w-[360px] object-contain drop-shadow-[0_0_50px_rgba(255,180,80,0.28)] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[520px]"
              priority
            />
          </div>
        </MaskReveal>

        <MaskReveal direction="up" className="mb-4">
          <h1 className="text-hero font-semibold uppercase tracking-[0.24em] leading-[0.95] text-transparent bg-gradient-to-r from-amber-200 via-rose-200 to-amber-400 bg-clip-text">
            Own Precious Gemstones
          </h1>
        </MaskReveal>

        <MaskReveal direction="up" className="mb-6">
          <p className="mx-auto max-w-2xl text-lg font-light uppercase tracking-[0.28em] text-amber-100/80 md:text-2xl">
            Powered by Blockchain
          </p>
        </MaskReveal>

        <MaskReveal direction="up" className="mb-10">
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Invest in certified Gemreserve.io gemstones with transparent provenance. Tokenized. Redeemable. Secure.
          </p>
        </MaskReveal>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <button className="rounded-full bg-amber-400 px-10 py-4 text-lg font-semibold text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-amber-500 hover:shadow-2xl">
            Start Investing Now
          </button>
          <button className="rounded-full border-2 border-amber-400 px-10 py-4 text-lg font-semibold text-amber-400 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:text-black">
            Learn More
          </button>
        </div>
      </div>

    </section>
  );
}
