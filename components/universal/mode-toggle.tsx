"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MonitorSmartphone, Moon, Sun } from "lucide-react";

export const ModeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="w-fit h-fit items-center justify-center flex gap-x-1 border bg-background p-1 rounded-md">
      <Button
        size={"icon"}
        className="size-6"
        variant={theme === "system" ? "default" : "ghost"}
        onClick={() => setTheme("system")}
      >
        <MonitorSmartphone className="size-2.5" />
      </Button>
      <Button
        size={"icon"}
        className="size-6"
        variant={theme === "light" ? "default" : "ghost"}
        onClick={() => setTheme("light")}
      >
        <Sun className="size-2.5" />
      </Button>
      <Button
        size={"icon"}
        className="size-6"
        variant={theme === "dark" ? "default" : "ghost"}
        onClick={() => setTheme("dark")}
      >
        <Moon className="size-2.5" />
      </Button>
    </div>
  );
};
