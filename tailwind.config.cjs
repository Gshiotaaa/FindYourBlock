/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundColor: {
        header: "#f8f8ff",
        input: "#F4F4FF",
        button: "#6246EA",
      },
      colors: {
        purple: "#6246EA",
      },
      backgroundImage: {
        header: "url(./assets/imgBackgroundHeader.png)",
      },
    },
  },
  plugins: [],
};
