import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/universal/header";
import { Footer } from "@/components/universal/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Arle Construcciones",
  description:
    "Construimos con precisión, eficiencia y compromiso. Desde la planeación hasta la entrega final, somos el socio confiable para tus proyectos residenciales, comerciales o industriales.",
};

export const viewport: Viewport = {
  themeColor: "#fff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:text-primary selection:bg-primary/5`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
