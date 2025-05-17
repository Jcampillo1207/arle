import { BlurFade } from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, LucideIcon, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FeaturesProps {
  title: string;
  icon: LucideIcon;
}

interface ServiceSectionUniversalProps {
  children?: React.ReactNode;
  reverse?: boolean;
  className?: string;
  title: string;
  description: string;
  image: string;
  id: string;
  features?: FeaturesProps[];
  href?: string;
}

export const ServiceSectionUniversal = ({
  title,
  description,
  image,
  reverse = false,
  children,
  className,
  features,
  id,
  href,
}: ServiceSectionUniversalProps) => {
  return (
    <section
      id={id}
      className={cn(
        "w-full h-fit scroll-m-28 flex flex-col px-5 md:px-7 lg:px-14 xl:px-36 2xl:px-56 py-20 md:py-24 lg:py-28 gap-20 lg:gap-36 border-t",
        (reverse && "bg-muted") || "bg-background",
        className
      )}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        <div className="w-full flex-1 items-start justify-center flex flex-col gap-y-10 lg:gap-y-14">
          <div className="w-full items-starts justify-start flex flex-col gap-y-1.5">
            <BlurFade inView delay={0} direction="right">
              <h2 className="text-3xl md:text-3xl xl:text-4xl font-semibold text-foreground tracking-tight">
                <span className="text-primary">##</span> {title}
              </h2>
            </BlurFade>
            <BlurFade inView delay={0.1} direction="right">
              <p className="text-sm lg:text-base text-muted-foreground">
                {description}
              </p>
            </BlurFade>
            {features && (
              <div className="w-full flex gap-1 flex-wrap items-start justify-start mt-3">
                {features.map((feature) => (
                  <BlurFade
                    key={feature.title}
                    inView
                    delay={0.2 + features.indexOf(feature) * 0.1}
                    direction="right"
                  >
                    <Badge
                      key={feature.title}
                      variant={"outline"}
                      className="pl-1.5 gap-x-1.5 bg-background font-normal text-muted-foreground"
                    >
                      <feature.icon className="size-3.5 text-primary" />
                      {feature.title}
                    </Badge>
                  </BlurFade>
                ))}
              </div>
            )}
          </div>
          <div className="w-full items-center justify-start flex gap-2">
            <BlurFade inView delay={0.2} direction="right">
              <Button variant={"default"} size={"default"} asChild>
                <Link href={"/contact"}>
                  Contáctanos <ArrowRight />
                </Link>
              </Button>
            </BlurFade>
            {href && (
              <BlurFade inView delay={0.2} direction="right">
                <Button variant={"ghost"} size={"default"} asChild>
                  <Link href={href}>
                    Más información <Plus />
                  </Link>
                </Button>
              </BlurFade>
            )}
          </div>
        </div>
        <BlurFade inView delay={0.3} direction="left">
          <div className="w-full h-auto aspect-[4/3] relative overflow-hidden">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        </BlurFade>
      </div>
      {children}
    </section>
  );
};
