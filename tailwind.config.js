/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    content: [
      "./index.html",
      "./src/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          skin: {
            base: 'var(--color-primary)',
            fill: 'var(--color-primary-1)',
            complement: 'var(--color-complement)',
            accent: 'var(--color-primary-2)',
            'accent-inverted': 'var(--color-primary-3)',
            'fill-inverted': 'var(--color-primary-4)',
          }
        },
        textColor: {
          skin: {
            base: 'var(--color-primary-4)',
            'base-dark': 'var(--color-primary-1)',
          }
        },
        backgroundColor: {
          skin: {
            fill: 'var(--color-primary-1)',
            'dark-fill': 'var(--color-dark-primary)',
            'dark-base': 'var(--color-dark-secondary)',
            base: 'var(--color-primary)',
            accent: 'var(--color-primary-2)',
            'accent-inverted': 'var(--color-primary-3)',
            'fill-inverted': 'var(--color-primary-4)',
          }
        },
        fontFamily: {
          'sans': ['Farro', ...defaultTheme.fontFamily.sans],
        }
      },
    },
    plugins: [],
    darkMode: 'class',
  }