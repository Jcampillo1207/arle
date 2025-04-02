import { HeroSection } from "./_components/hero-section";
import { Section2 } from "./_components/section2";
import { Section3 } from "./_components/section3";

export default function Home() {
  return (
    <main className="w-full h-fit items-start justify-start flex flex-col">
      <HeroSection />
      <Section2 />
      <Section3 />
    </main>
  );
}
