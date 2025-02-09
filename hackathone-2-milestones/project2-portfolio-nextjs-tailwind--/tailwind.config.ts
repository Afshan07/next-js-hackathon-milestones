import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
  	extend: {

		fontFamily: {
			exo: ['"Exo 2"', 'sans-serif'], // Add Exo 2 font
			poppins: ['Poppins', 'sans-serif'],
		  },
		   underlineoffSet: {
			12: '12px', // Adding custom underline-offset-12
		  },
			boxShadow: {
			sparkle: '0 0 15px 5px rgba(255, 255, 255, 0.9)',
					  },

			animation: {
			'slow-spin': 'spin 10s linear infinite',
			'wobble': 'wobble 5s ease-in-out infinite',
					  },  

  		    colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
		    customGreen: '#b3ffab', // Starting color
		    customBlue: '#12fff7',  // Ending color
			customYellow: '#EFE2BA',
			darkGray: '#1E1E1E',
			deepBlue: '#170550',
			deepPurple: '#31065A',
			vibrantOrange: '#F86F03',
			brightOrange: '#F86F03',
			darkPurple: '#16044F',
			customPurple: '#43366A',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
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
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  keyframes: {
			wobble: {
			   '0%': { transform: 'rotate(0deg)' },
			   '25%': { transform: 'rotate(20deg)' },
			   '50%': { transform: 'rotate(0deg)' },
			  '75%': { transform: 'rotate(-20deg)' },
			  '100%': { transform: 'rotate(0deg)' },
			},
		  },
  	},
  },
  plugins: [],
};
export default config;

