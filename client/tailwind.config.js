/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
    colors: {
      white: '#fefcfb',
      whitish: '#FFFAFF',
      blue: '#0496FF',
      chryserBlue: '#3B28CC',
      orange: '#FF9F1C',
      darkOrange: '#E57C04',
      rose: '#E71D36',
      black: '#011627',
      darkBrown: '#FFFAFF',
      gray: '#E1DEE3',
    },
    fontFamily: {
      poppins: 'Poppins',
      shrikland: 'Shrikland',
      fasthand: 'Fasthand',
    },
    backgroundImage: {
      'bg-registration1': "url('/assets/images/cook.jpg')",
      'bg-registration2': "url('/assets/images/pizza.jpg')",
      'bg-registration3': "url('/assets/images/art.jpg')",
    },
  },
  plugins: [],
};
