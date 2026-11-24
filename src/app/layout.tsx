import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
export const metadata: Metadata = { title: "Afzal Manihar — Agentic AI & GenAI Developer", description: "Portfolio of Afzal Manihar, an Agentic AI and Generative AI developer building LangGraph multi-agent systems, RAG pipelines and FastAPI backends.", keywords: ["Agentic AI Developer", "Generative AI Developer", "AI Engineer", "LangGraph", "RAG", "MCP", "Portfolio"], openGraph: { title: "Afzal Manihar — Agentic AI & GenAI Developer", description: "Multi-agent systems, RAG pipelines and LLM applications." } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${inter.variable} ${manrope.variable} ${mono.variable}`}><body>{children}<div className="noise" /></body></html>; }
