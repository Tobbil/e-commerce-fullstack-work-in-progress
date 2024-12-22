/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        "h1": "56px",
        "h1-mobile": "36px",
        "h2": "28px",
        "fs-13": "13px",
        "fs-14": "14px",
        "fs-15": "15px",
        "fs-18": "18px",
        "fs-28": "28px",
        "fs-40": "40px",
      },
      fontWeight: {
        "fw-600": "600", 
      },
      gridTemplateRows: {
        "categories": "repeat(4, 0.3fr)",
        "4-0.1fr": "repeat(4, 0.1fr)",
        "3-0.1fr": "repeat(3, 0.1fr)"
      },
      gridTemplateColumns: {
        "menu": "repeat(4, 1fr)",
        "navbar-mobile": "1fr 1fr 1fr",
        "navbar-tablet": "0.2fr 1fr 1fr",
        "navbar-desktop": "1fr 2fr 1fr"
      },
      letterSpacing: {
        "100": "1px",
        "129": "1.29px",
        "143": "1.43px",
        "200": "2px",
        "1000": "10px",
      },
      colors: {
        darkwhite: "#f2f2f2",
        grey: "#f1f1f1",
        orange: "#D87D4A"
      },
      backgroundImage: {
        "featured-zx9": "url('/FeaturedBigZX9.png')",
        "featured-zx7-grey": "url('/FeaturedZX7Grey.png')",
        "categories-shadow": "url('/CategoriesShadowBG.png')",
        "featured-first-mobile": "url('/FeaturedFirstBgMobile.png')"
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
