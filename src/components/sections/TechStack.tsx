"use client";

import React from "react";
import Image from "next/image";
import { MaskReveal } from "@/src/components/TextChoreography";

const inventory = [
  {
    name: "Aquamarine",
    image: "/Aquamarine - 2.7 CT.png",
    weight: "2.70 ct",
    price: "€ 14,250",
    origin: "Brazil",
    status: "Available",
    accent: "from-cyan-500/20 to-blue-500/10",
  },
  {
    name: "Blue Sapphire",
    image: "/Blue Sapphire - 3.2 CT.png",
    weight: "3.20 ct",
    price: "€ 24,900",
    origin: "Sri Lanka",
    status: "Reserved",
    accent: "from-indigo-500/20 to-violet-500/10",
  },
  {
    name: "Padparadscha Sapphire",
    image: "/Padparadscha Sapphire - 0.95 CT.png",
    weight: "0.95 ct",
    price: "€ 9,400",
    origin: "Sri Lanka",
    status: "Available",
    accent: "from-rose-500/20 to-orange-500/10",
  },
  {
    name: "Burmese Ruby",
    image: "/Burmese Ruby - 2.1 CT.png",
    weight: "2.10 ct",
    price: "€ 18,600",
    origin: "Myanmar",
    status: "Available",
    accent: "from-red-500/20 to-amber-500/10",
  },
  {
    name: "Colombian Emerald",
    image: "/Colombian Emerald - 1.5 CT.png",
    weight: "1.50 ct",
    price: "€ 11,700",
    origin: "Colombia",
    status: "Available",
    accent: "from-emerald-500/20 to-lime-500/10",
  },
  {
    name: "Opal Black",
    image: "/Opal Black - 2.2 CT.png",
    weight: "2.20 ct",
    price: "€ 12,300",
    origin: "Australia",
    status: "Available",
    accent: "from-slate-500/20 to-stone-500/10",
  },
  {
    name: "Spinel",
    image: "/Spinel - 1.3 CT.png",
    weight: "1.30 ct",
    price: "€ 8,900",
    origin: "Vietnam",
    status: "Available",
    accent: "from-purple-500/20 to-fuchsia-500/10",
  },
  {
    name: "Pink Diamond",
    image: "/Pink Diamond - 0.85 CT.png",
    weight: "0.85 ct",
    price: "€ 22,100",
    origin: "South Africa",
    status: "Reserved",
    accent: "from-pink-500/20 to-rose-400/10",
  },
  {
    name: "Alexandrite",
    image: "/1.png",
    weight: "1.80 ct",
    price: "€ 31,500",
    origin: "Sri Lanka",
    status: "Flagship",
    accent: "from-amber-500/20 to-yellow-400/10",
  },
  {
    name: "Garnet Collection",
    image: "/Garnet Collection - 12 CT.png",
    weight: "12.00 ct",
    price: "€ 16,200",
    origin: "Madagascar",
    status: "Available",
    accent: "from-orange-500/20 to-amber-500/10",
  },
];

export function TechStack() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-900/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <MaskReveal direction="up" className="mb-4 text-center">
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">Available Gem Lots</h2>
        </MaskReveal>
        <MaskReveal direction="up" delay={0.1} className="mx-auto mb-10 max-w-3xl text-center text-lg text-white/70 md:text-xl">
          Curated collection of certified precious gemstones ready for tokenization.
        </MaskReveal>

        <MaskReveal direction="up" className="mb-12 overflow-hidden rounded-[2rem] border border-white/10 bg-[#121212]/85 shadow-[0_0_60px_rgba(251,191,36,0.08)]">
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-2 p-2 text-left md:p-4">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-amber-200 sm:px-6">Stone</th>
                  <th className="px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-amber-200 sm:px-6">Image</th>
                  <th className="px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-amber-200 sm:px-6">Grams</th>
                  <th className="px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-amber-200 sm:px-6">Price</th>
                  <th className="px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-amber-200 sm:px-6">Origin</th>
                  <th className="px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-amber-200 sm:px-6">Status</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr key={item.name} className="rounded-2xl bg-white/5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
                    <td className="rounded-l-2xl px-4 py-4 sm:px-6">
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold text-white">{item.name}</span>
                        <span className="text-xs uppercase tracking-[0.25em] text-white/40">Certified lot</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 sm:px-6">
                      <div className={`relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${item.accent}`}>
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-white/80 sm:px-6">{item.weight}</td>
                    <td className="px-4 py-4 text-sm font-semibold text-amber-300 sm:px-6">{item.price}</td>
                    <td className="px-4 py-4 text-sm text-white/70 sm:px-6">{item.origin}</td>
                    <td className="rounded-r-2xl px-4 py-4 text-sm sm:px-6">
                      <span className={`rounded-full px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] ${item.status === "Flagship" ? "bg-amber-400/20 text-amber-300" : item.status === "Reserved" ? "bg-rose-500/15 text-rose-300" : "bg-emerald-500/15 text-emerald-300"}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </MaskReveal>
      </div>
    </section>
  );
}
