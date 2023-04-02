/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			'2xl': { max: '1535px' },
			// => @media (max-width: 1535px) { ... }

			xl: { max: '1100px' },
			// => @media (max-width: 1279px) { ... }

			lg: { max: '1000px' },
			// => @media (max-width: 1023px) { ... }

			md: { max: '767px' },
			// => @media (max-width: 767px) { ... }

			sm: { max: '639px' }
			// => @media (max-width: 639px) { ... }
		},
		fontFamily: {
			sans: ['Inter var, sans-serif']
		},
		extend: {
			colors: {
				primary: {
					100: '#F3F1FE',
					500: '#745CF1'
				},
				purple: {
					100: '#474374',
					500: '#35344C'
				}
			}
		}
	},
	plugins: []
};
