import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Color.kt 의 디자인 시스템 컬러 매핑
        brand: {
          blue40: "#1565C0",
          blue80: "#9FCAFF",
          deepNavy: "#1B263B",
          deepNavyLight: "#415A77",
          slate: "#778DA9",
          slateSoft: "#E0E1DD",
          ink: "#0D1B2A",
        },
      },
      fontFamily: {
        sans: ['"Spoqa Han Sans Neo"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
