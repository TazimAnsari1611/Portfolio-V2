import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactLenis from "lenis/react";
import NextTopLoader from "nextjs-toploader";

const spaceFont = Space_Grotesk({
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Tazim Ansari | Front-End Developer",
  description: "Front-End Developer with 4+ years of experience building responsive, high-performance web applications with React.js and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceFont.className} ${poppins.variable} antialiased`}
      >
        <ReactLenis root />
        <NextTopLoader color="#000" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
