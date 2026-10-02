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
        dark: {
          bg: '#07070D',
          surface: '#0F0C1B',
          surfaceHover: '#161226',
          elevated: '#1D1733',
          border: 'rgba(255, 255, 255, 0.08)',
          borderSubtle: 'rgba(255, 255, 255, 0.05)',
        },
        purple: {
          accent: '#A855F7',
          bright: '#C084FC',
          deep: '#7E22CE',
          glow: 'rgba(168, 85, 247, 0.25)',
        },
        fuchsia: {
          accent: '#E879F9',
        },
        indigo: {
          accent: '#818CF8',
        },
        emerald: {
          accent: '#10B981',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'purple-glow': '0 0 30px rgba(168, 85, 247, 0.25)',
        'purple-glow-sm': '0 0 14px rgba(168, 85, 247, 0.20)',
        'fuchsia-glow-sm': '0 0 14px rgba(232, 121, 249, 0.20)',
        'emerald-glow-sm': '0 0 14px rgba(16, 185, 129, 0.20)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
        'glass-card-hover': '0 12px 40px -10px rgba(168, 85, 247, 0.22)',
      }
    },
  },
  plugins: [],
}
