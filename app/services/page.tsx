import Image from "next/image";
import { ServiceSectionUniversal } from "./_components/atoms/service-section-universal";
import { HeroServices } from "./_components/hero-services";
import {
  ArrowRight,
  FileAxis3D,
  FolderCheckIcon,
  Scroll,
  Wrench,
  CircuitBoard,
  Building2,
  Ruler,
  Construction,
  LampDesk,
  Paintbrush2,
  PanelTop,
} from "lucide-react";
import Link from "next/link";

const constructionSubServices = [
  {
    title: "Construcción Residencial",
    description:
      "Desarrollamos viviendas personalizadas, funcionales y seguras que reflejan el estilo de vida de cada cliente. Cuidamos cada detalle, desde los cimientos hasta los acabados.",
    image: "/res-construction.jpg",
    href: "/services/construction#residential",
  },
  {
    title: "Construcción Comercial",
    description:
      "Creamos espacios comerciales que combinan diseño, funcionalidad y experiencia del usuario, optimizando el flujo de trabajo y el impacto visual del negocio.",
    image: "/com-construction.png",
    href: "/services/construction#commercial",
  },
  {
    title: "Construcción Industrial",
    description:
      "Ejecutamos naves, plantas y espacios industriales bajo estrictos estándares de ingeniería, seguridad y eficiencia operativa, adaptándonos a cualquier tipo de industria.",
    image: "/ind-construction.jpg",
    href: "/services/construction#industrial",
  },
];

const AboutPage = () => {
  return (
    <main className="w-full h-fit items-start justify-start flex flex-col">
      <HeroServices />

      <ServiceSectionUniversal
        id="construction"
        title="Construcción"
        description="Ejecutamos proyectos de construcción con altos estándares de calidad, cuidando cada detalle desde la planeación hasta la entrega. Ya sea obra nueva, remodelación o adecuaciones, nuestro equipo garantiza soluciones seguras, funcionales y adaptadas a tus necesidades."
        image="/construction.png"
        reverse={false}
        href="/services/construction"
        features={[
          { title: "Residencial", icon: Building2 },
          { title: "Comercial", icon: PanelTop },
          { title: "Industrial", icon: Construction },
          { title: "Supervisión de obra", icon: FolderCheckIcon },
          { title: "Seguridad estructural", icon: Ruler },
        ]}
      >
        <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7">
          {constructionSubServices.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              className="w-full items-start justify-between flex flex-col gap-y-3 bg-muted border flex-1 hover:shadow-xl ease-in-out transition-all duration-300"
            >
              <span className="flex flex-col gap-y-1 items-start justify-start p-3">
                <span className="w-full flex items-start justify-between gap-3">
                  <h3 className="text-lg lg:text-xl font-semibold text-foreground tracking-tight">
                    {item.title}
                  </h3>
                  <ArrowRight className="size-4" />
                </span>
                <p className="text-sm lg:text-base text-muted-foreground">
                  {item.description}
                </p>
              </span>
              <div className="w-full h-auto aspect-[4/3] relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </ServiceSectionUniversal>

      <ServiceSectionUniversal
        id="architecture"
        title="Diseño arquitectónico"
        description="Transformamos ideas en planos funcionales y estéticos. Nuestro equipo diseña espacios que combinan belleza, eficiencia y sustentabilidad, alineados con las necesidades de cada cliente y el contexto del proyecto."
        image="/architecture.png"
        reverse={true}
        features={[
          { title: "Planos arquitectónicos", icon: Scroll },
          { title: "Renders 3D", icon: FileAxis3D },
          { title: "Entregables digitales", icon: FolderCheckIcon },
          { title: "Diseño personalizado", icon: Paintbrush2 },
          { title: "Normativa local", icon: Ruler },
        ]}
      />

      <ServiceSectionUniversal
        id="installation"
        title="Instalaciones"
        description="Desarrollamos instalaciones hidráulicas, eléctricas y sanitarias con enfoque técnico y normativo. Garantizamos eficiencia, seguridad y durabilidad en todos los sistemas que integran tu proyecto."
        image="/installations.png"
        reverse={false}
        features={[
          { title: "Eléctricas", icon: CircuitBoard },
          { title: "Hidrosanitarias", icon: Wrench },
          { title: "Climatización", icon: PanelTop },
          { title: "Cableado estructurado", icon: Scroll },
          { title: "Cumplimiento normativo", icon: FolderCheckIcon },
        ]}
      />

      <ServiceSectionUniversal
        id="engineering"
        title="Ingeniería"
        description="Ofrecemos soluciones de ingeniería estructural, civil y de procesos, asegurando que cada obra se ejecute con precisión, estabilidad y cumplimiento de regulaciones. Convertimos la complejidad técnica en resultados sólidos."
        image="/engineering.png"
        reverse={true}
        features={[
          { title: "Cálculo estructural", icon: Ruler },
          { title: "Ingeniería civil", icon: Building2 },
          { title: "Memorias de cálculo", icon: Scroll },
          { title: "Topografía y análisis", icon: FileAxis3D },
          { title: "Supervisión técnica", icon: FolderCheckIcon },
        ]}
      />

      <ServiceSectionUniversal
        id="executive"
        title="Proyectos ejecutivos"
        description="Elaboramos proyectos ejecutivos listos para construcción, con planos detallados, especificaciones técnicas y presupuestos precisos. Esta etapa asegura una ejecución sin contratiempos y alineada con tus objetivos."
        image="/executive-projects.png"
        reverse={false}
        features={[
          { title: "Planificación detallada", icon: Scroll },
          { title: "Presupuesto y metrados", icon: FolderCheckIcon },
          { title: "Catálogo de conceptos", icon: FileAxis3D },
          { title: "Especificaciones técnicas", icon: CircuitBoard },
          { title: "Listos para construir", icon: PanelTop },
        ]}
      />

      <ServiceSectionUniversal
        id="interiorism"
        title="Interiorismo"
        description="Creamos ambientes que reflejan identidad, funcionalidad y armonía. Desde mobiliario hasta acabados, cada elemento es seleccionado para ofrecer experiencias únicas en espacios habitables y comerciales."
        image="/interiorism.png"
        reverse={true}
        features={[
          { title: "Diseño de interiores", icon: LampDesk },
          { title: "Selección de materiales", icon: Paintbrush2 },
          { title: "Distribución de espacios", icon: Ruler },
          { title: "Mobiliario y decoración", icon: FolderCheckIcon },
          { title: "Iluminación ambiental", icon: CircuitBoard },
        ]}
      />
    </main>
  );
};

export default AboutPage;
