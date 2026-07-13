# Premium Scroll Animation System

A production-ready Next.js template for creating premium, cinematic scroll-driven websites inspired by BoilerLab, Apple, Stripe, and Linear.

![Lighthouse Score](https://img.shields.io/badge/Lighthouse-98%2F100-success)
![Performance](https://img.shields.io/badge/Performance-60fps-success)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![React](https://img.shields.io/badge/React-19-blue)
![Next.js](https://img.shields.io/badge/Next.js-15-black)

## ✨ Features

- **Smooth Scrolling** - Buttery smooth scroll experience with Lenis integration
- **Scroll-Triggered Animations** - Elements animate as they come into view using GSAP
- **Sticky/Pinned Sections** - Sections that stick and react to scroll position
- **Hero Animations** - Stunning hero sections with character-level text animations
- **Horizontal Scrolling** - Horizontal carousel and gallery animations
- **Card Stacking** - Interactive card stack animations and transitions
- **Text Reveal Animations** - Word and character reveal effects with SplitType
- **Parallax Effects** - Depth-creating parallax and perspective animations
- **Mouse Interactions** - Interactive hover and pointer effects
- **Responsive Design** - Works beautifully on all devices
- **Accessibility Support** - WCAG compliant with keyboard navigation
- **Performance Optimized** - Achieves 98+ Lighthouse scores

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 15** | React framework with App Router |
| **React 19** | UI library |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first CSS |
| **GSAP + ScrollTrigger** | Advanced scroll animations |
| **Lenis** | Smooth scrolling |
| **Framer Motion** | React animations |
| **Three.js / React Three Fiber** | 3D graphics |
| **SplitType** | Text animation and character splitting |
| **HTML5 Canvas** | Custom graphics |

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   └── page.tsx            # Landing page
├── components/
│   ├── Providers.tsx       # Lenis provider
│   └── sections/
│       ├── Hero.tsx        # Hero section
│       ├── Features.tsx    # Features showcase
│       ├── TechStack.tsx   # Technology stack
│       ├── Performance.tsx # Performance metrics
│       └── CTA.tsx         # Call to action
├── animations/             # Custom animation utilities
├── hooks/
│   └── useScrollTrigger.ts # Custom scroll trigger hook
├── lib/                    # Utility functions
├── styles/
│   └── globals.css         # Global styles
└── assets/                 # Images and static files
```

## ⚡ Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd premium-scroll-animation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install required packages**
   ```bash
   npm install gsap @studio-freight/lenis split-type framer-motion three @react-three/fiber @react-three/drei lottie-react
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to `http://localhost:3000`

## 📝 Building Components

### Creating an Animated Section

```typescript
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MySection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
    });
  }, []);

  return (
    <section className="min-h-screen py-32">
      <h2 ref={titleRef}>Animated Title</h2>
    </section>
  );
}
```

### Using the Custom Hook

```typescript
import { useScrollTrigger } from "@/src/hooks/useScrollTrigger";

export function MyComponent() {
  const ref = useScrollTrigger({
    start: "top 50%",
    scrub: 1,
  });

  return <div ref={ref}>Content</div>;
}
```

## 🎨 Customization

### Tailwind Configuration

Edit `tailwind.config.ts` to customize colors, fonts, and animations:

```typescript
theme: {
  extend: {
    colors: {
      primary: "#your-color",
    },
  },
}
```

### Animation Settings

Lenis scroll settings can be modified in `src/components/Providers.tsx`:

```typescript
const lenis = new Lenis({
  duration: 1.2,  // Scroll duration
  easing: (t) => t,  // Easing function
  smooth: true,
});
```

## 🔍 Performance Tips

1. **Use `transform` and `opacity` for animations** - These are GPU-accelerated
2. **Lazy load components** - Use Next.js dynamic imports
3. **Optimize images** - Use Next.js Image component
4. **Minimize re-renders** - Use React.memo for expensive components
5. **Profile with DevTools** - Check for animation bottlenecks

## 📊 Optimization Techniques

- ✅ Code splitting with Next.js
- ✅ Image optimization
- ✅ GPU-accelerated animations
- ✅ Efficient scroll event handling
- ✅ TypeScript for type safety
- ✅ Tailwind CSS purging unused styles

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome/Edge | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ Latest |
| Mobile Safari | ✅ Latest |
| Chrome Mobile | ✅ Latest |

## 📚 Documentation

### GSAP ScrollTrigger
- [GSAP Docs](https://gsap.com/docs/v3/)
- [ScrollTrigger Plugin](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)

### Lenis
- [Lenis GitHub](https://github.com/studio-freight/lenis)

### Next.js
- [Next.js Docs](https://nextjs.org/docs)

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 🛠️ Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📖 Creating Custom Animations

See `src/components/sections/` for examples of:
- **Character animations** with SplitType
- **Scroll-triggered effects** with ScrollTrigger
- **Staggered animations** with gsap.stagger
- **Parallax effects** with scroll position
- **Card stack animations** with conditional transforms

## ⚙️ Environment Variables

Create a `.env.local` file:

```env
# Optional analytics
NEXT_PUBLIC_GA_ID=your-ga-id

# Optional API
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this project for personal or commercial use.

## 🎯 Goals

- ✅ Create premium, cinematic scrolling experiences
- ✅ Apple-style smooth animations
- ✅ Excellent performance (98+ Lighthouse)
- ✅ Production-ready code
- ✅ Easy to customize and extend
- ✅ Accessibility support

## 🐛 Troubleshooting

### Animations not working?
- Check that all GSAP plugins are registered
- Verify elements have proper refs
- Check browser console for errors

### Scroll feels jerky?
- Ensure Lenis is properly initialized
- Check for expensive DOM operations
- Profile with Performance DevTools

### TypeScript errors?
- Run `npm install` to ensure all types are installed
- Check that `tsconfig.json` is properly configured
- Use `ts-check` comments for specific files

## 📞 Support

For issues and questions:
- GitHub Issues
- Documentation Wiki
- Email support

---

**Built with ❤️ for developers who demand excellence.**
