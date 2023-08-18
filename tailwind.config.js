/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      Background: '#d8eefe',
      Headline: '#094067',
      SubHeadline: '#5f6c7b',
      Contrast: '#005694',
      CardBackground: '#fffffe',
      CardHeading: '#094067',
      CardParagraph: '#5f6c7b',
      Stroke: '#094067',
      Main: '#fffffe',
      Highlight: '#3da9fc',
      Secondary: '#90b4ce',
      Tertiary: '#ef4565'
    },
    extend: {
      animation: {
        "slide-in-left": "slide-in-left 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both"
      },
      keyframes: {
        "slide-in-left": {
          "0%": {
            transform: "translateX(-1000px)",
            opacity: "0"
          },
          to: {
            transform: "translateX(0)",
            opacity: "1"
          }
        }
      }
    },
  },
  plugins: [],
}

