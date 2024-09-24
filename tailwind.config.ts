import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        neutral: {
          100: "var(--neutral-100)",
          900: "var(--neutral-900)",
        },
        primary: {
          100: "var(--primary-100)",
          300: "var(--primary-300)",
          500: "var(--primary-500)",
          700: "var(--primary-700)",
          900: "var(--primary-900)",
        },
        background: "var(--background)",
      },
    },
  },
  plugins: [],
} satisfies Config;
