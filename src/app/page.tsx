import { Header } from "@/src/components/Header";
import { Hero } from "@/src/components/sections/Hero";
import { Features } from "@/src/components/sections/Features";
import { AvailableGemLots } from "@/src/components/sections/AvailableGemLots";
import { Pricing } from "@/src/components/sections/Pricing";
import { Performance } from "@/src/components/sections/Performance";
import { WhyInvestInGems } from "@/src/components/sections/WhyInvestInGems";
import { HowRedemptionWorks } from "@/src/components/sections/HowRedemptionWorks";
import { CTA } from "@/src/components/sections/CTA";
import { Footer } from "@/src/components/sections/Footer";
import { StackingSection } from "@/src/components/StackingSection";

const sections = [
  { component: Hero, bg: "bg-background" },
  { component: Features, bg: "bg-gradient-to-b from-background to-[#1a1a1a]" },
  { component: AvailableGemLots, bg: "bg-gradient-to-b from-[#1a1a1a] to-background" },
  { component: Pricing, bg: "bg-background" },
  { component: Performance, bg: "bg-gradient-to-b from-background to-[#0f0f0f]" },
  { component: WhyInvestInGems, bg: "bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]" },
  { component: HowRedemptionWorks, bg: "bg-gradient-to-b from-[#0a0a0a] to-[#080808]" },
  { component: CTA, bg: "bg-gradient-to-b from-[#080808] to-[#040404]" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />
      <div className="relative">
        {sections.map((section, index) => {
          const Component = section.component;
          return (
            <StackingSection
              key={index}
              index={index}
              totalSections={sections.length}
              backgroundColor={section.bg}
            >
              <Component />
            </StackingSection>
          );
        })}
      </div>
      <Footer />
    </main>
  );
}
