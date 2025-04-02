import Link from "next/link";
import { Logo } from "../svgs/logo";
import { Button } from "../ui/button";
import { ArrowRight, ChevronRight, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

export const Header = () => {
  return (
    <header className="w-full h-14 items-center justify-between flex py-3 px-5 md:px-7 lg:px-14 xl:px-36 2xl:px-52 border-b bg-background sticky top-0 z-10">
      <Link href="/" className="h-full w-auto">
        <Logo />
      </Link>
      <div className="w-fit h-full hidden gap-x-1 items-center justify-end lg:flex">
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
      <div className="w-fit h-full flex gap-x-1 items-center justify-end lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side={"right"} className="p-0 [&>button]:hidden w-full">
            <div className="flex h-full w-full flex-col">
              <SheetHeader className="bg-muted border-b p-3 h-14 text-start">
                <div className="w-full h-full justify-between flex gap-x-5 items-center">
                  <Link href="/" className="h-full w-auto">
                    <Logo />
                  </Link>
                  <SheetClose asChild>
                    <Button variant={"outline"} size={"icon"}>
                      <X />
                    </Button>
                  </SheetClose>
                </div>
              </SheetHeader>
              <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto p-3">
                <SheetClose asChild>
                  <Button
                    asChild
                    variant={"ghost"}
                    size={"lg"}
                    className="font-medium justify-between px-3"
                  >
                    <Link href={"/about"}>
                      Nosotros <ChevronRight />
                    </Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant={"ghost"}
                    size={"lg"}
                    className="font-medium justify-between px-3"
                  >
                    <Link href={"/services"}>
                      Servicios <ChevronRight />
                    </Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant={"ghost"}
                    size={"lg"}
                    className="font-medium justify-between px-3"
                  >
                    <Link href={"/portafolio"}>
                      Portafolio <ChevronRight />
                    </Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant={"default"}
                    size={"lg"}
                    className="font-medium justify-between px-3"
                  >
                    <Link href={"/portafolio"}>
                      Contáctanos <ArrowRight />
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
