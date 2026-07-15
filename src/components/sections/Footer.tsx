"use client";

import React from "react";
import Image from "next/image";

const companyDetails = [
  { label: "Company", value: "Gemreserve.io" },
  { label: "Registered", value: "Luxembourg" },
  { label: "Contact", value: "hello@gemreserve.io" },
  { label: "Phone", value: "+352 123 456 789" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[radial-gradient(circle_at_bottom,_rgba(251,191,36,0.16),_transparent_42%),_linear-gradient(180deg,_#040404_0%,_#0b0b0b_100%)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div className="flex flex-col items-center gap-5 lg:items-start lg:max-w-lg">
          <div className="flex items-center justify-center lg:justify-start">
            <div className="relative h-28 w-56 overflow-hidden sm:h-32 sm:w-64 lg:h-32 lg:w-56">
              <Image
                src="/Main%20_logo_01.png"
                alt="Gemreserve.io logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            Premium gemstone ownership, verified provenance, and secure redemption for global investors.
          </p>
        </div>

        <div className="grid w-full max-w-xl gap-4 sm:grid-cols-2 lg:min-w-[28rem] lg:max-w-none">
          {companyDetails.map((detail) => (
            <div key={detail.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_24px_rgba(0,0,0,0.18)] backdrop-blur-md">
              <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-amber-300/80">
                {detail.label}
              </p>
              <p className="text-base text-white">{detail.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Gemreserve.io. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
          <a href="#" className="transition-colors hover:text-amber-300">Privacy</a>
          <a href="#" className="transition-colors hover:text-amber-300">Terms</a>
          <a href="#" className="transition-colors hover:text-amber-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}
