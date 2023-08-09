import { fontFamily } from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Inter"', ...fontFamily.sans]
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms')]
}
