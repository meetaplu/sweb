"use client";

import React from "react";
import { MaskReveal } from "@/src/components/TextChoreography";

const inventory = [
  { name: "Aquamarine", carats: 2.7, price: 14250, total: 38475, status: "Available" },
  { name: "Blue Sapphire", carats: 3.2, price: 24900, total: 79680, status: "Reserved" },
  { name: "Padparadscha Sapphire", carats: 0.95, price: 9400, total: 8930, status: "Available" },
  { name: "Burmese Ruby", carats: 2.1, price: 18600, total: 39060, status: "Available" },
  { name: "Colombian Emerald", carats: 1.5, price: 11700, total: 17550, status: "Available" },
  { name: "Opal Black", carats: 2.2, price: 12300, total: 27060, status: "Available" },
  { name: "Spinel", carats: 1.3, price: 8900, total: 11570, status: "Available" },
  { name: "Pink Diamond", carats: 0.85, price: 22100, total: 18785, status: "Reserved" },
  { name: "Alexandrite", carats: 1.8, price: 31500, total: 56700, status: "Flagship" },
  { name: "Garnet Collection", carats: 12.0, price: 16200, total: 194400, status: "Available" },
  { name: "Ruby", carats: 2.1, price: 17400, total: 36540, status: "Available" },
  { name: "Blue Gem", carats: 1.2, price: 9600, total: 11520, status: "Available" },
  { name: "Red Gem", carats: 1.4, price: 10800, total: 15120, status: "Available" },
  { name: "Green Gem", carats: 1.6, price: 11200, total: 17920, status: "Available" },
  { name: "Yellow Gem", carats: 1.0, price: 9800, total: 9800, status: "Available" },
];

const currency = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const totalCarats = inventory.reduce((sum, item) => sum + item.carats, 0);
const totalPrice = inventory.reduce((sum, item) => sum + item.total, 0);

export function Pricing() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-900/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <MaskReveal direction="up" className="mb-4 text-center">
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">Gems Prices</h2>
        </MaskReveal>
        <MaskReveal direction="up" delay={0.08} className="mx-auto mb-8 max-w-3xl text-center text-lg text-white/70 md:text-xl">
          Curated collection of certified precious gemstones ready for tokenization.
        </MaskReveal>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 md:px-6">
          <div>
            <span className="mr-2 text-white/50">Total Carats</span>
            <span className="font-semibold text-white">{totalCarats.toFixed(2)} ct</span>
          </div>
          <div>
            <span className="mr-2 text-white/50">Total Price</span>
            <span className="font-semibold text-amber-300">{currency.format(totalPrice)}</span>
          </div>
        </div>

        <MaskReveal direction="up" className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#121212]/85 shadow-[0_0_60px_rgba(251,191,36,0.08)]">
          <div className="overflow-x-auto">
            <table className="min-w-full min-w-[760px] border-separate border-spacing-y-2 p-2 text-left md:p-4">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-amber-200 sm:px-6">Gem</th>
                  <th className="px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-amber-200 sm:px-6">Carats</th>
                  <th className="px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-amber-200 sm:px-6">Price</th>
                  <th className="px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-amber-200 sm:px-6">Total</th>
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
                    <td className="px-4 py-4 text-sm text-white/80 sm:px-6">{item.carats.toFixed(2)} ct</td>
                    <td className="px-4 py-4 text-sm text-amber-300 sm:px-6">{currency.format(item.price)}</td>
                    <td className="px-4 py-4 text-sm font-semibold text-white sm:px-6">{currency.format(item.total)}</td>
                    <td className="rounded-r-2xl px-4 py-4 text-sm sm:px-6">
                      <span className={`rounded-full px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] ${item.status === "Flagship" ? "bg-amber-400/20 text-amber-300" : item.status === "Reserved" ? "bg-rose-500/15 text-rose-300" : "bg-emerald-500/15 text-emerald-300"}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
                <tr className="bg-white/10">
                  <td className="rounded-l-2xl px-4 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white/70 sm:px-6">Total</td>
                  <td className="px-4 py-4 text-sm font-semibold text-white sm:px-6">{totalCarats.toFixed(2)} ct</td>
                  <td className="px-4 py-4 text-sm font-semibold text-white/80 sm:px-6" />
                  <td className="px-4 py-4 text-sm font-semibold text-amber-300 sm:px-6">{currency.format(totalPrice)}</td>
                  <td className="rounded-r-2xl px-4 py-4 text-sm text-white/60 sm:px-6">All lots</td>
                </tr>
              </tbody>
            </table>
          </div>
        </MaskReveal>
      </div>
    </section>
  );
}
