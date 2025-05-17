import { BlurFade } from "@/components/magicui/blur-fade";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

const items = [
  {
    id: "1",
    title: "¿Qué tipo de proyectos realiza ARLE?",
    content:
      "Nos especializamos en desarrollos industriales, comerciales y residenciales. Desde parques industriales hasta construcciones habitacionales, garantizando calidad en cada etapa del proceso.",
  },
  {
    id: "2",
    title: "¿Cómo garantiza ARLE la calidad en sus obras?",
    content:
      "Contamos con un equipo multidisciplinario de expertos, procesos certificados y supervisión constante. Además, trabajamos con materiales de alta especificación.",
  },
  {
    id: "3",
    title: "¿Puedo confiar en ARLE para cumplir con los plazos?",
    content:
      "Sí. Nuestro enfoque está en la planificación rigurosa y el cumplimiento de entregas. Sabemos que el tiempo es clave en cualquier obra, y actuamos en consecuencia.",
  },
  {
    id: "4",
    title: "¿Qué experiencia tiene ARLE en el sector?",
    content:
      "Con más de 15 años en el sector de la construcción, hemos trabajado con empresas líderes y organismos públicos en diversos proyectos de gran escala.",
  },
  {
    id: "5",
    title: "¿ARLE ofrece diseño arquitectónico o solo construcción?",
    content:
      "Ofrecemos un servicio integral que incluye desde el diseño arquitectónico, la ingeniería y la gestión de permisos, hasta la ejecución total de la obra.",
  },
  {
    id: "6",
    title: "¿Puedo contratar a ARLE para remodelaciones o ampliaciones?",
    content:
      "Sí. Además de obras nuevas, realizamos remodelaciones, adecuaciones y ampliaciones para todo tipo de edificaciones.",
  },
  {
    id: "7",
    title: "¿Trabajan solo en Torreón o en otras ciudades también?",
    content:
      "Tenemos sede en Torreón, Coahuila, pero operamos en diversas regiones del país dependiendo del tipo y alcance del proyecto.",
  },
  {
    id: "8",
    title: "¿Qué tipo de clientes atiende ARLE?",
    content:
      "Trabajamos con empresas privadas, gobiernos y particulares. Cada cliente recibe un enfoque personalizado acorde a sus necesidades.",
  },
  {
    id: "9",
    title: "¿Cómo es el proceso para iniciar un proyecto con ARLE?",
    content:
      "Todo comienza con una reunión para entender tus necesidades. Luego elaboramos una propuesta técnica y económica ajustada a tu proyecto.",
  },
  {
    id: "10",
    title: "¿Qué sistemas constructivos utilizan?",
    content:
      "Utilizamos sistemas tradicionales, prefabricados y de última generación según los requerimientos del cliente y del terreno.",
  },
  {
    id: "11",
    title: "¿Ofrecen garantías sobre la obra?",
    content:
      "Sí. Nuestras construcciones están respaldadas por garantías estructurales, de acabados y de cumplimiento normativo.",
  },
  {
    id: "12",
    title: "¿Con qué normativas y regulaciones cumple ARLE?",
    content:
      "Seguimos los lineamientos del Reglamento de Construcción vigente, normas de seguridad estructural y lineamientos medioambientales.",
  },
];

export const Section7About = () => {
  return (
    <section
      id="faqs"
      className="w-full h-fit grid grid-cols-1 lg:grid-cols-2 px-5 md:px-7 lg:px-14 xl:px-36 2xl:px-56 py-20 md:py-24 lg:py-28 gap-10 lg:gap-14 bg-background border-t relative"
    >
      <div className="w-full flex-1 items-start justify-start flex flex-col gap-y-10 lg:gap-y-14">
        <div className="w-full items-start justify-start flex flex-col gap-y-1.5 lg:sticky lg:top-28">
          <BlurFade inView delay={0}>
            <h2 className="text-3xl md:text-3xl xl:text-4xl font-semibold text-foreground tracking-tight">
              <span className="text-primary">##</span> Comprometidos con la
              transparencia
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.1}>
            <p className="text-sm lg:text-base text-muted-foreground">
              En ARLE respondemos con claridad y compromiso. Sabemos que
              construir genera dudas, por eso queremos que tomes decisiones bien
              informado.
            </p>
          </BlurFade>
        </div>
      </div>
      <div className="flex flex-1 items-start justify-start flex-col">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="3"
        >
          {items.map((item) => (
            <BlurFade
              inView
              key={item.id}
              delay={0 + items.indexOf(item) * 0.1}
            >
              <AccordionItem value={item.id} key={item.id} className="py-2">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                    {item.title}
                    <PlusIcon
                      size={16}
                      className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-muted-foreground pb-2">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            </BlurFade>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
