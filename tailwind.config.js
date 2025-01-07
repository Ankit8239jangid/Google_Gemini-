/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        loader: 'loader 4s infinite linear',
      },
      keyframes: {
        loader: {
          '0%': { backgroundPosition: '-800px 0' },
          '100%': { backgroundPosition: '800px 0' },
        },
      },
      backgroundSize: {
        custom: '800px 50px',
      },
      borderRadius: {
        custom: '10px',
      },
    },
  },
  plugins: [],
};
