"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TextChoreography, MaskReveal } from "@/src/components/TextChoreography";
import { FloatingMotion } from "@/src/hooks/useParallax";

gsap.registerPlugin(ScrollTrigger);

export function CTA() {
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      // Staggered content reveal
      gsap.from(contentRef.current.querySelectorAll("*"), {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 50%",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
      });
    }

    // Heading zoom effect
    if (headingRef.current) {
      gsap.to(headingRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 60%",
          end: "top 20%",
          scrub: 1,
        },
        scale: 1.1,
        color: "#fbbf24",
      });
    }

    // Button hover magnetic effect
    if (buttonsRef.current) {
      const buttons = buttonsRef.current.querySelectorAll("button");
      buttons.forEach((button) => {
        button.addEventListener("mousemove", (e) => {
          const rect = button.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(button, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.3,
            overwrite: "auto",
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.3,
          });
        });
      });
    }
  }, []);

  return (
    <section className="min-h-screen py-32 px-6 bg-gradient-to-b from-background to-[#0a0a0a] relative overflow-hidden flex items-center justify-center">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-900/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-900/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-800/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div
        ref={contentRef}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <MaskReveal direction="up" delay={0.2}>
          <h2
            ref={headingRef}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-rose-400 to-amber-500 bg-clip-text text-transparent"
          >
            Join the Gemstone Revolution
          </h2>
        </MaskReveal>

        <MaskReveal direction="up" delay={0.4}>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-12">
            Lock in 20% presale discount. Join thousands of investors securing their future with certified precious gemstones on blockchain.
          </p>
        </MaskReveal>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <FloatingMotion duration={3}>
            <button className="px-10 py-5 bg-amber-400 text-black font-bold rounded-lg hover:bg-amber-500 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg hover:shadow-2xl will-change-transform">
              Join Presale - 20% OFF
            </button>
          </FloatingMotion>
          <FloatingMotion duration={3.5}>
            <button className="px-10 py-5 bg-transparent border-2 border-amber-400 text-amber-400 font-bold rounded-lg hover:bg-amber-400 hover:text-black transition-all duration-300 text-lg shadow-lg will-change-transform">
              Whitepaper (Coming Soon)
            </button>
          </FloatingMotion>
        </div>

        {/* Stat cards with staggered animation */}
        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
          <MaskReveal direction="left" delay={0.6}>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">ESTD 2024</div>
              <p className="text-muted">Year Founded</p>
            </div>
          </MaskReveal>
          <MaskReveal direction="up" delay={0.7}>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">500+</div>
              <p className="text-muted">Gems Tokenized</p>
            </div>
          </MaskReveal>
          <MaskReveal direction="right" delay={0.8}>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">Secure</div>
              <p className="text-muted">Insured Vaults</p>
            </div>
          </MaskReveal>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full py-8 px-6 border-t border-gray-800 bg-gradient-to-r from-transparent via-black/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-muted text-sm">
            <div>
              <p className="font-semibold text-amber-400 mb-2">Contact</p>
              <p>Email: info@gemtokens.io</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
            <div>
              <p className="font-semibold text-amber-400 mb-2">Address</p>
              <p>123 Blockchain Avenue</p>
              <p>Crypto City, CC 10001</p>
            </div>
            <div>
              <p className="font-semibold text-amber-400 mb-2">Company</p>
              <p>Gem Tokens Global Inc.</p>
              <p>Founded: 2024</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between text-muted text-xs border-t border-gray-800 pt-6">
            <p>&copy; 2024 Gem Tokens Global. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-amber-400 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
