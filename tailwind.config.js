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
        'blured': "url('data:image/jpeg;base64,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')",
        // 'characters': "url('./src/assets/characters.jpg')",
      },
      keyframes: {
        fadeIn: {
          // prettier-ignore
          '0%': { opacity: '0%' },
          // prettier-ignore
          '100%': { opacity: '100%' },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s",
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
