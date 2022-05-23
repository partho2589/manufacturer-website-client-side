module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
   themes: [
      {
        myTheme: {
          primary: "#90EE91",
          secondary: "#20B2AA",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  plugins: [require("daisyui")],
}
