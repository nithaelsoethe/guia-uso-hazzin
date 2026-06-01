/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hazzin: {
          'navy-deep': '#050D1A',
          navy: '#0B1A2E',
          'navy-mid': '#102A4D',
          'navy-soft': '#1A3057',
          'blue-900': '#1E40AF',
          'blue-700': '#2563EB',
          blue: '#3B82F6',
          'blue-glow': '#60A5FA',
          'blue-soft': '#93C5FD',
          'blue-faint': '#DBEAFE',
          ink: '#0F172A',
          surface: '#F8FAFC',
          mist: '#E2E8F0',
          'glow-conduit': '#60A5FA',
          'field-green': '#37870E',
          'field-green-deep': '#2D6F0C',
          whatsapp: '#25D366',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '1440px',
        container: '1280px',
      },
      boxShadow: {
        glow: '0 20px 60px -20px rgba(96,165,250,0.4)',
        'brand-md': '0 12px 30px -8px rgba(59,130,246,0.45)',
        'brand-lg': '0 20px 50px -12px rgba(59,130,246,0.55)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
