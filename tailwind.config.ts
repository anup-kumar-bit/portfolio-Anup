import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0d0d0d",
        panel: "#151515",
        panel2: "#1c1c1c",
        line: "#2a2a2a",
        bone: "#f3efe6",
        mute: "#9c978e", // 5.9:1 on panel2, 6.7:1 on ink — WCAG AA for 12px labels
        lime: "#c8f53c",
        sun: "#ffd23f",
        rose: "#ff6fb1",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      keyframes: {
        marquee: { to: { transform: "translateX(-50%)" } },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-7px)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
