/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}', '!./src/routes/resistance/+page.svelte'],
  theme: {
    extend: {
      colors: {
        'bg-gr-1': '#1a1a1a',
        'bg-gr-2': '#080808',
        'bg-gr-1l': '#f1f1f1',
        'bg-gr-2l': '#d1d1d1'
      }
    },
  },
  plugins: [],
  darkMode: 'selector'
}

