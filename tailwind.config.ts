import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bermuda: "#6A8FAF",
        tacao: "#B87F90",
        french: "#b6e6fc",
        regal: "#004f70",
        deep: "#007ea8",
      },
    },
  },
  plugins: [],
};
export default config;
