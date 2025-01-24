/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'], // Tetap menyertakan Montserrat
        lato: ['"Lato"', 'sans-serif'], // Tambahkan Lato
        poppins: ['"Poppins"', 'sans-serif'], // Tambahkan Poppins
        smoochSans: ['"Smooch Sans"', 'sans-serif'], // Tambahkan Smooch Sans
        roboto:['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
