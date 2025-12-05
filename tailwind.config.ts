import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bridge & Clarity Palette
        'bridge-blue': '#1A324A',
        'clarity-white': '#FAF9F7',
        'signal-teal': '#3AAFA9',
        'bridge-gold': '#F6C667',
        'kind-gray': '#4E5A62',
        'warm-blush': '#F4DAD8',
        'calm-sky-start': '#D9EFFF',
        'calm-sky-end': '#B6D6F2',
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['IBM Plex Sans', 'sans-serif'],
        'quote': ['DM Serif Display', 'serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      borderRadius: {
        'organic': '60% 40% 30% 70%/60% 30% 70% 40%',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;

