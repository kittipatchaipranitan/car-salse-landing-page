import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'gradient-change': 'gradient-change 1s ease-in-out forwards',
      },
      keyframes: {
        'gradient-change': {
          '0%': { backgroundPosition: 'top' },
          '100%': { backgroundPosition: 'bottom' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
