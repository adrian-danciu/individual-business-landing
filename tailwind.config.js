/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fffffe",
        buttonText: "#fffffe",
        button: "#3da9fc",
        highlight: "#3da9fc",
        headline: "#094067",
        paragraph: "#5f6c7b",
        accent: "ef4565",
        vintage: "#faeee7",
        backgroundBlue: "#d8eefe",
      },
    },
  },
  plugins: [],
};
