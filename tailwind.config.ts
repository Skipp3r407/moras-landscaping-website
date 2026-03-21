import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        pine: {
          50: "#eef7f0",
          100: "#d4ead8",
          200: "#add4b4",
          300: "#7fb786",
          400: "#5e9b66",
          500: "#4caf50",
          600: "#3f8f45",
          700: "#2f6d3a",
          800: "#275a31",
          900: "#204a29",
          950: "#13301b"
        },
        grass: "#4caf50",
        earth: "#f5f6f7",
        charcoal: "#1a1a1a"
      },
      boxShadow: {
        glow: "0 10px 30px rgba(76, 175, 80, 0.25)"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 20% 20%, rgba(76,175,80,0.24), transparent 45%), radial-gradient(circle at 80% 10%, rgba(47,109,58,0.22), transparent 40%)"
      }
    }
  },
  plugins: []
};

export default config;
