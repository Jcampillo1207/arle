import { HeroContact } from "./_components/hero-contact";
import { Section2Contact } from "./_components/section2-contact";

const ContactPage = () => {
  return (
    <main className="w-full h-fit items-start justify-start flex flex-col">
      <HeroContact />
      <Section2Contact />
    </main>
  );
};

export default ContactPage;
