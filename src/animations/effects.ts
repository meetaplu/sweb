import gsap from "gsap";

export const staggerText = (element: HTMLElement, duration = 0.8) => {
  const words = element.querySelectorAll(".word");
  
  gsap.from(words, {
    opacity: 0,
    y: 20,
    duration,
    stagger: 0.05,
    ease: "power2.out",
  });
};

export const fadeInUp = (
  element: HTMLElement | null,
  delay = 0,
  duration = 0.8
) => {
  if (!element) return;

  gsap.from(element, {
    opacity: 0,
    y: 30,
    duration,
    delay,
    ease: "power2.out",
  });
};

export const parallax = (element: HTMLElement, speed = 0.5) => {
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    element.style.transform = `translateY(${scrollY * speed}px)`;
  });
};

export const pulse = (element: HTMLElement, duration = 2) => {
  gsap.to(element, {
    opacity: 0.5,
    duration: duration / 2,
    repeat: -1,
    yoyo: true,
  });
};

export const shimmer = (element: HTMLElement) => {
  gsap.to(element, {
    backgroundPosition: "200% center",
    duration: 2,
    repeat: -1,
    ease: "none",
  });
};
