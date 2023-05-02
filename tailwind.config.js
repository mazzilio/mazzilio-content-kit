/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Pre-made colours that's been used from designs - the smaller the number, the
        // lighter the colour
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#57737A",
        "gray-500": "#241E4E",
        "primary-100": "#85BDBF",
        "primary-300": "#62B6CB",
        "primary-500": "#7A62D3",
        "secondary-400": "#EFAAC4",
        "secondary-500": "#E91466",
      },
      backgroundImage: (theme) => ({
        // Gradient may be used before/after CSS selector, this is how it's done in tailwind
        //
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        // Can create different backgrounds depending on screen size
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        // Header font
        montserrat: ["Montserrat", "sans-serif"],
      },
      // If we're reusing pics we can add them here
      content: {
        logo: "url('./assets/LogoUnderlay.svg')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    // Can specify breakpoints for media queries for specific screens and interactions
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
