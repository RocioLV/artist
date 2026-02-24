/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          // 'serif' para títulos elegantes
          // 'sans' para el contenido suave y limpio
          serif: ['Lora', 'serif'],
          sans: ['Raleway', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }