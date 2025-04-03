import { BlurFade } from "@/components/magicui/blur-fade";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceProps {
  title: string;
  href: string;
  image: string;
}

export const Section2 = () => {
  const services: ServiceProps[] = [
    {
      title: "Construcción",
      href: "/construction",
      image: "/construction.png",
    },
    {
      title: "Diseño arquitectónico",
      href: "/architecture",
      image: "/architecture.png",
    },
    {
      title: "Instalaciones",
      href: "/installations",
      image: "/installations.png",
    },
    {
      title: "Ingeniería",
      href: "/engineering",
      image: "/engineering.png",
    },
    {
      title: "Proyectos ejecutivos",
      href: "/executive-projects",
      image: "/executive-projects.png",
    },
    {
      title: "Interiorismo",
      href: "/interiorism",
      image: "/interiorism.png",
    },
  ];

  return (
    <section
      id="services"
      className="w-full h-fit scroll-mt-14 items-start justify-start flex flex-col px-5 md:px-7 lg:px-14 xl:px-36 2xl:pl-56 py-20 md:py-24 lg:py-28 gap-y-10 lg:gap-y-14"
    >
      <div className="w-full h-fit items-start justify-start flex flex-col">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full flex flex-col gap-y-10 lg:gap-y-14"
        >
          <div className="w-full flex items-end justify-between">
            <div className="w-full max-w-2xl items-starts justify-start flex flex-col gap-y-1.5">
              <BlurFade inView delay={0}>
                <h2 className="text-3xl md:text-3xl xl:text-4xl font-semibold text-foreground">
                  <span className="text-primary">##</span> Conoce nuestros
                  servicios
                </h2>
              </BlurFade>
              <BlurFade inView delay={0.1}>
                <p className="text-sm lg:text-base text-muted-foreground">
                  Ofrecemos soluciones integrales en construcción, desde obra
                  civil y remodelaciones hasta gestión de proyectos llave en
                  mano. Nuestro enfoque combina eficiencia, seguridad y calidad
                  para llevar a cabo obras que superan expectativas.
                </p>
              </BlurFade>
            </div>
            <div className="h-fit items-center justify-center gap-1 hidden lg:flex">
              <CarouselPrevious
                variant={"default"}
                className="static -translate-y-0 bg-foreground hover:bg-foreground"
              />
              <CarouselNext
                variant={"default"}
                className="static -translate-y-0 bg-foreground hover:bg-foreground"
              />
            </div>
          </div>
          <CarouselContent className="w-full -ml-0">
            {services.map((service) => (
              <CarouselItem
                className="pl-0 aspect-square lg:aspect-[16/12] basis-full md:basis-1/2 lg:basis-1/3 flex h-full group"
                key={service.title}
              >
                <BlurFade className="w-full h-full" inView delay={0.3 * services.indexOf(service)}>
                  <div className="w-full h-full px-1">
                    <div className="w-full h-full relative">
                      <Link
                        className="absolute inset-0 overflow-hidden"
                        href={service.href}
                      >
                        <div className="absolute inset-0 z-[1] group-hover:scale-105 ease-in-out duration-300">
                          <Image
                            quality={100}
                            className="object-cover"
                            src={service.image}
                            alt={service.title}
                            fill
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent z-[2]"></div>
                        </div>
                        <div className="w-full h-full relative z-[2] flex items-start justify-end flex-col p-5 text-white">
                          <div className="w-full flex items-center justify-between">
                            <p className="text-xl font-semibold tracking-normal group-hover:underline ease-in-out duration-300 underline-offset-4">
                              {service.title}
                            </p>
                            <ArrowRight className="size-4" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </BlurFade>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="w-full h-fit items-center justify-center flex gap-1 lg:hidden">
            <CarouselPrevious
              variant={"default"}
              className="static -translate-y-0 bg-foreground hover:bg-foreground"
            />
            <CarouselNext
              variant={"default"}
              className="static -translate-y-0 bg-foreground hover:bg-foreground"
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
