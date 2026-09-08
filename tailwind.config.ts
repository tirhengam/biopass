import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#FBF9F5",
          subtle: "#F7F5F0",
          alt: "#EFECE6",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          hairline: "#E9E6DF",
          hover: "#FAFAF8",
        },
        onyx: {
          DEFAULT: "#191817",
          soft: "#292725",
          muted: "#6E6B65",
          dim: "#A39E96",
        },
        sage: {
          50: "#F2F6F3",
          100: "#E3ECE6",
          500: "#3B6350",
          600: "#2D5A43",
          700: "#244835",
          900: "#13271C",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        micro: "0.18em",
        tightest: "-0.03em",
      },
      boxShadow: {
        editorial: "0 10px 30px -10px rgba(25, 24, 23, 0.05)",
        "editorial-hover": "0 20px 45px -15px rgba(25, 24, 23, 0.1)",
        "pill-inset": "inset 0 1px 1px rgba(255, 255, 255, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
