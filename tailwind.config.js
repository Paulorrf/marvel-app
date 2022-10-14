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
        'banner': "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a773c308-2230-4544-b22c-7bc6be0505b5/dexer0v-e2013932-0509-4055-8386-e4bcf6ed4269.png/v1/fill/w_1024,h_395,q_80,strp/disney__marvel_banner_by_335467742_dexer0v-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzk1IiwicGF0aCI6IlwvZlwvYTc3M2MzMDgtMjIzMC00NTQ0LWIyMmMtN2JjNmJlMDUwNWI1XC9kZXhlcjB2LWUyMDEzOTMyLTA1MDktNDA1NS04Mzg2LWU0YmNmNmVkNDI2OS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.4JWz1rmvOLmOiUXMyprUSSpEyu7BCqMTidU5Nyw8wpg')",
        // prettier-ignore
        'character': "url('https://i.pinimg.com/736x/20/1e/6f/201e6f020335193c55a0f21e554abd2d.jpg')",
        // prettier-ignore
        'creator': "url('https://upload.wikimedia.org/wikipedia/commons/a/a0/Jack-Kirby_art-of-jack-kirby_wyman-skaar.jpg')",
        // prettier-ignore
        'comics': "url('https://mobileimages.lowes.com/productimages/457cc84f-275c-4e46-97fd-d43b9b717a9d/15634766.jpg')",
        // prettier-ignore
        'events':"url('https://i.pinimg.com/736x/ba/6d/fa/ba6dfac4d759e2680df36db2e2ac780f.jpg')",
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
