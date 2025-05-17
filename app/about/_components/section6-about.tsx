import { BlurFade } from "@/components/magicui/blur-fade";
import { MexicoMap } from "@/components/mexico-map";
import WhatsApp from "@/components/svgs/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export const Section6About = () => {
  return (
    <section className="w-full h-fit grid grid-cols-1 md:grid-cols-[1.5fr_1fr] lg:grid-cols-2 px-0 md:px-7 lg:px-14 xl:px-36 2xl:px-56 py-20 pb-0 md:py-24 lg:py-28 gap-10 lg:gap-14 bg-muted border-t relative overflow-hidden">
      <div className="w-full flex-1 items-start justify-center flex flex-col gap-y-10 lg:gap-y-14 z-10 px-5 md:px-0">
        <div className="w-full items-start justify-start flex flex-col gap-y-1.5">
          <BlurFade inView delay={0}>
            <h2 className="text-3xl md:text-3xl xl:text-4xl font-semibold text-foreground tracking-tight">
              <span className="text-primary">##</span> Presencia en todo México
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.1}>
            <p className="text-sm lg:text-base text-muted-foreground">
              Construimos donde nos necesites. Nuestro equipo está listo para
              ejecutar proyectos en cualquier estado de la República Mexicana,
              adaptándonos a las condiciones locales y asegurando resultados de
              alto nivel en cada obra.
            </p>
          </BlurFade>
          <BlurFade inView delay={0.2}>
            <span className="w-full h-fit items-start justify-start flex gap-2 mt-3">
              <Link
                href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
                <Badge
                  variant={"outline"}
                  className="pl-1.5 gap-x-1.5 bg-background font-normal text-muted-foreground cursor-pointer"
                >
                  <Phone className="size-3.5 text-primary" /> Teléfono
                </Badge>
              </Link>
              <Link
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                passHref
              >
                <Badge
                  variant={"outline"}
                  className="pl-1.5 gap-x-1.5 bg-background font-normal text-muted-foreground cursor-pointer"
                >
                  <WhatsApp className="size-3.5 text-primary" /> Whatsapp
                </Badge>
              </Link>
            </span>
          </BlurFade>
        </div>
        <div className="w-full h-fit items-center justify-start flex gap-2">
          <BlurFade inView delay={0.3}>
            <Button variant={"default"} asChild>
              <Link href={"/contact"}>
                Contáctanos <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </BlurFade>
          <BlurFade inView delay={0.4}>
            <Button variant={"ghost"} asChild className="hover:bg-background">
              <Link href={"/services"}>Nuestros servicios</Link>
            </Button>
          </BlurFade>
        </div>
      </div>
      <div className="flex relative md:absolute md:inset-0 md:-right-2/3 z-0 aspect-square md:aspect-auto">
        <MexicoMap />
      </div>
    </section>
  );
};
