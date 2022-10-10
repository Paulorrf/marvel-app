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
        'background': "url('https://wallpaperaccess.com/full/1225711.jpg')",
        // prettier-ignore
        'jackKirby': "url('https://upload.wikimedia.org/wikipedia/commons/a/a0/Jack-Kirby_art-of-jack-kirby_wyman-skaar.jpg')",
        // prettier-ignore
        'stanLee': "url('https://thepopinsider.com/wp-content/uploads/2018/11/StanLee.jpg')",
        // prettier-ignore
        'steveDitko': "url('https://s2.glbimg.com/J65haVmGIHOMF3Im9ESLR_-gEUk=/e.glbimg.com/og/ed/f/original/2018/07/09/steven_1.jpg')",
        // prettier-ignore
        'royThomas': "url('https://hqrock.files.wordpress.com/2012/12/roy-thomas-younger.png?w=640')",
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
      colors: {
        // prettier-ignore
        'rgba-dark' : "rgba(0,0,0,0.4)",
        // prettier-ignore
        'rgba-darker':"rgba(0,0,0,0.8)",
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
