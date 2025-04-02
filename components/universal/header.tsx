import Link from "next/link";
import { Logo } from "../svgs/logo";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full h-14 items-center justify-between flex py-3 px-5 md:px-7 lg:px-14 xl:px-36 border-b bg-background sticky top-0 z-10">
      <Link href="/" className="h-full w-auto">
        <Logo />
      </Link>
      <div className="w-fit h-full flex gap-x-1 items-center justify-end">
        <Button
          asChild
          variant={"ghost"}
          size={"default"}
          className="font-medium"
        >
          <Link href={"/about"}>Nosotros</Link>
        </Button>
        <Button
          asChild
          variant={"ghost"}
          size={"default"}
          className="font-medium"
        >
          <Link href={"/services"}>Servicios</Link>
        </Button>
        <Button
          asChild
          variant={"ghost"}
          size={"default"}
          className="font-medium"
        >
          <Link href={"/portafolio"}>Portafolio</Link>
        </Button>
        <Button
          asChild
          variant={"default"}
          size={"default"}
          className="font-medium"
        >
          <Link href={"/portafolio"}>
            Contáctanos <ArrowRight />
          </Link>
        </Button>
      </div>
    </header>
  );
};
