"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  BedDouble,
  Check,
  DraftingCompass,
  Factory,
  HardHat,
  Home,
  Newspaper,
  PaintRoller,
  ShowerHead,
  Store,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Modificamos el esquema para permitir múltiples tipos de proyecto
const formSchema = z.object({
  name: z.string().min(1, { message: "El nombre es requerido" }),
  email: z.string().email({ message: "El correo electrónico es inválido" }),
  phone: z.string().min(1, { message: "El teléfono es requerido" }),
  company: z.string().min(1, { message: "La empresa es requerida" }),
  projectTypes: z
    .array(z.string())
    .min(1, { message: "Selecciona al menos un tipo de proyecto" }),
  message: z.string().min(1, { message: "El mensaje es requerido" }),
});

// Definimos los tipos de proyectos con nombres en español
const projectTypes = [
  { id: "residential", name: "Construcción Residencial", icon: Home },
  { id: "commercial", name: "Construcción Comercial", icon: Store },
  { id: "industrial", name: "Construcción Industrial", icon: Factory },
  { id: "remodel", name: "Remodelación", icon: PaintRoller },
  { id: "architecture", name: "Diseño Arquitectónico", icon: DraftingCompass },
  { id: "installation", name: "Instalaciones", icon: ShowerHead },
  { id: "engineering", name: "Ingeniería", icon: HardHat },
  { id: "executive", name: "Proyecto Ejecutivo", icon: Newspaper },
  { id: "interiorism", name: "Interiorismo", icon: BedDouble },
];

export const Section10 = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      projectTypes: [],
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    console.log(values);
    // Aquí iría tu lógica de envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      form.reset();
      // Mostrar mensaje de éxito
      alert(
        "Formulario enviado con éxito. Nos pondremos en contacto contigo pronto."
      );
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="w-full h-fit scroll-mt-14 items-center justify-center flex flex-col px-5 md:px-7 lg:px-14 xl:px-36 2xl:pl-56 py-20 md:py-24 lg:py-28 gap-y-10 lg:gap-y-14 border-t bg-muted"
    >
      <div className="w-full max-w-2xl mx-auto items-center justify-center flex flex-col gap-y-1.5">
        <BlurFade inView delay={0}>
          <h2 className="text-3xl md:text-3xl xl:text-4xl font-semibold text-foreground text-center">
            <span className="text-primary">##</span> Hablemos de tu próximo
            proyecto
          </h2>
        </BlurFade>
        <BlurFade inView delay={0.1}>
          <p className="text-sm lg:text-base text-muted-foreground text-center">
            Estamos listos para escucharte y ayudarte a convertir tus ideas en
            realidad. Completa el formulario y uno de nuestros especialistas se
            pondrá en contacto contigo para comenzar a planear cada detalle.
          </p>
        </BlurFade>
      </div>
      <div className="w-full max-w-xl items-center justify-center mx-auto bg-background border p-3 lg:p-5">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full h-fit items-start justify-start flex flex-col gap-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre completo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Juan Pérez"
                        className="bg-muted/40"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo electrónico</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-muted/40"
                        placeholder="ejemplo@correo.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-muted/40"
                        placeholder="(871) 123-4567"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Empresa</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-muted/40"
                        placeholder="Nombre de tu empresa"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="projectTypes"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Servicios de interés:</FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full">
                      {projectTypes.map((type) => {
                        const isSelected = field.value.includes(type.id);
                        return (
                          <div
                            key={type.id}
                            className={cn(
                              "flex items-center justify-start gap-2 p-2 border cursor-pointer transition-all",
                              isSelected
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border hover:border-primary/50 hover:bg-primary/10 bg-muted/40 text-muted-foreground"
                            )}
                            onClick={() => {
                              const updatedValue = isSelected
                                ? field.value.filter((val) => val !== type.id)
                                : [...field.value, type.id];
                              field.onChange(updatedValue);
                            }}
                          >
                            <div
                              className={cn(
                                "p-1.5 bg-background border h-fit w-fit text-muted-foreground",
                                isSelected
                                  ? "border-primary text-primary"
                                  : "border-border"
                              )}
                            >
                              {isSelected ? (
                                <Check className="size-4" />
                              ) : (
                                <type.icon className="size-4" />
                              )}
                            </div>
                            <span className="text-sm text-start">
                              {type.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Mensaje</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
                      className="min-h-[120px] bg-muted/40"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full mt-2 bg-primary hover:bg-primary/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </Button>

            <p className="text-xs text-center text-muted-foreground w-full mt-2">
              Al enviar este formulario, aceptas nuestra política de privacidad
              y el tratamiento de tus datos personales.
            </p>
          </form>
        </Form>
      </div>
    </section>
  );
};
