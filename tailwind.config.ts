import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Strict monochrome palette — VectorOS identity
        border: "hsl(0 0% 14%)",
        input: "hsl(0 0% 14%)",
        ring: "hsl(0 0% 80%)",
        background: "hsl(0 0% 3.5%)",
        foreground: "hsl(0 0% 98%)",
        primary: {
          DEFAULT: "hsl(0 0% 98%)",
          foreground: "hsl(0 0% 3.5%)",
        },
        secondary: {
          DEFAULT: "hsl(0 0% 9%)",
          foreground: "hsl(0 0% 98%)",
        },
        muted: {
          DEFAULT: "hsl(0 0% 9%)",
          foreground: "hsl(0 0% 60%)",
        },
        accent: {
          DEFAULT: "hsl(0 0% 14%)",
          foreground: "hsl(0 0% 98%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 5%)",
          foreground: "hsl(0 0% 98%)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      keyframes: {
        "grid-pan": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(40px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.7" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "grid-pan": "grid-pan 20s linear infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
