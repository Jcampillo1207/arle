import HeroAbout from "./_components/hero-about";
import { Section2About } from "./_components/section2-about";
import { Section3About } from "./_components/section3-about";
import { Section4About } from "./_components/section4-about";
import { Section5About } from "./_components/section5-about";

const AboutPage = () => {
  return (
    <main className="w-full h-fit items-start justify-start flex flex-col">
      <HeroAbout />
      <Section2About />
      <Section3About />
      <Section4About />
      <Section5About />
    </main>
  );
};

export default AboutPage;
