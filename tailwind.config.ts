import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(13rem, 20rem) 1fr',
        profile: 'max-content 1fr max-content',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 4rem)',
      },

      borderWidth: {
        6: '6px'
      },

      maxWidth: {
        app: '700px',
      },

      colors: {
        violet: {
          25: '#fcfaff',
        }
      }
    },
  },
  plugins: [],
};
export default config;