"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

interface Testimonial {
  name: string;
  testimonial: string;
  position: string;
  rating: number;
}

export const Section4 = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Carlos Méndez",
      testimonial:
        "Arle transformó nuestra idea en realidad. Cumplieron con los plazos establecidos y el presupuesto acordado. La calidad de los acabados superó nuestras expectativas. Sin duda, los recomendaría para cualquier proyecto residencial.",
      position: "Propietario de vivienda",
      rating: 5,
    },
    {
      name: "Laura Gutiérrez",
      testimonial:
        "Contratamos a Arle para la remodelación de nuestras oficinas corporativas. Su equipo fue extremadamente profesional, minimizando las interrupciones en nuestras operaciones diarias. El resultado final es un espacio moderno y funcional que ha impresionado a clientes y empleados.",
      position: "Directora Administrativa",
      rating: 5,
    },
    {
      name: "Miguel Ángel Rodríguez",
      testimonial:
        "Como arquitecto, valoro enormemente la precisión y atención al detalle. El equipo de Arle ejecutó nuestros planos con exactitud milimétrica. Su capacidad para resolver problemas en obra y comunicación constante hicieron que el proceso fuera fluido de principio a fin.",
      position: "Arquitecto",
      rating: 5,
    },
    {
      name: "Elena Vázquez",
      testimonial:
        "Después de una mala experiencia con otra constructora, Arle rescató nuestro proyecto comercial. Su transparencia en costos y gestión eficiente nos dio la tranquilidad que necesitábamos. El local quedó exactamente como lo habíamos soñado.",
      position: "Dueña de restaurante",
      rating: 5,
    },
    {
      name: "Javier Morales",
      testimonial:
        "La ampliación de nuestra planta industrial requería un socio confiable que entendiera nuestras necesidades específicas. Arle no solo cumplió con todos los requisitos técnicos, sino que también implementó soluciones innovadoras que mejoraron la eficiencia operativa.",
      position: "Gerente de Operaciones",
      rating: 5,
    },
    {
      name: "Patricia Sánchez",
      testimonial:
        "Cuando decidimos construir nuestra casa, queríamos un equipo que nos acompañara en cada decisión. Arle nos brindó asesoramiento experto y nos mantuvo informados durante todo el proceso. El resultado es un hogar que refleja perfectamente nuestra visión y estilo de vida.",
      position: "Cliente residencial",
      rating: 5,
    },
    {
      name: "Roberto Fernández",
      testimonial:
        "Como desarrollador inmobiliario, he trabajado con muchas constructoras, pero Arle destaca por su compromiso con la calidad y cumplimiento. Han sido nuestros aliados en tres proyectos consecutivos, entregando siempre resultados excepcionales que nos ayudan a mantener nuestra reputación en el mercado.",
      position: "Desarrollador Inmobiliario",
      rating: 5,
    },
  ];

  return (
    <section className="w-full h-fit items-start justify-start flex flex-col py-20 md:py-24 lg:py-28 gap-y-10 lg:gap-y-14 border-t">
      <div className="px-5 md:px-7 lg:px-14 xl:px-36 2xl:px-52 flex flex-col w-full gap-y-7 lg:gap-y-10">
        <div className="w-full max-w-2xl items-starts justify-start flex flex-col gap-y-1.5">
          <h2 className="text-3xl md:text-3xl xl:text-4xl font-semibold text-foreground tracking-tight">
            <span className="text-primary">##</span> Lo que nuestros clientes
            dicen
          </h2>
          <p className="text-sm lg:text-base text-muted-foreground">
            La satisfacción de nuestros clientes es nuestra mejor carta de
            presentación. Conoce de primera mano cómo ha sido su experiencia
            trabajando con nosotros en distintos proyectos de construcción y
            remodelación.
          </p>
        </div>
        <div className="w-full h-fit items-center justify-start flex gap-2">
          <Button variant={"default"} asChild>
            <Link href={"/contact"}>
              Contáctanos <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <Carousel
        plugins={[
          AutoScroll({
            stopOnFocusIn: false,
            stopOnMouseEnter: false,
            startDelay: 1000,
            playOnInit: true,
            stopOnInteraction: false,
            speed: 1,
          }),
        ]}
        opts={{ loop: true }}
        className="w-full"
      >
        <CarouselContent className="w-full">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
            >
              <div className="w-full h-full flex">
                <div className="w-full flex-1 items-start justify-between flex flex-col gap-y-3 lg:gap-y-4 bg-muted p-5 border">
                  <div className="w-full h-fit items-start justify-start flex flex-col gap-y-3">
                    <div className="w-full h-fit items-center justify-start flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <Star
                          key={index}
                          className="text-primary size-4 fill-primary"
                        />
                      ))}
                    </div>
                    <h3 className="text-base text-muted-foreground cursor-default italic after:content-['“'] before:content-['”']">
                      {testimonial.testimonial}
                    </h3>
                  </div>
                  <div className="w-full flex items-center justify-start text-sm cursor-default">
                    <p className="text-muted-foreground">
                      -{" "}
                      <span className="text-foreground">
                        {testimonial.name}
                      </span>{" "}
                      |{" "}
                      <span className="text-muted-foreground">
                        {testimonial.position}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
