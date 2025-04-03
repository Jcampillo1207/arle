import { Button } from "@/components/ui/button";
import {
  Activity,
  ArrowRight,
  BrickWall,
  Calculator,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Construction,
  Drill,
  Droplet,
  HardHat,
  Leaf,
  Lightbulb,
  LucideIcon,
  MessageSquare,
  PenTool,
  Plus,
  ShieldCheck,
  Thermometer,
  Truck,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import Link from "next/link";

interface Item {
  title: string;
  icon: LucideIcon;
}

export const Section3 = () => {
  const items: Item[] = [
    {
      title: "Especialistas en construcción residencial",
      icon: HardHat,
    },
    {
      title: "Proyectos comerciales e industriales",
      icon: Construction,
    },
    {
      title: "Remodelaciones y ampliaciones",
      icon: Wrench,
    },
    {
      title: "Acabados de alta calidad",
      icon: BrickWall,
    },
    {
      title: "Materiales certificados",
      icon: ClipboardCheck, // Necesitarás importar este icono
    },
    {
      title: "Cumplimiento de normativas",
      icon: ShieldCheck, // Necesitarás importar este icono
    },
    {
      title: "Diseño arquitectónico personalizado",
      icon: PenTool, // Necesitarás importar este icono
    },
    {
      title: "Eficiencia energética",
      icon: Lightbulb, // Necesitarás importar este icono
    },
    {
      title: "Gestión integral de proyectos",
      icon: ClipboardList, // Necesitarás importar este icono
    },
    {
      title: "Presupuestos transparentes",
      icon: Calculator, // Necesitarás importar este icono
    },
    {
      title: "Plazos de entrega garantizados",
      icon: Clock, // Necesitarás importar este icono
    },
    {
      title: "Equipo técnico especializado",
      icon: Users, // Necesitarás importar este icono
    },
    {
      title: "Maquinaria de última generación",
      icon: Truck, // Necesitarás importar este icono
    },
    {
      title: "Instalaciones eléctricas certificadas",
      icon: Zap, // Necesitarás importar este icono
    },
    {
      title: "Sistemas de fontanería modernos",
      icon: Droplet, // Necesitarás importar este icono
    },
    {
      title: "Estructuras antisísmicas",
      icon: Activity, // Necesitarás importar este icono
    },
    {
      title: "Soluciones de climatización eficientes",
      icon: Thermometer, // Necesitarás importar este icono
    },
    {
      title: "Asesoramiento técnico continuo",
      icon: MessageSquare, // Necesitarás importar este icono
    },
    {
      title: "Mantenimiento post-construcción",
      icon: Drill, // Necesitarás importar este icono
    },
    {
      title: "Compromiso con el medio ambiente",
      icon: Leaf, // Necesitarás importar este icono
    },
  ];

  return (
    <section className="w-full h-fit items-start justify-start flex flex-col px-5 md:px-7 lg:px-14 xl:px-36 2xl:px-52 py-20 md:py-24 lg:py-28 gap-y-10 lg:gap-y-14 bg-muted border-t">
      <div className="w-full h-fit items-start justify-start flex flex-col gap-y-7 lg:gap-y-10">
        <div className="w-full max-w-2xl items-starts justify-start flex flex-col gap-y-1.5">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-foreground tracking-tight">
            <span className="text-primary">##</span> Sobresaliente calidad en
            nuestro trabajo
          </h2>
          <p className="text-sm lg:text-base text-muted-foreground">
            En cada proyecto que desarrollamos, fusionamos experiencia técnica,
            compromiso y pasión por construir con excelencia. Nuestro equipo
            garantiza resultados sólidos, duraderos y alineados a las más altas
            exigencias de calidad.
          </p>
        </div>
        <div className="w-full h-fit items-center justify-start flex gap-2">
          <Button variant={"default"} asChild>
            <Link href={"/contact"}>
              Contáctanos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full h-fit items-start justify-start flex-wrap gap-2 hidden lg:flex">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-x-2 text-sm bg-background border p-1 pr-3 rounded-none"
          >
            <div className="p-2 bg-primary/10 text-primary">
              <item.icon className="size-4" />
            </div>
            <p className="text-muted-foreground tracking-normal">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full h-fit items-start justify-start flex-col gap-1 flex lg:hidden">
        {items.slice(0, 8).map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-x-2 text-sm bg-background border p-1 pr-3 rounded-none w-full"
          >
            <div className="p-2 bg-primary/10 text-primary">
              <item.icon className="size-4" />
            </div>
            <p className="text-muted-foreground">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
