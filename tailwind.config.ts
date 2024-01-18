import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "primary-semi-cond": [
          "URW DIN SemiCond",
          ...defaultTheme.fontFamily.sans,
        ],
        "primary-cond": ["URW DIN Cond", ...defaultTheme.fontFamily.sans],
        primary: ["URW DIN", ...defaultTheme.fontFamily.sans],
        "owners-wide": ["OwmersWide", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "4.5xl": ["44px", "36px"],
        "5.5xl": ["52px", "48px"],
        "10xl": ["144px", "32px"],
        "11xl": ["160px", "32px"],
      },
      backgroundImage: {
        button: "url('/assets/svg/button-pattern.svg')",
        "button-steam": "url('/assets/svg/button-pattern-steam.svg')",
        "button-discord": "url('/assets/svg/button-pattern-discord.svg')",
        "ready-email-input": "url('/assets/svg/ready-email-input.svg')",
        "corporate-gunn":
          "url('/assets/png/corporate-card-gunn-background.png')",
        "corporate-vector":
          "url('/assets/png/corporate-card-vector-background.png')",
        "corporate-shift":
          "url('/assets/png/corporate-card-shift-background.png')",
        "mobile-hero-background":
          "url('/assets/png/mobile-hero-background.png')",
        "mobile-card-background":
          "url('/assets/png/mobile-card-background.png')",
      },
      colors: {
        green: {
          primary: "#31e78b",
        },
        dark: {
          primary: "#08090d",
          secondary: "#212332",
        },
      },
      screens: {
        "2xl": "1440px",
        "3xl": "1680px",
      },
      keyframes: {
        overlayShow: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        contentShow: {
          from: {
            opacity: "0",
            transform: "translate(-50%, -48%) scale(0.96)",
          },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
