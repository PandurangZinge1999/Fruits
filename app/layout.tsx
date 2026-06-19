import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { company } from "@/lib/data";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Vignaharta Fruit & Export | Fruit Supplier & Exporter",
    template: "%s | Vignaharta Fruit & Export",
  },
  description:
    "Vignaharta Fruit & Export sources premium fruits directly from farmers and supplies domestic and international buyers.",
  keywords: [
    "Vignaharta Fruit & Export",
    "fruit supplier",
    "fruit exporter",
    "fruit sourcing",
    "mango export",
    "grape export",
    "Indian fruits",
  ],
  metadataBase: new URL("https://www.greenharvestexport.com"),
  alternates: {
    canonical: "https://www.greenharvestexport.com",
  },
  openGraph: {
    title: "Vignaharta Fruit & Export | Fruit Supplier & Exporter",
    description:
      "Vignaharta Fruit & Export sources premium fruits directly from farmers and supplies domestic and international buyers.",
    url: "https://www.greenharvestexport.com",
    siteName: company.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 800,
        alt: "Fruit export farm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vignaharta Fruit & Export | Fruit Supplier & Exporter",
    description:
      "Vignaharta Fruit & Export sources premium fruits directly from farmers and supplies domestic and international buyers.",
    images: [
      "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: "https://www.greenharvestexport.com",
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shiral (Tembhurni)",
    addressLocality: "Madha",
    addressRegion: "Solapur",
    addressCountry: "India",
  },
  description:
    "Vignaharta Fruit & Export sources premium fruits directly from farmers and supplies domestic and international buyers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full`}>
      <body className="min-h-full bg-white text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileBottomNav />
      </body>
    </html>
  );
}
