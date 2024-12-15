/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: '#E2E8F0',
        foreground: '#666666',
        darkBackground: '#000',
        card: { DEFAULT: '#fff', foreground: '#666666' },
        popover: {
          DEFAULT: '#fff',
          foreground: '#666666'
        },
        primary: { DEFAULT: '#526bd8', foreground: '#fff' },
        success: { DEFAULT: '#21912a', foreground: '#fff' },
        warn: { DEFAULT: '#f59e0b', foreground: '#fff' },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: '#dcdeff',
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
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))'
        },
        animation: {
          'pulse-wave': 'pulse-wave 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        },
        keyframes: {
          'pulse-wave': {
            '0%, 100%': { transform: 'scale(1)', opacity: 1 },
            '50%': { transform: 'scale(1.8)', opacity: 0.5 }
          }
        },
        sidebar: {
          DEFAULT: '#fff',
          foreground: '#666666',
          primary: '#526bd8',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      }
    }
  }
  // plugins: [require('tailwindcss-animate')]
}
