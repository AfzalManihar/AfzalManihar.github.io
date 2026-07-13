import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: { colors: { ink: "#0B1220", cloud: "#F7F8FA", cyan: "#22D3EE", lime: "#A3E635" }, fontFamily: { display: ["var(--font-manrope)", "sans-serif"], sans: ["var(--font-inter)", "sans-serif"], mono: ["var(--font-mono)", "monospace"] } } },
  plugins: []
} satisfies Config;
