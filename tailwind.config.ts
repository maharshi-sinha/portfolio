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
      fontFamily: {
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', "sans-serif"],
        sans: ['"Plus Jakarta Sans"', '"Inter"', "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ['"Instrument Serif"', '"Newsreader"', '"Playfair Display"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', '"SFMono-Regular"', "Menlo", "monospace"],
        handwriting: ["Caveat", '"Shadows Into Light"', "cursive"],
      },
      colors: {
        paper: {
          light: "#FDFDFD",
          ivory: "#F8F7F4",
          card: "#FFFFFF",
          subtle: "#F0EEE7",
          border: "#CEC9BF",
          dark: "#121314",
          "dark-elevated": "#1A1B1E",
          "dark-subtle": "#222428",
          "dark-border": "#2D3035",
        },
        ink: {
          primary: "#141414",
          secondary: "#4A4A4A",
          muted: "#757575",
          faint: "#A5A5A5",
          white: "#F5F5F5",
          "white-muted": "#A0A0A0",
        },
        accent: {
          red: "#C2410C",
          pencil: "#64748B",
          yellow: "#FEF08A",
          cyan: "#0EA5E9",
        },
      },
      boxShadow: {
        notebook: "0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 1px 3px 0 rgba(0, 0, 0, 0.04)",
        "notebook-hover": "0 20px 40px -15px rgba(0, 0, 0, 0.12), 0 2px 6px 0 rgba(0, 0, 0, 0.06)",
        "tape": "0 1px 3px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.4)",
        "stamp": "inset 0 0 0 1.5px currentColor",
      },
    },
  },
  plugins: [],
};
export default config;
