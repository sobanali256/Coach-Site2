import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        "ink-muted": "rgb(var(--color-ink-muted) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "accent-alt": "rgb(var(--color-accent-alt) / <alpha-value>)",
        cta: "rgb(var(--color-cta) / <alpha-value>)",
        "cta-text": "rgb(var(--color-cta-text) / <alpha-value>)",
        "cta-ghost": "rgb(var(--color-cta-ghost) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        "marquee-bg": "rgb(var(--color-marquee-bg) / <alpha-value>)",
        "marquee-text": "rgb(var(--color-marquee-text) / <alpha-value>)",
        "marquee-accent": "rgb(var(--color-marquee-accent) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.25rem, 7vw, 6.5rem)", { lineHeight: "0.95" }],
        hero: ["clamp(1.875rem, 5vw, 4.5rem)", { lineHeight: "1.02" }],
        title: ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.15" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        body: ["1rem", { lineHeight: "1.7" }],
        label: ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.12em" }],
      },
      maxWidth: {
        content: "1280px",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
