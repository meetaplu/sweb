"use client";

import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-white/5">
            <Image
              src="/main_loh.png.png"
              alt="main_loh.png.png"
              fill
              className="object-contain"
            />
          </div>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.3em] text-amber-200 sm:inline">
            GemReserve
          </span>
        </div>
        <button className="rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-black transition duration-200 hover:bg-amber-500">
          Get Started
        </button>
      </div>
    </header>
  );
}
