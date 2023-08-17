/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{ts,tsx}",
    ],
    theme: {
      extend: {
        textColor: {
          skin: {
            base: 'var(--color-text-base)'
          }
        },
        backgroundColor: {
          skin: {
            fill: 'var(--color-fill)'
          }
        }
      },
    },
    plugins: [],
    darkMode: 'class',
  }