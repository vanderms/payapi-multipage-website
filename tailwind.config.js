/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      neutral: {
        25: "var(--neutral-25)",
        50: "var(--neutral-50)",
        500: "var(--neutral-500)",
        700: "var(--neutral-700)",
        900: "var(--neutral-900)",
      },
      primary: {
        300: "var(--primary-300)",
        700: "var(--neutral-700)",
      },
    },
    fontFamily: {
      sans: "var(--sans)",
      serif: "var(--serif)",
    },
    extend: {},
  },
  plugins: [],
};
