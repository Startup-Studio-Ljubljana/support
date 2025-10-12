import type { Metadata } from "next";
import "./globals.css";
import Provider from "./providers";

export const metadata: Metadata = {
  title: "BauScribe",
  description:
    "Industrial brochure translation platform built for industrial inDesign brochures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
