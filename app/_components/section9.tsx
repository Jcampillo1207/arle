import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Section9 = () => {
  const faqs = [
    {
      question: "¿Qué tipos de proyectos de construcción realizan?",
      answer:
        "En Arle nos especializamos en una amplia gama de proyectos, incluyendo construcción residencial (casas, departamentos), comercial (locales, oficinas), industrial (naves, plantas) y remodelaciones. Nuestro equipo está capacitado para manejar desde pequeñas renovaciones hasta grandes desarrollos, siempre con el mismo nivel de compromiso y calidad.",
    },
    {
      question: "¿Cómo inicia el proceso de cotización para mi proyecto?",
      answer:
        "El proceso comienza con una consulta inicial donde escuchamos tus necesidades y objetivos. Posteriormente, realizamos una visita técnica al sitio para evaluar las condiciones. En base a esta información, desarrollamos una propuesta detallada que incluye presupuesto, cronograma y especificaciones técnicas, todo personalizado a tu proyecto específico.",
    },
    {
      question: "¿Cuánto tiempo toma completar un proyecto de construcción?",
      answer:
        "Los tiempos varían según la complejidad y magnitud del proyecto. Una remodelación pequeña puede tomar de 2 a 4 semanas, mientras que una construcción residencial completa generalmente requiere de 4 a 8 meses. Proyectos comerciales o industriales pueden extenderse hasta 12 meses o más. En Arle, nos comprometemos con cronogramas realistas y trabajamos diligentemente para cumplirlos.",
    },
    {
      question: "¿Ustedes se encargan de obtener los permisos necesarios?",
      answer:
        "Sí, gestionamos todos los permisos y licencias requeridos por las autoridades locales. Nuestro equipo está familiarizado con los códigos de construcción y regulaciones municipales en Torreón y alrededores, lo que nos permite agilizar estos trámites y asegurar que tu proyecto cumpla con todas las normativas vigentes.",
    },
    {
      question: "¿Qué garantías ofrecen para sus construcciones?",
      answer:
        "Ofrecemos garantía estructural de 10 años y garantía en acabados e instalaciones de 1 a 5 años, dependiendo del elemento. Además, trabajamos exclusivamente con proveedores que respaldan sus materiales con garantías propias. Nuestro compromiso es construir con calidad duradera, y respaldamos ese compromiso con garantías por escrito.",
    },
    {
      question: "¿Cómo manejan los cambios durante el proceso de construcción?",
      answer:
        "Entendemos que los proyectos pueden evolucionar. Implementamos un sistema formal de órdenes de cambio donde documentamos cualquier modificación, su impacto en costos y cronograma, y obtenemos tu aprobación antes de proceder. Esto garantiza transparencia y te mantiene en control de tu proyecto en todo momento.",
    },
    {
      question: "¿Qué medidas de seguridad implementan en sus obras?",
      answer:
        "La seguridad es nuestra prioridad. Cumplimos rigurosamente con todas las normativas de seguridad laboral, proporcionamos equipo de protección a nuestro personal, realizamos capacitaciones regulares, y mantenemos protocolos estrictos en obra. Además, aseguramos el perímetro de construcción para proteger a transeúntes y propiedades adyacentes.",
    },
    {
      question: "¿Utilizan materiales sustentables o ecológicos?",
      answer:
        "Sí, ofrecemos opciones de construcción sustentable. Podemos incorporar materiales ecológicos, sistemas de eficiencia energética, aprovechamiento de agua pluvial y otras soluciones amigables con el medio ambiente. Estas alternativas no solo reducen el impacto ambiental, sino que también pueden disminuir costos operativos a largo plazo.",
    },
    {
      question:
        "¿Puedo habitar mi casa/utilizar mi espacio mientras realizan una remodelación?",
      answer:
        "Dependiendo del alcance del proyecto, es posible. Para remodelaciones parciales, implementamos estrategias para minimizar las interrupciones, como aislamiento de áreas de trabajo, control de polvo y ruido, y programación de trabajos más intrusivos en horarios convenientes. Evaluamos cada caso individualmente para determinar la viabilidad y las mejores prácticas.",
    },
    {
      question:
        "¿Cómo se estructura el pago para los proyectos de construcción?",
      answer:
        "Típicamente trabajamos con un anticipo inicial (30-40% del presupuesto), seguido de pagos programados vinculados a hitos específicos del proyecto. Esta estructura protege tus intereses al asegurar que los pagos correspondan con el avance real de la obra. El esquema exacto se detalla en el contrato y se adapta según las particularidades de cada proyecto.",
    },
    {
      question:
        "¿Trabajan con arquitectos externos o debo contratar uno por separado?",
      answer:
        "Podemos trabajar de ambas formas. Contamos con arquitectos asociados que pueden desarrollar tu proyecto desde cero, o podemos colaborar con tu arquitecto de preferencia. Nuestra flexibilidad nos permite integrarnos eficientemente en cualquier etapa del proceso, ya sea desde la conceptualización o únicamente en la fase de construcción.",
    },
    {
      question: "¿Qué hace diferente a Arle de otras constructoras?",
      answer:
        "Nos distinguimos por nuestra comunicación transparente, atención personalizada y compromiso inquebrantable con la calidad. Nuestro equipo combina experiencia técnica con visión creativa para resolver desafíos complejos. Además, implementamos tecnologías avanzadas de gestión de proyectos que nos permiten optimizar tiempos y recursos sin comprometer la excelencia en cada detalle.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full h-fit scroll-mt-14 items-start justify-start flex flex-col px-5 md:px-7 lg:px-14 xl:px-36 2xl:pl-56 py-20 md:py-24 lg:py-28 gap-y-10 lg:gap-y-14 border-t"
    >
      <div className="w-full h-fit items-start justify-start flex flex-col gap-y-7 lg:gap-y-10">
        <div className="w-full max-w-2xl items-starts justify-start flex flex-col gap-y-1.5">
          <BlurFade inView delay={0}>
            <h2 className="text-3xl md:text-3xl xl:text-4xl font-semibold text-foreground">
              <span className="text-primary">##</span> Resolvemos tus dudas
              antes de empezar tu proyecto
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.1}>
            <p className="text-sm lg:text-base text-muted-foreground">
              Sabemos que construir o remodelar puede generar muchas preguntas.
              Aquí respondemos las inquietudes más comunes para que tomes
              decisiones con seguridad y confianza desde el primer día.
            </p>
          </BlurFade>
        </div>
        <div className="w-full h-fit items-center justify-start flex gap-2">
          <BlurFade inView delay={0.2}>
            <Button variant={"default"} asChild>
              <Link href={"/about#faqs"}>
                Ver faqs <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </BlurFade>
        </div>
      </div>
      <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {faqs.slice(0, 3).map((faq, index) => (
          <BlurFade className="flex-1 flex" inView delay={0.3 * index} key={index}>
            <div className="w-full h-full items-start justify-start flex flex-col gap-y-1.5 p-3 bg-muted/50 border">
              <h3 className="text-base lg:text-lg font-semibold text-foreground">
                {faq.question}
              </h3>
              <p className="text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
};
