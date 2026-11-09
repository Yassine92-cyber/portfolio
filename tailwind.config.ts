import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

// Palette: ink #090B10, surface #171A24, paper #F6F4F0, violet #9286FF, warm #E4ABAE.
// `white`, `black`, `indigo` and `rose` are remapped so legacy utility classes across
// existing pages inherit the new palette without per-file rewrites.
const violet = {
  50: "#F3F2FF",
  100: "#E8E5FF",
  200: "#D3CEFF",
  300: "#B8B0FF",
  400: "#9286FF",
  500: "#6A5BE2",
  600: "#5646C8",
  700: "#4536A3",
  800: "#352A7D",
  900: "#261E59",
  950: "#17123A",
};

const warm = {
  50: "#FCF4F4",
  100: "#F8E6E7",
  200: "#F1CFD1",
  300: "#EBBDBF",
  400: "#E4ABAE",
  500: "#D68A8F",
  600: "#BF6B71",
  700: "#9E5257",
  800: "#7A3F43",
  900: "#552C2F",
  950: "#331A1C",
};

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#F6F4F0",
        black: "#090B10",
        ink: {
          DEFAULT: "#090B10",
          2: "#0D1017",
        },
        surface: {
          DEFAULT: "#171A24",
          2: "#1E2230",
        },
        paper: "#F6F4F0",
        violet,
        warm,
        indigo: violet,
        rose: warm,
        line: "rgba(246, 244, 240, 0.09)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.75rem, 1.55rem + 4.4vw, 5.5rem)",
          { lineHeight: "1", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "clamp(2.5rem, 1.6rem + 3.4vw, 4.75rem)",
          { lineHeight: "1.02", letterSpacing: "-0.025em" },
        ],
        "display-md": [
          "clamp(2.125rem, 1.5rem + 2.4vw, 3.75rem)",
          { lineHeight: "1.06", letterSpacing: "-0.02em" },
        ],
        "display-sm": [
          "clamp(1.625rem, 1.3rem + 1.2vw, 2.375rem)",
          { lineHeight: "1.15", letterSpacing: "-0.015em" },
        ],
        lede: ["clamp(1.0625rem, 0.98rem + 0.4vw, 1.3125rem)", { lineHeight: "1.65" }],
        eyebrow: ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.14em" }],
      },
      maxWidth: {
        page: "84rem",
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [animate],
};

export default config;
