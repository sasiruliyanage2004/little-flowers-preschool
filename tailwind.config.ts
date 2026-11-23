import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFDF9",
          DEFAULT: "#FFF9F0",
          100: "#FDF4E3",
          200: "#FBEACB",
        },
        pink: {
          soft: "#F9DCE5",
          hover: "#F5C8D6",
          dark: "#E8A2B8",
        },
        coral: {
          light: "#F7B2A4",
          DEFAULT: "#F28B78",
          dark: "#D96853",
          deep: "#C44F3A",
        },
        yellow: {
          sunshine: "#FFD66B",
          light: "#FFE396",
          dark: "#E8B838",
        },
        mint: {
          soft: "#CBE8D5",
          hover: "#B5DEC1",
          dark: "#8EC6A0",
        },
        sky: {
          soft: "#D9ECFA",
          hover: "#C3E1F7",
          dark: "#9BCBF0",
        },
        charcoal: {
          DEFAULT: "#34333A",
          light: "#5A5862",
          muted: "#7E7B8A",
          border: "#E7E4EB",
        },
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "var(--font-noto-sinhala)", "sans-serif"],
        body: ["var(--font-nunito)", "var(--font-noto-sinhala)", "sans-serif"],
        sinhala: ["var(--font-noto-sinhala)", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "float-reverse": "floatReverse 5s ease-in-out infinite",
        "gentle-spin": "spin 25s linear infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(3deg)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(12px) rotate(-3deg)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(0.97)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
