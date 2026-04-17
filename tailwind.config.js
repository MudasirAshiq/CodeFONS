/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#050510',
        surface: {
          DEFAULT: '#0a0a1a',
          light: '#0f1128',
          lighter: '#161638',
          hover: '#1c1c40',
        },
        primary: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          dark: '#4f46e5',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#a855f7',
          light: '#c084fc',
          dark: '#9333ea',
          foreground: '#ffffff',
        },
        accent: {
          cyan: '#22d3ee',
          pink: '#f43f5e',
          orange: '#f97316',
          green: '#34d399',
          blue: '#3b82f6',
        },
        muted: {
          DEFAULT: '#64748b',
          dark: '#94a3b8',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.06)',
          light: 'rgba(255, 255, 255, 0.1)',
          hover: 'rgba(255, 255, 255, 0.15)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Grotesk', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(1.75rem, 8vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '900' }],
        'section': ['clamp(1.5rem, 5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '800' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        'section': 'clamp(5rem, 10vw, 9rem)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'gradient-x': 'gradient-shift 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-gentle': 'float-gentle 10s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 25s linear infinite',
        'marquee': 'marquee 40s linear infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'breathe': 'breathe 6s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 60%)',
        'section-glow': 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(99, 102, 241, 0.3)',
        'glow-md': '0 0 30px -5px rgba(99, 102, 241, 0.3)',
        'glow-lg': '0 0 60px -10px rgba(99, 102, 241, 0.25)',
        'glow-cyan': '0 0 30px -5px rgba(34, 211, 238, 0.3)',
        'glow-purple': '0 0 30px -5px rgba(168, 85, 247, 0.3)',
        'card': '0 4px 60px -12px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 8px 80px -12px rgba(99, 102, 241, 0.15)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
