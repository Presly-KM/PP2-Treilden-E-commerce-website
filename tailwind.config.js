/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
      "rabbit-red": "#ea2e0e",
    },
  },
},
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar ::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none", /* IE and Edge */
          "scrollbar-width": "none", /* Firefox */
        },
      };

      addUtilities(newUtilities);
    }
  ],
};