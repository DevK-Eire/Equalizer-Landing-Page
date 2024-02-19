import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1440px',
      },
      colors: {
        cyan: 'hsl(177, 68%, 64%)',
        lightRed: 'hsl(12, 94%, 65%)',
        orange: 'hsl(33, 100%, 70%)',
        lightGray: 'hsl(20, 33%, 98%)',
        darkBlue: 'hsl(244, 23%, 12%)',
      },
      backgroundImage: {
        desktop: "url('/bg-main-desktop.png')",
        tablet: "url('/bg-main-tablet.png')",
        mobile: "url('/bg-main-mobile.png')",
        pattern: 'url("/bg-pattern-1.svg")',
        patternTwo: "url('../../assets/bg-pattern-2.svg')",
      },
      letterSpacing: {
        tightest: '-0.0625rem',
        tighter: '-0.045625rem',
        tight: '-0.028125rem',
      },
      fontFamily: {
        'plex-sans': ['IBM Plex Sans', 'sans-serif'],
      },
      spacing: {
        '-1px': '-1px',
      },
    },
  },
  plugins: [],
};
export default config;
