import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Section8 = () => {
  return (
    <section className="w-full h-fit items-start justify-start flex flex-col px-5 md:px-7 lg:px-14 xl:px-36 2xl:pl-56 py-20 md:py-24 lg:py-28 gap-y-10 lg:gap-y-14 bg-muted border-t">
      <div className="w-full gap-y-7 lg:gap-y-10 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl items-center justify-center flex flex-col gap-y-1.5">
          <BlurFade inView delay={0}>
            <h2 className="text-4xl md:text-4xl xl:text-5xl font-semibold text-foreground tracking-tight text-center">
              <span className="text-primary">#</span>{" "}Comienza tu próximo gran proyecto con un equipo que construye
              confianza y calidad
            </h2>
          </BlurFade>
        </div>
        <div className="w-fit h-fit items-center justify-start flex gap-2">
          <BlurFade inView delay={0.1}>
            <Button variant={"default"} asChild>
              <Link href={"/portfolio"}>
                Agenda una cita <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};
