import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";

export const Section2About = () => {
  return (
    <section className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 px-5 md:px-7 lg:px-14 xl:px-36 2xl:px-56 py-20 md:py-24 lg:py-28 gap-10 lg:gap-14 bg-background">
      <div className="w-full flex-1 items-start justify-center flex flex-col gap-y-10 lg:gap-y-14">
        <div className="w-full items-starts justify-start flex flex-col gap-y-1.5">
          <BlurFade inView delay={0}>
            <h2 className="text-3xl md:text-3xl xl:text-4xl font-semibold text-foreground tracking-tight">
              <span className="text-primary">##</span> Compromiso con la
              calidad, la innovación y el entorno
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.1}>
            <p className="text-sm lg:text-base text-muted-foreground">
              Somos una empresa constructora comprometida con transformar el
              entorno urbano mediante proyectos innovadores, sostenibles y de
              alta calidad. Nos guiamos por la excelencia, la eficiencia y la
              ética, trabajando en equipo para superar las expectativas de
              nuestros clientes y generar un impacto positivo en la comunidad.
            </p>
          </BlurFade>
        </div>
      </div>
      <BlurFade inView delay={0.2}>
        <div className="flex-1 aspect-[4/3] relative w-full">
          <Image
            src="/executive-projects.png"
            alt="About"
            fill
            className="object-cover"
          />
        </div>
      </BlurFade>
    </section>
  );
};
