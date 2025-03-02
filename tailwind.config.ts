import { heroui } from "@heroui/react";

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
      perspective: {
        1000: "1000px",
      },
      translate: {
        "z-10": "translateZ(10px)",
        "z-20": "translateZ(20px)",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;
