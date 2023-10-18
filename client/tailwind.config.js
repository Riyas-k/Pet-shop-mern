/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  fontFamily: {
    primary: 'Poppins',
  },
  container: {
    padding: {
      DEFAULT: '1rem',
      lg: '2rem',
    },
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1234px',
  },
  extend: {
    colors: {
      primary: '#101828',
      secondary: '#7F56D9',
    },
    backgroundImage: {
      'common-background': "url('./src/assets/images/background.jpg')",
    
    },
    boxShadow: {
      1: '0px 4px 30px rgba(0, 0, 0, 0.08)',
    },
    
  },
};
export const plugins = [];