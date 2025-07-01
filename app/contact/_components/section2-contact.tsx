import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Mail,
  MessageCircle
} from "lucide-react";
import Link from "next/link";

export const Section2Contact = () => {
  return (
    <section className="w-full h-fit items-start justify-start flex flex-col px-5 md:px-7 lg:px-14 xl:px-36 2xl:px-56 py-20 md:py-24 lg:py-28 gap-y-10 lg:gap-y-14 bg-muted border-t">
      <div className="w-full gap-y-7 lg:gap-y-10 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl items-center justify-center flex flex-col gap-y-1.5">
          <BlurFade inView delay={0}>
            <h2 className="text-4xl md:text-4xl xl:text-5xl font-semibold text-foreground tracking-tight text-center">
              ¿Tienes alguna duda, pregunta o sugerencia?{" "}
              <span className="text-primary">¡No dudes en contactarnos!</span>
            </h2>
          </BlurFade>
        </div>
        <div className="w-fit h-fit items-center justify-start flex gap-2">
          <BlurFade inView delay={0.1}>
            <Button variant={"outline"} size={"default"} asChild>
              <Link target="_blank" href={"/portfolio"}>
                Whatsapp <MessageCircle className="h-4 w-4" />
              </Link>
            </Button>
          </BlurFade>
          <BlurFade inView delay={0.2}>
            <Button variant={"outline"} size={"icon"} asChild>
              <Link
                target="_blank"
                href="https://www.instagram.com/arle.construcciones/"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            </Button>
          </BlurFade>
          <BlurFade inView delay={0.3}>
            <Button variant={"outline"} size={"icon"} asChild>
              <Link
                target="_blank"
                href="https://www.facebook.com/construccionesArle"
              >
                <Facebook className="h-4 w-4" />
              </Link>
            </Button>
          </BlurFade>
          <BlurFade inView delay={0.5}>
            <Button variant={"outline"} size={"default"} asChild>
              <Link target="_blank" href={"/portfolio"}>
                Correo <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};
