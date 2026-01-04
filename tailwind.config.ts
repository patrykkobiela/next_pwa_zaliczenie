import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        allegro: {
          orange: '#ff5a00',
          'orange-dark': '#e64f00',
          'orange-light': '#ff7733',
        },
      },
    },
  },
  plugins: [],
}
export default config
