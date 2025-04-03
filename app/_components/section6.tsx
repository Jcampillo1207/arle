import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Section6 = () => {
  return (
    <section className="w-full bg-primary grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-14 relative">
      <div className="w-full flex-1 items-start justify-center flex flex-col gap-y-7 lg:gap-y-10 py-20 md:py-24 lg:py-28 px-5 md:px-7 lg:px-0 lg:pl-14 xl:pl-36 2xl:pl-52">
        <div className="w-full flex flex-col gap-y-1.5 items-start justify-start">
          <h2 className="text-3xl md:text-3xl xl:text-4xl font-semibold text-background tracking-tight">
            <span className="text-foreground">##</span> Construimos hogares que
            reflejan tu estilo de vida
          </h2>
          <p className="text-sm lg:text-base text-background/80">
            Transformamos tus ideas en espacios reales, funcionales y duraderos.
            Nos especializamos en la construcción de viviendas personalizadas
            que combinan diseño, calidad y comodidad. Ya sea tu primera casa o
            el hogar de tus sueños, estamos listos para hacerlo realidad, estés
            donde estés en México.
          </p>
        </div>
        <div className="w-full h-fit items-center justify-start flex gap-2">
          <Button variant={"outline"} asChild>
            <Link href={"/contact"}>
              Saber más <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full h-auto flex items-end justify-end lg:pt-20">
        <img
          src={"/house.png"}
          alt="House Photo"
          className="object-contain w-full h-auto"
        />
      </div>
    </section>
  );
};
