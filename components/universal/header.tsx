"use client";

import Link from "next/link";
import { Logo } from "../svgs/logo";
import { Button } from "../ui/button";
import { ArrowRight, ChevronRight, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Logic to detect if the screen has scrolled
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Check initial position
    handleScroll();

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "w-full h-14 items-center justify-between flex py-3 px-5 md:px-7 border-b border-transparent lg:px-14 xl:px-36 2xl:px-56 fixed top-0 z-30",
        "transition-all duration-300 ease-in-out",
        isScrolled && "shadow-md border-border bg-background"
      )}
    >
      <Link href="/" className="h-full w-auto">
        <Logo variant={isScrolled ? "black" : "white"} />
      </Link>
      <div className="w-fit h-full hidden gap-x-1 items-center justify-end lg:flex">
        <Button
          asChild
          variant={pathname.startsWith("/about") ? "secondary" : "ghost"}
          size={"default"}
          className={cn(
            "font-medium",
            !isScrolled && !pathname.startsWith("/about") && "text-background"
          )}
        >
          <Link href={"/about"}>Nosotros</Link>
        </Button>
        <Button
          asChild
          variant={pathname.startsWith("/services") ? "secondary" : "ghost"}
          size={"default"}
          className={cn(
            "font-medium",
            !isScrolled &&
              !pathname.startsWith("/services") &&
              "text-background"
          )}
        >
          <Link href={"/services"}>Servicios</Link>
        </Button>
        <Button
          asChild
          variant={pathname.startsWith("/contact") ? "secondary" : "default"}
          size={"default"}
          className={cn(
            "font-medium",
            !isScrolled && !pathname.startsWith("/contact") && "text-background"
          )}
        >
          <Link href={"/contact"}>
            Contáctanos <ArrowRight />
          </Link>
        </Button>
      </div>
      <div className="w-fit h-full flex gap-x-1 items-center justify-end lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant={"ghost"}
              className={cn(!isScrolled && "text-foreground bg-background")}
              size={"icon"}
            >
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
