import localFont from "next/font/local";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import Navbar from "./costomcomp/Navbar";
import Head from "next/head";
import Footer from "./costomcomp/Footer";
export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Liwa Dry Cleaners",
    url: "https://liwadrycleaners.com",
    telephone: "+971 5 22372288",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Kharbash Tower, Trade Center First",
      addressLocality: "Dubai",
      addressCountry: "UAE",
    },
    openingHours: "Mo-Su 08:00-22:00",
    serviceArea: {
      "@type": "Place",
      name: "Dubai & Sharjah",
    },
  };

  return (
    <html lang="en">
      <Head>
        <title>Professional Laundry Services - Liwa Dry Cleaners</title>
        <meta
          name="description"
          content="Premium laundry and dry cleaning services in Dubai. Free pickup & delivery!"
        />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <body>
        <SidebarProvider>
          <AppSidebar variant="floating " />
          <SidebarInset>
            <Navbar />
            {children}
            <Footer />
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
