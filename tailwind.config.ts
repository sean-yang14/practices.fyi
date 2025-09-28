import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      mono: ['ui-monospace', 'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Consolas', 'Courier New', 'monospace'],
    },
    extend: {
      fontSize: {
        // Responsive typography system
        'fluid-xs': ['clamp(0.75rem, 0.7rem + 0.1vw, 0.875rem)', { lineHeight: '1.4' }],      // 12px-14px
        'fluid-sm': ['clamp(0.875rem, 0.8rem + 0.15vw, 1rem)', { lineHeight: '1.5' }],        // 14px-16px
        'fluid-base': ['clamp(1rem, 0.9rem + 0.2vw, 1.125rem)', { lineHeight: '1.6' }],       // 16px-18px
        'fluid-lg': ['clamp(1.125rem, 1rem + 0.3vw, 1.25rem)', { lineHeight: '1.5' }],        // 18px-20px
        'fluid-xl': ['clamp(1.25rem, 1.1rem + 0.4vw, 1.5rem)', { lineHeight: '1.4' }],        // 20px-24px
        'fluid-2xl': ['clamp(1.5rem, 1.3rem + 0.6vw, 1.875rem)', { lineHeight: '1.3' }],      // 24px-30px
        'fluid-3xl': ['clamp(1.875rem, 1.6rem + 0.8vw, 2.25rem)', { lineHeight: '1.25' }],    // 30px-36px
        'fluid-4xl': ['clamp(2.25rem, 2rem + 1vw, 2.75rem)', { lineHeight: '1.2' }],          // 36px-44px
        'fluid-5xl': ['clamp(2.75rem, 2.4rem + 1.2vw, 3.5rem)', { lineHeight: '1.15' }],      // 44px-56px
        'fluid-6xl': ['clamp(3.5rem, 3rem + 1.5vw, 4.5rem)', { lineHeight: '1.1' }],          // 56px-72px
        'fluid-7xl': ['clamp(4.5rem, 4rem + 2vw, 6rem)', { lineHeight: '1.05' }],             // 72px-96px

        // Semantic typography
        'display-1': ['clamp(4rem, 3.5rem + 2vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],  // Hero text
        'display-2': ['clamp(3rem, 2.5rem + 1.5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],   // Large headings
        'headline-1': ['clamp(2rem, 1.8rem + 0.8vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // Page titles
        'headline-2': ['clamp(1.5rem, 1.3rem + 0.6vw, 1.875rem)', { lineHeight: '1.25' }],                    // Section titles
        'headline-3': ['clamp(1.25rem, 1.1rem + 0.4vw, 1.5rem)', { lineHeight: '1.3' }],                     // Subsection titles
        'body-lg': ['clamp(1.125rem, 1rem + 0.3vw, 1.25rem)', { lineHeight: '1.6' }],                        // Large body text
        'body': ['clamp(1rem, 0.9rem + 0.2vw, 1.125rem)', { lineHeight: '1.6' }],                            // Regular body text
        'body-sm': ['clamp(0.875rem, 0.8rem + 0.15vw, 1rem)', { lineHeight: '1.5' }],                        // Small body text
        'caption': ['clamp(0.75rem, 0.7rem + 0.1vw, 0.875rem)', { lineHeight: '1.4' }],                      // Captions, labels
      },
      maxWidth: {
        'measure': '65ch',          // Optimal reading width
        'measure-wide': '75ch',     // Wider reading width
        'measure-narrow': '50ch',   // Narrow reading width
      },
      letterSpacing: {
        'tighter': '-0.025em',
        'tight': '-0.015em',
        'normal': '0',
        'wide': '0.015em',
        'wider': '0.025em',
        'widest': '0.05em',
      },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;