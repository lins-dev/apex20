import type { Config } from "tailwindcss";
import { colors } from "./src/tokens/colors";
import { typography } from "./src/tokens/typography";
import { spacing } from "./src/tokens/spacing";
import { shadows, borderRadius } from "./src/tokens/shadows";
import tailwindAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/web/**/*.{ts,tsx}",
    "./src/mobile/**/*.{ts,tsx}",
    "../../apps/web/**/*.{ts,tsx}",
    "../../apps/mobile/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors,
      spacing,
      boxShadow: shadows,
      borderRadius,
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      lineHeight: typography.lineHeight,
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindAnimate],
};

export default config;
