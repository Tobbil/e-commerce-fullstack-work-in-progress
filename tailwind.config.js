/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        "h1": "56px",
        "h2": "28px",
        "fs-13": "13px",
        "fs-14": "14px",
        "fs-15": "15px",
        "fs-18": "18px",
      },
      fontWeight: {
        "fw-600": "600", 
      },
      gridTemplateRows: {
        "categories": "repeat(4, 0.3fr)",
        "4-0.1fr": "repeat(4, 0.1fr)"
      },
      gridTemplateColumns: {
        "menu": "repeat(4, 1fr)"
      },
      letterSpacing: {
        100: "1px",
        129: "1.29px",
        200: "2px",
        1000: "10px",
      },
      colors: {
        darkwhite: "#f2f2f2",
        grey: "#f1f1f1",
        orange: "#D87D4A"
      },
      backgroundImage: {
        "featured-zx9": "url('/FeaturedBigZX9.png')",
        "featured-zx7-grey": "url('/FeaturedZX7Grey.png')",
        "categories-shadow": "url('/CategoriesShadowBG.png')"
      },
      height: {
        "400": "400px",
        "350": "350px"
      },
      width: {
        "400": "400px",
        "350": "350px"
      }
    },
  },
  plugins: [],
};
