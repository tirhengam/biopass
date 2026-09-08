import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BioPass — AI-Powered Formulation Intelligence Ecosystem",
  description:
    "Cross-category personal biology intelligence for individuals, and turnkey EU Digital Product Passports for modern cosmetic and wellness brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-canvas text-onyx selection:bg-sage-100 selection:text-sage-900">
        {children}
      </body>
    </html>
  );
}
