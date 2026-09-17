import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jbmgroup.com"),
  title: {
    default: "JBM Group BU5 Tooling Business",
    template: "%s | JBM Group BU5",
  },
  description:
    "Premium automotive tooling, welding fixture, CAE validation, and smart manufacturing website for JBM Group BU5 Tooling Business.",
  keywords: [
    "JBM Group",
    "BU5 Tooling",
    "automotive tooling",
    "welding fixtures",
    "CAE validation",
    "robotic welding",
    "Industry 4.0",
  ],
  openGraph: {
    title: "JBM Group BU5 Tooling Business",
    description: "Precision tooling, intelligent welding fixtures, and CAE validation solutions.",
    images: ["/images/jbm-bu5-industrial-hero.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
