import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

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
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable}`}>
      <body className={`${spaceGrotesk.className} font-sans antialiased bg-[#1B0E33] text-white transition-colors duration-700 selection:bg-yellow-400 selection:text-stone-950`}>
        {children}
      </body>
    </html>
  );
}
