/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1597E4",
        fontPrimary: "#212121",
        fontError: "#D86161",
        fontPlaceHolder: "#7A7A7A",
        fontWhite: "#FAFAFA",
        backgroundColor: "#FFFFFF",
        borderGrey: "#E6E6E6",
      },
    },
  },
  plugins: [],
};
