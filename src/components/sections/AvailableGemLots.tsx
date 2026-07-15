"use client";

import React from "react";
import Image from "next/image";
import { MaskReveal } from "@/src/components/TextChoreography";

const gems = [
  { name: "Aquamarine", image: "/Aquamarine - 2.7 CT.png", carats: "2.70 ct", price: "€ 14,250", status: "Available" },
  { name: "Blue Sapphire", image: "/Blue Sapphire - 3.2 CT.png", carats: "3.20 ct", price: "€ 24,900", status: "Reserved" },
  { name: "Padparadscha Sapphire", image: "/Padparadscha Sapphire - 0.95 CT.png", carats: "0.95 ct", price: "€ 9,400", status: "Available" },
  { name: "Burmese Ruby", image: "/Burmese Ruby - 2.1 CT.png", carats: "2.10 ct", price: "€ 18,600", status: "Available" },
  { name: "Colombian Emerald", image: "/Colombian Emerald - 1.5 CT.png", carats: "1.50 ct", price: "€ 11,700", status: "Available" },
  { name: "Opal Black", image: "/Opal Black - 2.2 CT.png", carats: "2.20 ct", price: "€ 12,300", status: "Available" },
  { name: "Spinel", image: "/Spinel - 1.3 CT.png", carats: "1.30 ct", price: "€ 8,900", status: "Available" },
  { name: "Pink Diamond", image: "/Pink Diamond - 0.85 CT.png", carats: "0.85 ct", price: "€ 22,100", status: "Reserved" },
  { name: "Alexandrite", image: "/1.png", carats: "1.80 ct", price: "€ 31,500", status: "Flagship" },
  { name: "Garnet Collection", image: "/Garnet Collection - 12 CT.png", carats: "12.00 ct", price: "€ 16,200", status: "Available" },
  { name: "Ruby", image: "/Rubby_01.png", carats: "2.10 ct", price: "€ 17,400", status: "Available" },
  { name: "Blue Gem", image: "/Blue.png", carats: "1.20 ct", price: "€ 9,600", status: "Available" },
  { name: "Red Gem", image: "/Red.png", carats: "1.40 ct", price: "€ 10,800", status: "Available" },
  { name: "Green Gem", image: "/Green.png", carats: "1.60 ct", price: "€ 11,200", status: "Available" },
  { name: "Yellow Gem", image: "/Yellow.png", carats: "1.00 ct", price: "€ 9,800", status: "Available" },
];

export function AvailableGemLots() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-900/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <MaskReveal direction="up" className="mb-4 text-center">
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">Available Gem Lots</h2>
        </MaskReveal>
        <MaskReveal direction="up" delay={0.08} className="mx-auto mb-10 max-w-3xl text-center text-lg text-white/70 md:text-xl">
          Curated collection of certified precious gemstones ready for tokenization.
        </MaskReveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {gems.map((gem, index) => (
            <MaskReveal key={gem.name} direction={index % 2 === 0 ? "left" : "right"} delay={0.05 * index}>
              <div className="group rounded-[1.75rem] border border-white/10 bg-[#141414]/90 p-5 shadow-[0_0_40px_rgba(251,191,36,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                      <Image src={gem.image} alt={gem.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{gem.name}</h3>
                      <p className="text-sm text-white/50">Certified lot</p>
                    </div>
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] ${gem.status === "Flagship" ? "bg-amber-400/20 text-amber-300" : gem.status === "Reserved" ? "bg-rose-500/15 text-rose-300" : "bg-emerald-500/15 text-emerald-300"}`}>
                    {gem.status}
                  </span>
                </div>

                <div className="space-y-2 border-t border-white/10 pt-4 text-sm text-white/70">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50">Carats</span>
                    <span className="font-medium text-white">{gem.carats}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50">Price</span>
                    <span className="font-semibold text-amber-300">{gem.price}</span>
                  </div>
                </div>
              </div>
            </MaskReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
