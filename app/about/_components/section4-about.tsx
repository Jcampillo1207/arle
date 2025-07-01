import { BlurFade } from "@/components/magicui/blur-fade";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Item {
  label: string;
  number: number;
  operator: string;
  style: "default" | "secondary" | "ghost";
}

const items: Item[] = [
  {
    label: "Proyectos completados",
    number: 20,
    operator: "+",
    style: "secondary",
  },
  {
    label: "Clientes satisfechos",
    number: 100,
    operator: "+",
    style: "secondary",
  },
  {
    label: "Colaboradores en nuestro equipo",
    number: 100,
    operator: "+",
    style: "secondary",
  },
  {
    label: "Años de experiencia",
    number: 10,
    operator: "+",
    style: "default",
  },
];

export const Section4About = () => {
  return (
    <section className="w-full h-fit flex flex-col px-5 md:px-7 lg:px-14 xl:px-36 2xl:px-56 py-20 md:py-24 lg:py-28 gap-2 bg-background">
      <BlurFade inView delay={0}>
        <div className="flex-1 aspect-video lg:aspect-[16/7] relative w-full">
          <Image
            src="/abt-sec-4.png"
            alt="About"
            fill
            className="object-cover"
          />
        </div>
      </BlurFade>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {items.map((item) => (
          <BlurFade
            key={item.label}
            inView
            delay={0 + items.indexOf(item) * 0.1}
          >
            <div
              className={cn(
                "w-full flex flex-1 lg:items-start !justify-between flex-row-reverse lg:flex-col p-3 !h-auto !px-3 lg:p-5 gap-y-3",
                buttonVariants({ variant: item.style }),
                item.style === "secondary" && "border"
              )}
            >
              <p className="text-4xl lg:text-6xl font-bold">
                <span>{item.operator}</span>
                {item.number}
              </p>
              <p className="text-sm lg:text-lg">{item.label}</p>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
};
