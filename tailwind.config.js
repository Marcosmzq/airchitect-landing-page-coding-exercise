module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        rose: "#FF1D58",
        darkBlue: "#021E58",
      },
      fontFamily: {
        poppins: ["Poppins"],
        nunito: ["Nunito"],
      },
      backgroundImage: (theme) => ({
        hero: "url('/images/bg-2.jpeg')",
        project1: "url('/images/project-1.jpeg')",
        project2: "url('/images/project-2.jpeg')",
        project3: "url('/images/project-3.jpeg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
