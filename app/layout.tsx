import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yadhronics.com"),
  title: {
    default: "Yadhronics | Build. Innovate. Transform.",
    template: "%s | Yadhronics",
  },
  description:
    "Engineering project development, skill training, and electronics product development – for students, startups, and industry.",
  keywords: [
    "embedded systems",
    "IoT solutions",
    "PCB design",
    "control panels",
    "engineering training",
    "industry academia collaboration",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.yadhronics.com",
    siteName: "Yadhronics",
    title: "Yadhronics | Build. Innovate. Transform.",
    description:
      "Engineering project development, skill training, and electronics product development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yadhronics | Build. Innovate. Transform.",
    description:
      "Engineering project development, skill training, and electronics product development.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
  <Navbar />
  <main>{children}</main>
  <Footer />
</body>
    </html>
  );
}