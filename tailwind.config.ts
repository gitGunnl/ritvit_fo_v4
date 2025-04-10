// tailwind.config.js
import { type Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // New color palette based on our CSS variables
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        text: "hsl(var(--text))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          // Here, primary.foreground is set to use the text color
          foreground: "hsl(var(--text))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "tracking-in-expand": {
          "0%": {
            "letter-spacing": "-.5em",
            opacity: "0",
          },
          "40%": {
            opacity: ".6",
          },
          "100%": {
            opacity: "1",
          },
        },
        glitch: {
          "0%, 100%": {
            transform: "translate(0)",
            "text-shadow": "none",
          },
          "20%": {
            transform: "translate(-1px, 1px)",
            "text-shadow": "0.5px 0.5px #00ffff, -0.5px -0.5px #ff00ff",
          },
          "40%": {
            transform: "translate(-1px, -1px)",
            "text-shadow": "1px -0.5px #00ffff, -1px 0.5px #ff00ff",
          },
          "60%": {
            transform: "translate(1px, 1px)",
            "text-shadow": "-0.5px 0.5px #00ffff, 0.5px -0.5px #ff00ff",
          },
          "80%": {
            transform: "translate(1px, -1px)",
            "text-shadow": "-0.5px -0.5px #00ffff, 0.5px 0.5px #ff00ff",
          },
        },
        "intense-glitch": {
          "0%, 100%": {
            transform: "translate(0)",
            "text-shadow": "none",
          },
          "10%": {
            transform: "translate(-2px, 2px) skew(5deg)",
            "text-shadow": "1px 1px #00ffff, -1px -1px #ff00ff",
          },
          "30%": {
            transform: "translate(2px, -2px) skew(-5deg)",
            "text-shadow": "-1px 1px #00ffff, 1px -1px #ff00ff",
          },
          "50%": {
            transform: "translate(-3px, 3px) skew(7deg)",
            "text-shadow": "2px -2px #00ffff, -2px 2px #ff00ff",
          },
          "70%": {
            transform: "translate(3px, -3px) skew(-7deg)",
            "text-shadow": "-2px -2px #00ffff, 2px 2px #ff00ff",
          },
          "90%": {
            transform: "translate(-1px, 1px) skew(3deg)",
            "text-shadow": "1px 1px #00ffff, -1px -1px #ff00ff",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.5s ease-out",
        "fade-down": "fade-down 0.5s ease-out",
        "glitch-1": "glitch 0.5s cubic-bezier(.25,.46,.45,.94) both",
        "glitch-2": "glitch 0.5s cubic-bezier(.25,.46,.45,.94) both 0.1s",
        "glitch-3": "glitch 0.5s cubic-bezier(.25,.46,.45,.94) both 0.2s",
        "intense-glitch": "intense-glitch 0.8s cubic-bezier(.25,.46,.45,.94) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;