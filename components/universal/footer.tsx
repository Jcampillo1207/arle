import { ModeToggle } from "./mode-toggle";

export const Footer = () => {
  return (
    <footer className="w-full bg-background border-t px-5 md:px-7 lg:px-14 xl:px-36 py-14 md:py-16 lg:py-20">
      <ModeToggle />
    </footer>
  );
};
