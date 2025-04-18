import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryDark: "#191928",
        lightGreen2: "#E7F7C6",
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
