// tailwind.config.js

import type { Config } from "tailwindcss";
import lineClampPlugin from "@tailwindcss/line-clamp";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Define custom animations
      animation: {
        marquee: "marquee 5s linear infinite",
        gradient: "gradient 8s linear infinite",
        shine: "shine 5s linear infinite",
      },
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      // Remove or correct the scrollBehavior configuration
      // If you need to extend it, define it as an object with valid properties
      // For example, adding a new scroll behavior:
      scrollBehavior: {
        smooth: "smooth",
        auto: "auto",
      },
      // Define custom colors
      colors: {
        primary: "#040404",
        secondary: "#383838",
      },
      // Define custom fonts
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [lineClampPlugin],
};

export default config;
