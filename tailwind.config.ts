import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "10%": "10%",
        "156px": "156px",
      },
      backgroundColor: {
        sidebar: "#e5dfdf",
      },
      padding: {
        sidebar: "2%",
      },
      borderRadius: {
        sidebar: "20px",
      },
      borderWidth: {
        sidebar: "2px",
      },
      borderColor: {
        sidebar: "white",
      },
      textColor: {
        sidebar: "black",
      },
      fontSize: {
        sidebar: "1.1vw",
        "2.5vw": "2.5vw",
        "48px": "48px",
      },
    },
  },
  plugins: [],
};

export default config;
