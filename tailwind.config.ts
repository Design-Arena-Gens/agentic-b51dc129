import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      colors: {
        light: {
          bg: '#FAFAF9',
          surface: '#FFFFFF',
          border: '#E7E5E4',
          'text-primary': '#1C1917',
          'text-secondary': '#57534E',
          'text-tertiary': '#A8A29E',
          accent: '#2563EB',
          'accent-hover': '#1D4ED8',
        },
        dark: {
          bg: '#0C0A09',
          surface: '#1C1917',
          border: '#292524',
          'text-primary': '#FAFAF9',
          'text-secondary': '#A8A29E',
          'text-tertiary': '#78716C',
          accent: '#3B82F6',
          'accent-hover': '#60A5FA',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config
