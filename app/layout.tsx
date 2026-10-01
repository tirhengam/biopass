import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BioPass — AI-Powered Personal Beauty Roadmap",
  description:
    "Your path to better skin starts with a plan. BioPass turns your beauty goals into a personalized roadmap, daily routine, ingredient strategy, and milestones.",
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
      <body className="font-sans antialiased bg-[#0B0B0E] text-stone-900 transition-colors duration-700 selection:bg-violet-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
