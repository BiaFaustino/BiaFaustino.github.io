import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        foreground: "#FFFFFF",
        accent: "#C6FF00",
        surface: "#1A1A1A",
        border: "#2A2A2A",
        textSec: "#B3B3B3"
      },
      fontFamily: {
        heading: ['"Montserrat"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'noise': "url('/noise.png')",
      }
    },
  },
  plugins: [],
};
export default config;
