// tailwind.config.js

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-teal": "#008080", // Teal color
        customBlue: "rgba(0, 28, 72, var(--tw-text-opacity))", // Custom blue color
      },
    },
  },
  plugins: [],
};
