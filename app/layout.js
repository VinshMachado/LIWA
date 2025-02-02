import "./globals.css";
import Navbar from "./costomcomp/Navbar";
import Footer from "./costomcomp/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
