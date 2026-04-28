/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        moss: {
          50: "#f3f7f1",
          100: "#e3ecdf",
          200: "#c7d9bf",
          300: "#9bbe8e",
          400: "#6ea05c",
          500: "#4d8540",
          600: "#3a6a2f",
          700: "#2f5527",
          800: "#274422",
          900: "#1f361c",
          950: "#0e1e0c",
        },
        sand: {
          50: "#fbf8f1",
          100: "#f4ecd8",
          200: "#e9d9b2",
          300: "#dabd83",
          400: "#cda058",
        },
      },
      boxShadow: {
        soft: "0 30px 60px -30px rgba(15, 35, 12, 0.35)",
      },
    },
  },
  plugins: [],
};
