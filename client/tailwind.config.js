/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/**/*.{html,js}',
		'./public/*.{html,js}',
	],
	theme: {
		fontSize: {
			sm: ['1.2rem', {
				lineHeight: '2rem',
				letterSpacing: '0.05rem',
				fontWeight: '300',			
			}],
			base: ['1.6rem', {
				lineHeight: '2.4rem',
				letterSpacing: '0.05rem',
				fontWeight: '300',
			}],
			lg: ['1.8rem', {
				lineHeight: '2.6rem',
				letterSpacing: '0.04rem',
				fontWeight: '300',
			}],
			xl: ['2.1rem', {
				lineHeight: '2.9rem',
				letterSpacing: '0.03rem',
				fontWeight: '300',
			}],
			'2xl': ['2.4rem', {
				lineHeight: '3.2rem',
				letterSpacing: '0.02rem',
				fontWeight: '300',
			}],
			'3xl': ['3.2rem', {
				lineHeight: '3.6rem',
				letterSpacing: '0.01rem',
				fontWeight: '300',
			}],
		},
		extend: {
			colors: {
				'dark': '#2E2E2E',
				'darker': '#171717',
				'darkest': '#000000',
				'light': '#454545',
				'lighter': '#737373',
				'lightest': '#FFFFFF',
				'azure': '#088FFA',
				'perrywinkle': '#666BC8',
				'deeplavender': '#905FB8',
			},
			fontFamily: {
				'header': ['Montserrat', 'sans-serif'],
				'primary': ['Open Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
