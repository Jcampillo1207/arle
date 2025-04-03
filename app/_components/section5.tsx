import { MexicoMap } from "@/components/mexico-map";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, MapPinHouse } from "lucide-react";
import Link from "next/link";

export const Section5 = () => {
  return (
    <section className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 px-5 md:px-7 lg:px-14 xl:px-36 2xl:px-52 py-20 md:py-24 lg:py-28 gap-10 lg:gap-14 bg-muted border-t">
      <div className="w-full flex-1 items-start justify-center flex flex-col gap-y-10 lg:gap-y-14">
        <div className="w-full items-starts justify-start flex flex-col gap-y-1.5">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-foreground tracking-tight">
            <span className="text-primary">##</span> Cobertura nacional de todos
            nuestros servicios
          </h2>
          <p className="text-sm lg:text-base text-muted-foreground">
            Operamos en todo el país, ofreciendo nuestros servicios con la misma
            calidad y compromiso sin importar la ubicación. Desde proyectos
            locales hasta desarrollos a gran escala, contamos con la
            infraestructura y el equipo para llevar soluciones profesionales a
            cualquier parte de México.
          </p>
          <span className="w-full h-fit items-start justify-start flex gap-2 mt-3">
            <p className="text-sm lg:text-base text-muted-foreground">
              Oficina:
            </p>
            <Badge
              variant={"outline"}
              className="pl-1.5 gap-x-1.5 bg-background font-normal text-muted-foreground"
            >
              <MapPinHouse className="size-3.5 text-primary" /> Torreón,
              Coahuila.
            </Badge>
          </span>
        </div>
        <div className="w-full h-fit items-center justify-start flex gap-2">
          <Button variant={"default"} asChild>
            <Link href={"/contact"}>
              Contáctanos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant={"ghost"} asChild className="hover:bg-background">
            <Link href={"/#services"}>Nuestros servicios</Link>
          </Button>
        </div>
      </div>
      <div className="flex-1 flex bg-background border aspect-square relative overflow-hidden bg-blue-50">
        <MexicoMap />
      </div>
    </section>
  );
};
