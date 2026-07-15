"use client";

import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-3 py-4 sm:px-4 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-transparent px-3 py-2 shadow-[0_0_30px_rgba(251,191,36,0.08)] backdrop-blur-md sm:px-5 sm:py-2.5 lg:px-8">
        <div className="flex min-w-0 items-center">
          <div className="relative flex h-10 w-26 items-center justify-center overflow-visible sm:h-20 sm:w-20 lg:h-25 lg:w-80">
            <Image
              src="/Main%20_logo_01.png"
              alt="Gemreserve.io logo"
              width={184}
              height={184}
              className="h-full w-full object-contain"
              priority
            />
          </div>
        </div>

        <button className="shrink-0 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-amber-200 transition duration-200 hover:-translate-y-0.5 hover:bg-amber-400 hover:text-black sm:px-5 sm:py-2.5 sm:text-[0.7rem] sm:tracking-[0.24em]">
          Reserve
        </button>
      </div>
    </header>
  );
}
