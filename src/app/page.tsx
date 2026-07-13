import { Hero } from "@/src/components/sections/Hero";
import { Features } from "@/src/components/sections/Features";
import { TechStack } from "@/src/components/sections/TechStack";
import { Performance } from "@/src/components/sections/Performance";
import { CTA } from "@/src/components/sections/CTA";
import { StackingSection } from "@/src/components/StackingSection";

const sections = [
  { component: Hero, bg: "bg-background" },
  { component: Features, bg: "bg-gradient-to-b from-background to-[#1a1a1a]" },
  { component: TechStack, bg: "bg-gradient-to-b from-[#1a1a1a] to-background" },
  { component: Performance, bg: "bg-background" },
  { component: CTA, bg: "bg-gradient-to-b from-background to-[#0a0a0a]" },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
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
    </main>
  );
}
