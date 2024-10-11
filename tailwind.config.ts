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
        french: "#3F3F6E",
        regal: "#7D2C70",
        deep: "#3F3F6E",
      },
      fontFamily: {
        sans: ['var(--font-pacifico)']
      },
    },
  },
  plugins: [],
};
export default config;
