import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "boost-60": "#ffffff",
        "boost-30": "#505a87",
        "boost-10": "#d9a521",
        "boost-litle": "#d17312",
        "boost-super": "#85e22e",
        "boost-gold": "#cb9d29",
        "boost-mega": "#32d1fe"
      },
    },
  },
  plugins: [],
};
export default config;
