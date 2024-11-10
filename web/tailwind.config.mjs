/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        kumbh: ['Kumbh Sans', 'sans-serif'],
        metropolis: ['Metropolis', 'sans-serif'],
      },
      colors: {
        'slate-900': '#32303E', // Dark Purple
        'black-900': '#000000', // Pure Black
        'pink-100': '#FBE7F1', // Light Pink
        'pink-500': '#FF626F', // Dark Pink
        'orange-500': '#FF9662', // Peach
        'pink-300': '#F2A1CB', // Gradient Start
        'pink-400': '#FE9694', // Gradient End
        'gradient-pink': 'linear-gradient(to right, #F2A1CB, #FE9694)',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/landing-background.png')",
      },
    },
  },
  plugins: [],
};
