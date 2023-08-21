/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        color: {
          skin: {
            base: 'var(--color-primary)',
            fill: 'var(--color-primary-1)',
            complement: 'var(--color-complement)',
          }
        },
        textColor: {
          skin: {
            base: 'var(--color-primary-4)',
          }
        },
        backgroundColor: {
          skin: {
            fill: 'var(--color-primary-1)',
            'fill-dark': 'var(--color-complement-4)'
          }
        }
      },
    },
    plugins: [],
    darkMode: 'class',
  }