/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCFA',
          100: '#F5F0E8',
          200: '#EDE8DE',
          300: '#E0D9CC',
        },
        navy: {
          700: '#3D4F6F',
          800: '#243352',
          900: '#1A2744',
          950: '#111827',
        },
        copper: {
          400: '#D4956A',
          500: '#B87333',
          600: '#9A5F2A',
          700: '#7C4A1F',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Source Serif Pro', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(184, 115, 51, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(184, 115, 51, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
