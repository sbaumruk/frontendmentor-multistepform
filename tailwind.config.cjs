/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      borderRadius: {
        1: '1px'
      },
      fontWeight: {
        semibold: 500
      }
    },
    colors: {
      marine: 'hsl(213, 96%, 18%)',
      purplish: 'hsl(243, 100%, 62%)',
      pastel: 'hsl(228, 100%, 84%)',
      lightBlue: 'hsl(206, 94%, 87%)',
      strawberry: 'hsl(354, 84%, 57%)',
      coolGray: 'hsl(231, 11%, 63%)',
      lightGray: 'hsl(229, 24%, 87%)',
      magnolia: 'hsl(217, 100%, 97%)',
      alabaster: 'hsl(231, 100%, 99%)',
      white: '#fff'
    },
  },
  plugins: [],
}
