import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

// next/font descarga las fuentes en el build y las sirve desde el mismo dominio:
// más rápido y sin saltos de texto al cargar.
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

// En Vercel, VERCEL_PROJECT_PRODUCTION_URL trae el dominio del sitio; sirve para que
// la imagen de vista previa funcione al compartir el enlace en WhatsApp o LinkedIn.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "María Fernanda Moncada — Comunicadora social y periodista",
  description:
    "Portafolio de María Fernanda Moncada Molina: periodismo, producción audiovisual, fotografía y contenido para redes.",
  openGraph: {
    title: "María Fernanda Moncada — Portafolio",
    description:
      "Historias de cultura, territorio y personas. Periodismo y producción audiovisual.",
    images: ["/images/motocross.jpg"],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
