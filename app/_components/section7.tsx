import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers3Icon, Table } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Section7 = () => {
  return (
    <section className="w-full h-fit items-start justify-start flex flex-col px-5 md:px-7 lg:px-14 xl:px-36 2xl:pl-56 py-20 md:py-24 lg:py-28 gap-y-10 lg:gap-y-14">
      <div className="w-full gap-y-7 lg:gap-y-10 flex flex-col items-start justify-start">
        <div className="w-full max-w-2xl items-start justify-start flex flex-col gap-y-1.5">
          <BlurFade inView delay={0}>
            <h2 className="text-3xl md:text-3xl xl:text-4xl font-semibold text-foreground tracking-tight">
              <span className="text-primary">##</span> Proyectos que reflejan
              calidad
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.1}>
            <p className="text-sm lg:text-base text-muted-foreground">
              Cada obra que realizamos habla por sí sola. Nos enorgullece
              entregar proyectos residenciales, comerciales e industriales que
              combinan diseño, funcionalidad y acabados impecables. Nuestra
              pasión por la construcción se ve reflejada en cada detalle.
            </p>
          </BlurFade>
        </div>
        <div className="w-full h-fit items-center justify-start flex gap-2">
          <BlurFade inView delay={0.2}>
            <Button variant={"default"} asChild>
              <Link href={"/portfolio"}>
                Nuestros proyectos <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </BlurFade>
        </div>
      </div>
      <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 gap-4">
        <BlurFade inView delay={0.3}>
          <Link
            href={"/project"}
            className="w-full flex-1 grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-4 hover:bg-muted/50 border border-transparent hover:border-border ease-in-out transition-all duration-300"
          >
            <div className="flex flex-col gap-y-4 items-start justify-between flex-1 p-3">
              <div className="w-full h-fit items-start justify-start flex flex-col gap-y-2">
                <span className="flex flex-col gap-2 items-start justify-start">
                  <div className="p-3 aspect-square shrink-0 bg-primary/10">
                    <Table className="size-5 text-primary" />
                  </div>
                  <h3 className="text-foreground font-semibold tracking-tight">
                    Proyecto 1
                  </h3>
                </span>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tenetur officia architecto qui amet suscipit veniam iste sunt
                  minus repellat. Saepe, at! Soluta, cum deserunt saepe enim in
                  veritatis vel nulla.
                </p>
              </div>
              <p className="text-sm text-primary gap-x-2 flex items-center justify-start">
                Ver más <ArrowRight className="h-4 w-4" />
              </p>
            </div>
            <div className="w-full aspect-square flex-1 relative overflow-hidden">
              <Image
                src="/mm.jpg"
                alt="Project 1"
                fill
                className="object-cover"
              />
            </div>
          </Link>
        </BlurFade>
        <BlurFade inView delay={0.4}>
          <Link
            href={"/project"}
            className="w-full flex-1 grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-4 hover:bg-muted/50 border border-transparent hover:border-border ease-in-out transition-all duration-300"
          >
            <div className="flex flex-col gap-y-4 items-start justify-between flex-1 p-3">
              <div className="w-full h-fit items-start justify-start flex flex-col gap-y-2">
                <span className="flex flex-col gap-2 items-start justify-start">
                  <div className="p-3 aspect-square shrink-0 bg-primary/10">
                    <Layers3Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="text-foreground font-semibold tracking-tight">
                    Proyecto 2
                  </h3>
                </span>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tenetur officia architecto qui amet suscipit veniam iste sunt
                  minus repellat. Saepe, at! Soluta, cum deserunt saepe enim in
                  veritatis vel nulla.
                </p>
              </div>
              <p className="text-sm text-primary gap-x-2 flex items-center justify-start">
                Ver más <ArrowRight className="h-4 w-4" />
              </p>
            </div>
            <div className="w-full aspect-square flex-1 relative overflow-hidden">
              <Image
                src="/nn.jpg"
                alt="Project 2"
                fill
                className="object-cover"
              />
            </div>
          </Link>
        </BlurFade>
      </div>
    </section>
  );
};
