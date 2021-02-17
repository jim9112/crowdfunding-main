module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      main: ['Commissioner, sans-serif'],
    },
    colors: {
      'moderate-cyan': 'hsl(176, 50%, 47%)',
      'dark-cyan': 'hsl(176, 72%, 28%)',
      black: 'hsl(0, 0%, 0%)',
      'dark-gray': 'hsl(0, 0%, 48%)',
    },
    screens: {
      tablet: '641px',
      comp: '1008px',
    },
    extend: {
      backgroundImage: (theme) => ({
        'hero-small': "url('images/image-hero-mobile.jpg')",
        'hero-large': "url('images/image-hero-desktop.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
