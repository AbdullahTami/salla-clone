import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F8F8F8",
          100: "#6B7280",
          150: "#666666",
          200: "#444444",
        },
        accent: {
          50: "#CFF7EE",
          100: "#BAF3E6",
          150: "#004D5A",
          200: "#004956",
        },
      },
      spacing: {
        perfect: "1190px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@kamona/tailwindcss-perspective")],
};
export default config;
