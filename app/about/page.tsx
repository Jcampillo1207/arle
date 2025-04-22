import HeroAbout from "./_components/hero-about";
import { Section2About } from "./_components/section2-about";
import { Section3About } from "./_components/section3-about";

const AboutPage = () => {
  return (
    <main className="w-full h-fit items-start justify-start flex flex-col">
      <HeroAbout />
      <Section2About />
      <Section3About />
    </main>
  );
};

export default AboutPage;
