import { HeroSection } from "./_components/hero-section";
import { Section10 } from "./_components/section10";
import { Section2 } from "./_components/section2";
import { Section3 } from "./_components/section3";
import { Section4 } from "./_components/section4";
import { Section5 } from "./_components/section5";
import { Section6 } from "./_components/section6";
import { Section8 } from "./_components/section8";
import { Section9 } from "./_components/section9";

export default function Home() {
  return (
    <main className="w-full h-fit items-start justify-start flex flex-col">
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      {/* <Section7 /> */}
      <Section8 />
      <Section9 />
      <Section10 />
    </main>
  );
}
