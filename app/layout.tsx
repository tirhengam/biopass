import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BioPass — Personal Product Intelligence | Where Science Meets Beauty",
  description:
    "BioPass uses AI to connect you, your products, their ingredients and science — helping you discover cosmetics that match your needs, preferences and routine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-noir text-white selection:bg-hotpink selection:text-white">
        {children}
      </body>
    </html>
  );
}
