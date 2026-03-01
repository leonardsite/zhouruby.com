import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#A5D97F',
          'green-dark': '#7CB94F',
          pink: '#FF7F9F',
          yellow: '#FFD700',
          blue: '#ADD8E6',
          'blue-dark': '#4682B4',
          black: '#000000',
        },
      },
      fontFamily: {
        display: ['Fredoka', 'Comic Neue', 'sans-serif'],
        body: ['Nunito', 'Noto Sans SC', 'Noto Sans JP', 'Noto Sans Tamil', 'Noto Sans Malay', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
