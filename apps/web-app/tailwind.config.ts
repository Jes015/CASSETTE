import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#090909',
        'bg-secondary': '#0E0E0E',
        'bg-tertiary': '#1e1e1e',
        'border-primary': '#303030',
        'text-primary': '#e4e4e7'
      }
    },
  },
  plugins: [],
};
export default config;
