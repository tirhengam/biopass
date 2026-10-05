import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Editorial Beauty-Tech System
        noir: {
          DEFAULT: "#060608",
          deep: "#030304",
          card: "#0D0D12",
          surface: "#121218",
          border: "rgba(255, 255, 255, 0.08)",
          hover: "#181822",
        },
        hotpink: {
          DEFAULT: "#FF007F",
          vibrant: "#FF006E",
          magenta: "#FF1493",
          light: "#FFA0D2",
          glow: "rgba(255, 0, 127, 0.35)",
          subtle: "rgba(255, 0, 127, 0.08)",
          deep: "#D6006B",
        },

        // Soft Aesthetic Pastel System (retained for backward compatibility)
        "pastel-pink": "#FFD5E5",
        "pastel-pink-subtle": "#FFEAF2",
        "pastel-pink-card": "#FFE3EE",
        "pastel-pink-border": "#F3ADC8",

        "pastel-green": "#D2F5DC",
        "pastel-green-subtle": "#E8FBEF",
        "pastel-green-card": "#C2EED0",
        "pastel-green-border": "#9FE0B3",

        "pastel-lavender": "#EAE0FF",
        "pastel-lavender-subtle": "#F5EFFF",
        "pastel-lavender-card": "#DFD0FF",
        "pastel-lavender-border": "#C8B4FA",

        "ink-navy": "#192231",
        "ink-soft": "#334155",
        "ink-muted": "#64748B",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "'Space Grotesk'", "system-ui", "-apple-system", "sans-serif"],
        body: ["var(--font-space-grotesk)", "'Space Grotesk'", "sans-serif"],
        display: ["var(--font-space-grotesk)", "'Space Grotesk'", "system-ui", "sans-serif"],
        fredoka: ["'Fredoka'", "'Nunito'", "sans-serif"],
        space: ["var(--font-space-grotesk)", "'Space Grotesk'", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.08em",
        wideish: "0.03em",
        tightish: "-0.02em",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 9s ease-in-out 3s infinite",
        "spin-very-slow": "spin 50s linear infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
