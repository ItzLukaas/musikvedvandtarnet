import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        accent: {
          yellow: 'hsl(var(--accent-yellow))',
          red: 'hsl(var(--accent-red))',
        },
        illustration: {
          light: 'hsl(var(--illustration-light))',
          medium: 'hsl(var(--illustration-medium))',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        condensed: ['var(--font-rajdhani)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
