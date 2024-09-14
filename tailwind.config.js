/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Font colors
        fontPrimary: '#333333', // Dark Gray for general text
        fontSecondary: '#708090', // White for text on dark backgrounds
        fontHighlight: '#F5C518', // Gold-like color for headings or buttons
        fontHeading: '#003366',

        // Background colors
        bgPrimary: '#003366', // Deep Blue for background sections
        bgSecondary: '#87CEEB', // Sky Blue for lighter sections
        bgLight: '#F5F5F5', // Very light background for contrast

        // Other colors (border, hover, etc.)
        borderPrimary: '#D1D5DB', // Light gray for borders
        hoverPrimary: '#008080', // Teal for hover states
        buttonPrimary: '#F5C518', // Gold-like color for buttons
        error: '#FF0000', // Red for error messages
        success: '#4CAF50', // Green for success messages
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
