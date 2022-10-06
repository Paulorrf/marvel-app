/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // prettier-ignore
        'banner': "url('https://classic.exame.com/wp-content/uploads/2022/08/one-piece.jpg?quality=70&strip=info&w=1024')",
        // prettier-ignore
        // 'characters': "url('./src/assets/characters.jpg')",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
