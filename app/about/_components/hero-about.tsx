import { Button } from "@/components/ui/button";
import { Video } from "@/components/video-optimized";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HeroAbout = () => {
  return (
    <section className="w-full min-h-[70dvh] items-center justify-center flex flex-col gap-7 lg:gap-10 xl:gap-14 py-24 lg:py-28 xl:py-36 2xl:py-48 px-5 md:px-7 lg:px-14 xl:px-36 2xl:px-56 relative">
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <Video
          poster="/about-poster.png"
          src="/arle-construccion.mp4"
          autoPlay
          loop
          muted
          controls={false}
        />
        <span className="absolute inset-0 bg-foreground/65" />
      </div>
      <div className="w-full h-fit items-center justify-center flex flex-col max-w-4xl mx-auto gap-y-10 lg:gap-y-14 z-[2]">
        <div className="w-full h-fit items-center justify-center flex flex-col gap-y-1.5 lg:gap-y-3 drop-shadow-md">
          <h1 className="text-5xl lg:text-5xl 2xl:text-6xl font-semibold text-background tracking-tight text-center">
            Construir es nuestra herencia, transformar es nuestro propósito
          </h1>
          <p className="text-base lg:text-lg text-background/80 font-medium text-center">
            En ARLE, la construcción va más allá del concreto: es compromiso,
            innovación y una visión compartida. Creamos espacios que conectan
            con la comunidad y superan expectativas.
          </p>
        </div>
        <div className="w-full h-fit items-center justify-center flex gap-2">
          <Button variant={"default"} asChild>
            <Link href={"/services"}>
              Nuestros servicios <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant={"ghost"} asChild className="text-background">
            <Link href={"/contact"}>Contáctanos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
