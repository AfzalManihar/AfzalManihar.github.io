import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
export const metadata: Metadata = { title: "Afzal Manihar — Data Scientist & AI Engineer", description: "Portfolio of Afzal Manihar, an applied data scientist building reliable machine learning and generative AI systems.", keywords: ["Data Scientist", "ML Engineer", "AI Engineer", "Machine Learning Portfolio"], openGraph: { title: "AFzal Manihar — Data Scientist & AI Engineer", description: "Applied ML, data products, and generative AI systems." } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${inter.variable} ${manrope.variable} ${mono.variable}`}><body>{children}<div className="noise" /></body></html>; }
