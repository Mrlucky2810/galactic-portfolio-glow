/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base colors using CSS variables
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--card) / <alpha-value>)",
          foreground: "rgb(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--popover) / <alpha-value>)",
          foreground: "rgb(var(--popover-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
          foreground: "rgb(var(--destructive-foreground) / <alpha-value>)",
        },
        border: "rgb(var(--border) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",

        // Custom neon colors
        neon: {
          cyan: "rgb(var(--neon-cyan) / <alpha-value>)",
          purple: "rgb(var(--neon-purple) / <alpha-value>)",
          pink: "rgb(var(--neon-pink) / <alpha-value>)",
          lime: "rgb(var(--neon-lime) / <alpha-value>)",
          orange: "rgb(var(--neon-orange) / <alpha-value>)",
          yellow: "rgb(var(--neon-yellow) / <alpha-value>)",
          green: "rgb(var(--neon-green) / <alpha-value>)",
          blue: "rgb(var(--neon-blue) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-nebula': 'linear-gradient(135deg, rgb(15 15 30) 0%, rgb(26 26 46) 25%, rgb(44 62 80) 50%, rgb(26 26 46) 75%, rgb(15 15 30) 100%)',
        'gradient-neon': 'linear-gradient(90deg, rgb(0 229 255) 0%, rgb(199 125 255) 50%, rgb(255 60 172) 100%)',
        'gradient-dark': 'linear-gradient(135deg, rgb(15 15 30 / 0.9) 0%, rgb(26 26 46 / 0.9) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'typewriter': 'typewriter 4s steps(40) infinite',
        'gradient-flow': 'gradient-flow 3s ease infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        typewriter: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '100%': { width: '0%' },
        },
        'gradient-flow': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        'pulse-glow': {
          '0%, 100%': { 'box-shadow': '0 0 20px rgb(0 229 255 / 0.3)' },
          '50%': { 'box-shadow': '0 0 40px rgb(0 229 255 / 0.8)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgb(0 229 255 / 0.3)',
        'glow-lg': '0 0 30px rgb(0 229 255 / 0.6)',
        'glow-xl': '0 0 40px rgb(0 229 255 / 0.8)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};