
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				retro: {
					purple: '#5656E9',
					pink: '#FF199B',
					dark: '#1A1F2C',
					light: '#D6BCFA',
					accent: '#33C3F0',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						'text-shadow': '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #5656E9, 0 0 82px #5656E9, 0 0 92px #5656E9, 0 0 102px #5656E9, 0 0 151px #5656E9' 
					},
					'50%': { 
						'text-shadow': '0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #FF199B, 0 0 80px #FF199B, 0 0 90px #FF199B, 0 0 100px #FF199B, 0 0 150px #FF199B' 
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'retro-glitch': {
					'0%': { transform: 'translate(0)' },
					'2%': { transform: 'translate(2px, 2px)' },
					'4%': { transform: 'translate(-2px, -2px)' },
					'6%': { transform: 'translate(2px, -2px)' },
					'8%': { transform: 'translate(-2px, 2px)' },
					'10%': { transform: 'translate(0)' },
					'100%': { transform: 'translate(0)' }
				},
				'scanline': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'fade-in': 'fade-in 0.5s ease-out',
				'retro-glitch': 'retro-glitch 8s ease infinite',
				'scanline': 'scanline 8s linear infinite'
			},
			fontFamily: {
				'retro': ['Press Start 2P', 'ui-monospace', 'monospace'],
				'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
