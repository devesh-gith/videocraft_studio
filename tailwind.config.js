/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* subtle surface elevation */
        input: "var(--color-input)", /* card backgrounds and content areas */
        ring: "var(--color-ring)", /* selective gold for focus states */
        background: "var(--color-background)", /* true black for video showcase */
        foreground: "var(--color-foreground)", /* white for high contrast readability */
        primary: {
          DEFAULT: "var(--color-primary)", /* deep studio black for premium canvas */
          foreground: "var(--color-primary-foreground)", /* white for primary text */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* subtle surface elevation and depth */
          foreground: "var(--color-secondary-foreground)", /* white for secondary text */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* clear problem identification */
          foreground: "var(--color-destructive-foreground)", /* white for destructive text */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* subtle surface elevation */
          foreground: "var(--color-muted-foreground)", /* supporting information and metadata */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* selective gold for premium moments */
          foreground: "var(--color-accent-foreground)", /* black for accent text */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* deep studio black for overlays */
          foreground: "var(--color-popover-foreground)", /* white for popover text */
        },
        card: {
          DEFAULT: "var(--color-card)", /* card backgrounds and content areas */
          foreground: "var(--color-card-foreground)", /* white for card text */
        },
        success: {
          DEFAULT: "var(--color-success)", /* project completion and positive feedback */
          foreground: "var(--color-success-foreground)", /* black for success text */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* timeline urgency without alarm */
          foreground: "var(--color-warning-foreground)", /* black for warning text */
        },
        error: {
          DEFAULT: "var(--color-error)", /* clear problem identification and resolution */
          foreground: "var(--color-error-foreground)", /* white for error text */
        },
        surface: "var(--color-surface)", /* card backgrounds and content areas */
        'text-primary': "var(--color-text-primary)", /* high contrast for readability */
        'text-secondary': "var(--color-text-secondary)", /* supporting information and metadata */
        conversion: {
          DEFAULT: "var(--color-conversion)", /* energetic orange for CTAs */
          foreground: "var(--color-conversion-foreground)", /* white for conversion text */
        },
        trust: {
          DEFAULT: "var(--color-trust)", /* professional blue for credibility */
          foreground: "var(--color-trust-foreground)", /* white for trust text */
        },
      },
      fontFamily: {
        headline: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        'rhythm': '1.5rem',
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      aspectRatio: {
        'video': '16 / 9',
        'golden': '1.618 / 1',
        'portrait': '3 / 4',
        'square': '1 / 1',
      },
      boxShadow: {
        'cinematic': '0 4px 20px rgba(0, 0, 0, 0.4)',
        'premium': '0 4px 20px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 20px rgba(212, 175, 55, 0.3)',
        'conversion': '0 4px 20px rgba(255, 107, 53, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionTimingFunction: {
        'cinematic': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      backdropBlur: {
        'xs': '2px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}