"use client";

import React from "react";
import { MaskReveal } from "@/src/components/TextChoreography";

const technologies = [
  { name: "Pink Diamond - 0.85 CT", category: "Rare • Certified GIA", image: "/Pink Diamond - 0.85 CT.png" },
  { name: "Burmese Ruby - 2.1 CT", category: "Premium • Vivid Red", image: "/Burmese Ruby - 2.1 CT.png" },
  { name: "Colombian Emerald - 1.5 CT", category: "Fine • Deep Green", image: "/Colombian Emerald - 1.5 CT.png" },
  { name: "Blue Sapphire - 3.2 CT", category: "Exceptional • Cornflower", image: "/Blue Sapphire - 3.2 CT.png" },
  { name: "Padparadscha Sapphire - 0.95 CT", category: "Rare • Peach-Pink", image: "/Padparadscha Sapphire - 0.95 CT.png" },
  { name: "Tanzanite - 4.8 CT", category: "Unique • Violet-Blue", image: "/Blue.png" },
  { name: "Spinel - 1.3 CT", category: "Collector's • Crimson", image: "/Spinel - 1.3 CT.png" },
  { name: "Tourmaline Mix - 5 Pieces", category: "Investment Lot • Multi-Color", image: "/Green.png" },
  { name: "Aquamarine - 2.7 CT", category: "Aqua Series • Serene Blue", image: "/Aquamarine - 2.7 CT.png" },
  { name: "Opal Black - 2.2 CT", category: "Australian • Rainbow Play", image: "/Opal Black - 2.2 CT.png" },
  { name: "Garnet Collection - 12 CT", category: "Precious Mix • Various Reds", image: "/Garnet Collection - 12 CT.png" },
];

export function TechStack() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-32">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-900/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <MaskReveal direction="up" className="mb-4 text-center">
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">Available Gem Lots</h2>
        </MaskReveal>
        <MaskReveal direction="up" delay={0.1} className="mx-auto mb-16 max-w-2xl text-center text-xl text-muted">
          Curated collection of certified precious gemstones ready for tokenization.
        </MaskReveal>

        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => (
            <MaskReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={0.05 * index}>
              <div className="group rounded-2xl border border-gray-800 bg-[#1a1a1a]/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img src={tech.image} alt={tech.name} className="h-10 w-10 object-contain" />
                    <div>
                      <h3 className="text-lg font-semibold transition-colors group-hover:text-amber-400">{tech.name}</h3>
                      <p className="text-sm text-muted">{tech.category}</p>
                    </div>
                  </div>
                  <div className="translate-x-0 text-2xl opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-100">→</div>
                </div>
              </div>
            </MaskReveal>
          ))}
        </div>

        <MaskReveal direction="circle" className="rounded-3xl border border-gray-800 bg-gradient-to-r from-amber-900/20 to-rose-900/20 p-8">
          <h3 className="mb-4 text-2xl font-semibold">Why Our Gemstones?</h3>
          <ul className="space-y-3 text-muted">
            <li className="flex items-start gap-3"><span className="mt-1 text-amber-400">✓</span><span><strong className="text-white">Certified:</strong> Every gemstone certified by GIA, AGS, or international standards.</span></li>
            <li className="flex items-start gap-3"><span className="mt-1 text-amber-400">✓</span><span><strong className="text-white">Curated Selection:</strong> Rare and investment-grade stones only.</span></li>
            <li className="flex items-start gap-3"><span className="mt-1 text-amber-400">✓</span><span><strong className="text-white">Tokenized & Liquid:</strong> Trade your gem tokens on secondary markets.</span></li>
            <li className="flex items-start gap-3"><span className="mt-1 text-amber-400">✓</span><span><strong className="text-white">Full Insurance:</strong> All stored gemstones fully insured in secure vaults.</span></li>
          </ul>
        </MaskReveal>
      </div>
    </section>
  );
}
