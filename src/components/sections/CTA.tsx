"use client";

import React from "react";
import { MaskReveal } from "@/src/components/TextChoreography";

export function CTA() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-amber-900/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-rose-900/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-amber-800/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <MaskReveal direction="up" delay={0.2}>
          <h2 className="mb-6 bg-gradient-to-r from-amber-400 via-rose-400 to-amber-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
            Join the Gemstone Revolution
          </h2>
        </MaskReveal>

        <MaskReveal direction="up" delay={0.35} className="mx-auto mb-12 max-w-2xl text-xl text-muted">
          Lock in 20% presale discount. Join thousands of investors securing their future with certified precious gemstones on blockchain.
        </MaskReveal>

        <div className="mb-16 flex flex-col justify-center gap-6 sm:flex-row">
          <button className="rounded-lg bg-amber-400 px-10 py-5 text-lg font-bold text-black shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-amber-500 hover:shadow-2xl">
            Join Presale - 20% OFF
          </button>
          <button className="rounded-lg border-2 border-amber-400 px-10 py-5 text-lg font-bold text-amber-400 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-amber-400 hover:text-black">
            Whitepaper (Coming Soon)
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-gray-800 pt-8 md:grid-cols-3">
          <MaskReveal direction="left" delay={0.5}><div><div className="mb-2 text-3xl font-bold text-amber-400">ESTD 2024</div><p className="text-muted">Year Founded</p></div></MaskReveal>
          <MaskReveal direction="up" delay={0.6}><div><div className="mb-2 text-3xl font-bold text-amber-400">500+</div><p className="text-muted">Gems Tokenized</p></div></MaskReveal>
          <MaskReveal direction="right" delay={0.7}><div><div className="mb-2 text-3xl font-bold text-amber-400">Secure</div><p className="text-muted">Insured Vaults</p></div></MaskReveal>
        </div>
      </div>

      <div className="absolute bottom-0 w-full border-t border-gray-800 bg-gradient-to-r from-transparent via-black/50 to-transparent px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 grid grid-cols-1 gap-6 text-sm text-muted md:grid-cols-3">
            <div><p className="mb-2 font-semibold text-amber-400">Contact</p><p>Email: info@gemtokens.io</p><p>Phone: +1 (555) 123-4567</p></div>
            <div><p className="mb-2 font-semibold text-amber-400">Address</p><p>123 Blockchain Avenue</p><p>Crypto City, CC 10001</p></div>
            <div><p className="mb-2 font-semibold text-amber-400">Company</p><p>Gem Tokens Global Inc.</p><p>Founded: 2024</p></div>
          </div>
          <div className="flex flex-col items-center justify-between border-t border-gray-800 pt-6 text-xs text-muted md:flex-row">
            <p>© 2024 Gem Tokens Global. All rights reserved.</p>
            <div className="mt-4 flex gap-6 md:mt-0">
              <a href="#" className="transition-colors hover:text-amber-400">Terms</a>
              <a href="#" className="transition-colors hover:text-amber-400">Privacy</a>
              <a href="#" className="transition-colors hover:text-amber-400">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
