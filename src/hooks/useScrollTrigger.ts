import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollTriggerConfig {
  trigger?: string | HTMLElement;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
}

export function useScrollTrigger(config: ScrollTriggerConfig = {}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const trigger = config.trigger || elementRef.current;

    ScrollTrigger.create({
      trigger,
      start: config.start || "top 80%",
      end: config.end,
      scrub: config.scrub,
      markers: config.markers || false,
      onEnter: config.onEnter,
      onLeave: config.onLeave,
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [config]);

  return elementRef;
}
