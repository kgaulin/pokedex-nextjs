/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#DC0A2D',
      'type-bug': '#A7B723',
      'type-dark': '#75574C',
      'type-dragon': '#7037FF',
      'type-electric': '#F9CF30',
      'type-fairy': '#E69EAC',
      'type-fighting': '#C12239',
      'type-fire': '#F57D31',
      'type-flying': '#A891EC',
      'type-ghost': '#70559B',
      'type-normal': '#AAA67F',
      'type-grass': '#74CB48',
      'type-ground': '#DEC16B',
      'type-ice': '#9AD6DF',
      'type-poison': '#A43E9E',
      'type-psychic': '#FB5584',
      'type-rock': '#B69E31',
      'type-steel': '#B7B9D0',
      'type-water': '#6493EB',
      dark: '#212121',
      medium: '#666666',
      light: '#E0E0E0',
      background: '#EFEFEF',
      white: '#FFFFFF',
      overlay: 'rgba(0, 0, 0, 0.4)',
    },
    fontSize: {
      headline: [
        '24px',
        {
          lineHeight: '32px',
          fontWeight: '700',
        },
      ],
      'subtitle-1': [
        '14px',
        {
          lineHeight: '16px',
          fontWeight: '700',
        },
      ],
      'subtitle-2': [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: '700',
        },
      ],
      'subtitle-3': [
        '10px',
        {
          lineHeight: '16px',
          fontWeight: '700',
        },
      ],
      'body-1': [
        '14px',
        {
          lineHeight: '16px',
          fontWeight: '400',
        },
      ],
      'body-2': [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: '400',
        },
      ],
      'body-3': [
        '10px',
        {
          lineHeight: '16px',
          fontWeight: '400',
        },
      ],
      caption: [
        '8px',
        {
          lineHeight: '12px',
          fontWeight: '400',
        },
      ],
    },
    boxShadow: {
      'dp-2': ' 0px 1px 3px 1px rgba(0, 0, 0, 0.2)',
      'dp-6': '0px 3px 12px 3px rgba(0, 0, 0, 0.2)',
      'inset-dp-2': 'inset 0px 1px 3px 1px rgba(0, 0, 0, 0.25)',
      none: '	none',
    },
    extend: {
      gridTemplateColumns: {
        auto: 'repeat(auto-fill, minmax(100px, 1fr))',
      },
      animation: {
        fade: 'fadeOut 0.5s ease-out',
        color: 'colorSlide 1s ease-in-out',
      },
      keyframes: () => ({
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        colorSlide: {
          '0%': { width: 0 },
          '100%': { width: '100%' },
        },
      }),
    },
  },
  plugins: [],
}
