import localFont from "next/font/local";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import Navbar from "./costomcomp/Navbar";
import Footer from "./costomcomp/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar variant="floating " />

          <SidebarInset>
            {" "}
            <Navbar />
            {children}
            <Footer />
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
