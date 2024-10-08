/** @type {import('tailwindcss').Config} */
module.exports = {
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
  		center: 'true',
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px',
  			'xs': {
  				'max': '480px'
  			},
  			'xls': {
  				'max': '900px'
  			}
  		}
  	},
  	extend: {
  		backgroundColor: {
  			'light': 'rgb(238, 242, 247)',
  			'hero': 'rgb(255 61 84 / 1)',
  			'primary': 'rgb(59 57 88 / 1)',
  			'videos-dark': 'rgb(41 41 61 / 1)',
  			'channel-dark': 'rgb(41 41 61 / 1)'
  		},
  		backgroundImage: {
  			'medium': 'linear-gradient(120deg, rgba(255,61,84,1) 31%, rgba(255,61,84,0.78442227232689951) 32%),url("/assets/abrish-new.jpg")',
  			'hero-img': ' radial-gradient(circle at 70% 50%, #fff9c3 11%, transparent 41%), radial-gradient(circle at 68% 50%, rgba(255, 250, 195, .1) 13%, transparent 52%)',
        // 'hero-gradient': 'radial-gradient(circle at 70% 50%, #fff9c3 11%, transparent 41%), radial-gradient(circle at 68% 50%, rgba(255, 250, 195, 0.1) 13%, transparent 52%), rgb(255, 61, 84)'
  		},
  		colors: {
        "light-rgb":"rgb(47, 57, 67 / 1)",
  			'hero': 'rgb(255 61 84 / 1)',
  			'card-logo': 'rgb(255 61 84  / 1)',
  			'success': '#22c55e',
  			'card-footer': '#EEF2F780',
  			'primary': 'rgb(59 57 88 / 1)',
  			'primary-p': 'rgb(118 117 136 / 1)',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
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
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}