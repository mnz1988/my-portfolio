import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Menu from "./components/menu";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], weight: ["100", "200", "400", "600", "800"] });

export const metadata: Metadata = {
  title: "Moji Norouzi Portfolio",
  description: "3D Art-Tech Portfolio. Explore my works and learn more about me.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    
  return (
    <html lang="en">
      <body className={`${geistSans.variable} `} >
        {children}
        <Menu/>
      </body>
    </html>
  );
}
