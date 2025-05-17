import Link from "next/link";
import { Logo } from "../svgs/logo";

const links = [
  {
    group: "Arle",
    items: [
      {
        title: "Inicio",
        href: "/",
      },
      {
        title: "Acerca de",
        href: "/about",
      },
      {
        title: "Servicios",
        href: "/services",
      },
      {
        title: "Contáctanos",
        href: "/contact",
      },
    ],
  },
  {
    group: "Servicios",
    items: [
      {
        title: "Construcción",
        href: "/services#construction",
        items: [
          {
            title: "Construcción Residencial",
            href: "/services/construction#residential",
          },
          {
            title: "Construcción Comercial",
            href: "/services/construction#commercial",
          },
          {
            title: "Construcción Industrial",
            href: "/services/construction#industrial",
          },
        ],
      },
      {
        title: "Diseño arquitectónico",
        href: "/services#architecture",
      },
      {
        title: "Instalaciones",
        href: "/services#installation",
      },
      {
        title: "Ingeniería",
        href: "/services#engineering",
      },
      {
        title: "Proyectos ejecutivos",
        href: "/services#executive-projects",
      },
      {
        title: "Interiorismo",
        href: "/services#interiorism",
      },
    ],
  },
  {
    group: "Legal",
    items: [
      {
        title: "Política de privacidad",
        href: "/privacy",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-y bg-background pt-20">
      <div className="mx-auto w-full px-5 md:px-7 lg:px-14 xl:px-36 2xl:px-56">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link href="/" aria-label="go home" className="block size-fit">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:col-span-3">
            {links.map((link, index) => (
              <div key={index} className="space-y-4 text-sm">
                <span className="block font-medium">{link.group}</span>
                {link.items.map((item, index) => {
                  if (item.items) {
                    return (
                      <div key={index}>
                        <Link
                          href={item.href}
                          className="text-muted-foreground hover:text-primary block duration-150"
                        >
                          <span>{item.title}</span>
                        </Link>
                        <ul className=" pl-2">
                          {item.items.map((subItem, index) => (
                            <li key={index} className="py-2 first:pt-4 last:pb-0 border-l pl-4">
                              <Link
                                href={subItem.href}
                                className="text-muted-foreground hover:text-primary block duration-150"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={index}
                      href={item.href}
                      className="text-muted-foreground hover:text-primary block duration-150"
                    >
                      <span>{item.title}</span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
            &copy; {new Date().getFullYear()} Arle, Todos los derechos
            reservados.
          </span>
          <div className="order-first flex flex-wrap justify-center gap-4 text-sm md:order-last">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                ></path>
              </svg>
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                ></path>
              </svg>
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary block"
            >
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
