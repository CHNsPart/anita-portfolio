// tailwind.config.ts
import type { Config } from "tailwindcss";

const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  white: '#FFFFFF',
  black: '#000000',
  primary: {
    DEFAULT: '#FCA311',
    50: '#FFEFD7',
    100: '#FEE3BE',
    200: '#FDD28D',
    300: '#FDC15C',
    400: '#FCB22B',
    500: '#FCA311',
    600: '#D48503',
    700: '#A16402',
    800: '#6E4402',
    900: '#3B2401',
    950: '#221501'
  },
  navy: {
    DEFAULT: '#14213D',
    50: '#4B6BC2',
    100: '#3E5FB8',
    200: '#344F99',
    300: '#2A3F7A',
    400: '#1F305B',
    500: '#14213D',
    600: '#0D152B',
    700: '#060A14',
    800: '#000000',
    900: '#000000',
    950: '#000000'
  },
  gray: {
    DEFAULT: '#E5E5E5',
    50: '#FFFFFF',
    100: '#FFFFFF',
    200: '#FFFFFF',
    300: '#FFFFFF',
    400: '#F8F8F8',
    500: '#E5E5E5',
    600: '#C9C9C9',
    700: '#ADADAD',
    800: '#919191',
    900: '#757575',
    950: '#666666'
  }
};

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        // System semantic colors
        background: {
          DEFAULT: 'hsl(var(--background))',
          secondary: 'hsl(var(--background-secondary))'
        },
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;