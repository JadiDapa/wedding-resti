import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "../components/ui/sonner";
import Providers from "../providers/Providers";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Resti & Syahri | Wedding Invitation",
  description: "",
};
import localFont from "next/font/local";

const brittany = localFont({
  src: "../public/fonts/BrittanySignature.ttf",
  variable: "--font-brittany",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        suppressHydrationWarning
        className={`${playfairDisplay.className} ${brittany.variable}`}
      >
        <Toaster richColors position="top-center" theme="light" />
        <Providers>
          <main className="text-white">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
