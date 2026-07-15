"use client";

import React from "react";

interface StackingSectionProps {
  children: React.ReactNode;
  index: number;
  totalSections: number;
  backgroundColor?: string;
}

export function StackingSection({
  children,
  index,
  backgroundColor = "bg-background",
}: StackingSectionProps) {
  return (
    <section
      data-section-index={index}
      className={`relative flex min-h-screen w-full items-center justify-center overflow-hidden ${backgroundColor}`}
      style={{
        zIndex: 10 + index,
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
      }}
    >
      <div className="flex w-full items-center justify-center">{children}</div>
    </section>
  );
}
