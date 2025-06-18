import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://madeinuae.dev"), // ✅ Add this line
  title: "Made in UAE",
  description:
    "A curation of awesome open source tools built by developers in UAE for the world.",
  openGraph: {
    type: "website",
    siteName: "Made in UAE",
    images: "/images/min-cover.png",
    description:
      "A curation of awesome open source tools built by developers in UAE for the world.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Made In UAE</title>
        <link rel="icon" sizes="any" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Providers>
          <NavBar />
          <main>{children}</main>
          <GoogleAnalytics gaId="G-Y4V68HJ3QM" />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
