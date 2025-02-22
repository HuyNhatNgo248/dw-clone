import { type Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'], // Clean, sans-serif fonts.
        serif: ['"Times New Roman"', 'serif'], // Occasional use for more formal typography.
      },
    },
  },
  plugins: [],
}

export default config
