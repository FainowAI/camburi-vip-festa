import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Brand colors
        "brand-purple": "hsl(var(--brand-purple))",
        "brand-green": "hsl(var(--brand-green))",
        "brand-purple-dark": "hsl(var(--brand-purple-dark))",
        "brand-green-light": "hsl(var(--brand-green-light))",
      },
      fontFamily: {
        'brand': ['Impact', 'Oswald', 'Arial Black', 'sans-serif'],
        'body': ['Inter', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 4rem)', '1.1'],
        'section': ['clamp(1.8rem, 3vw, 2.5rem)', '1.2'],
        'cta': ['1.2rem', '1.4'],
      },
      backgroundImage: {
        'hero-gradient': 'var(--gradient-hero)',
        'purple-green-gradient': 'var(--gradient-purple-green)',
        'dark-gradient': 'var(--gradient-dark)',
      },
      boxShadow: {
        'purple': 'var(--shadow-purple)',
        'green': 'var(--shadow-green)',
        'lift': 'var(--shadow-lift)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "slide-in-left": "slide-in-left 0.8s ease-out",
        "slide-in-right": "slide-in-right 0.8s ease-out",
        "float": "float 6s infinite ease-in-out",
        "pulse-green": "pulse-green 2s infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(50px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        },
        "float": {
          "0%, 100%": { 
            transform: "translateY(0px) translateX(0px)", 
            opacity: "0.7" 
          },
          "25%": { 
            transform: "translateY(-20px) translateX(10px)", 
            opacity: "0.9" 
          },
          "50%": { 
            transform: "translateY(-10px) translateX(-10px)", 
            opacity: "0.6" 
          },
          "75%": { 
            transform: "translateY(-30px) translateX(5px)", 
            opacity: "0.8" 
          }
        },
        "pulse-green": {
          "0%, 100%": { 
            "box-shadow": "0 0 0 0 hsl(var(--brand-green) / 0.7)" 
          },
          "70%": { 
            "box-shadow": "0 0 0 10px hsl(var(--brand-green) / 0)" 
          }
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
