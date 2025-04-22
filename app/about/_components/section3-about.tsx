import { BlurFade } from "@/components/magicui/blur-fade";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const contentSections = [
  {
    id: 1,
    title: "El origen de una pasión constructiva",
    content:
      "ARLE Construcciones nace en 2017 gracias a la visión del Ing. Antonio Ramírez de León, quien desde joven sintió una profunda conexión con el mundo de la construcción. Inspirado por una tradición familiar de dos generaciones en el sector, decide fundar una empresa que combine técnica, estética y funcionalidad en cada proyecto.",
    image: "/executive-projects.png",
  },
  {
    id: 2,
    title: "Construir con propósito",
    content:
      "Desde su inicio, ARLE se ha enfocado en diseñar y ejecutar obras que reflejan las necesidades reales de sus clientes. Nuestra filosofía se basa en construir con propósito: cada espacio debe tener sentido, mejorar la vida de quienes lo habitan y responder a estándares de calidad, funcionalidad y diseño.",
    image: "/executive-projects.png",
  },
  {
    id: 3,
    title: "Consolidación y profesionalismo",
    content:
      "A lo largo de los años, hemos consolidado nuestra presencia en los sectores residencial, comercial e industrial. Nuestro equipo está conformado por profesionales altamente capacitados que comparten una misma visión: trabajar con responsabilidad, ética y un alto nivel de especialización técnica en cada obra.",
    image: "/executive-projects.png",
  },
  {
    id: 4,
    title: "Innovación, sostenibilidad y futuro",
    content:
      "Hoy, ARLE se distingue por integrar innovación y sostenibilidad en cada proyecto. Aplicamos metodologías modernas, utilizamos materiales ecoeficientes y promovemos soluciones tecnológicas que minimizan el impacto ambiental. Nuestro compromiso es construir un futuro mejor para nuestras comunidades y el entorno.",
    image: "/executive-projects.png",
  },
];

export const Section3About = () => {
  return (
    <section className="w-full h-fit flex flex-col px-5 md:px-7 lg:px-14 xl:px-36 2xl:px-56 py-20 md:py-24 lg:py-28 gap-10 lg:gap-14 border-t bg-muted">
      <div className="w-full flex-1 items-start justify-center flex flex-col gap-y-10 lg:gap-y-14 max-w-3xl">
        <div className="w-full items-start justify-start flex flex-col gap-y-1.5">
          <BlurFade inView delay={0}>
            <h2 className="text-3xl md:text-3xl xl:text-4xl font-semibold text-foreground tracking-tight">
              <span className="text-primary">##</span> Nuestra historia, construida
              con visión y propósito
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.1}>
            <p className="text-sm lg:text-base text-muted-foreground">
              Desde nuestros inicios, la pasión por construir con calidad, ética
              y responsabilidad ha guiado cada paso. Esta es la historia de cómo
              ARLE se ha convertido en una empresa referente en el sector.
            </p>
          </BlurFade>
        </div>
      </div>
      <Carousel>
        <CarouselContent className="ml-0">
          {contentSections.map((section) => (
            <CarouselItem
              key={section.id}
              className="pl-0 bg-background border"
            >
              <div className="w-full flex flex-col gap-y-5 lg:gap-y-7 p-3 lg:p-7">
                <BlurFade inView delay={0}>
                  <div className="flex-1 aspect-[16/6] relative">
                    <Image
                      src={section.image}
                      alt="Historia ARLE"
                      fill
                      className="object-cover"
                    />
                  </div>
                </BlurFade>
                <div className="w-full flex-1 items-start justify-center grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5">
                  <div className="w-full items-start justify-start flex flex-col gap-y-1.5">
                    <BlurFade inView delay={0.1}>
                      <h2 className="text-3xl md:text-3xl xl:text-4xl font-semibold text-foreground tracking-tight">
                        {section.title}
                      </h2>
                    </BlurFade>
                  </div>
                  <div className="w-full h-fit items-center justify-start flex gap-2">
                    <BlurFade inView delay={0.2}>
                      <p className="text-sm lg:text-base text-muted-foreground">
                        {section.content}
                      </p>
                    </BlurFade>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="w-full h-fit items-center justify-center lg:justify-end flex gap-2 mt-7 lg:mt-0">
          <CarouselPrevious
            variant={"default"}
            className="lg:-left-12 lg:top-1/2 lg:-translate-y-1/2 static lg:absolute"
          />
          <CarouselNext
            variant={"default"}
            className="lg:-right-12 lg:top-1/2 lg:-translate-y-1/2 static lg:absolute"
          />
        </div>
      </Carousel>
    </section>
  );
};
