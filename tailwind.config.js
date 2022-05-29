module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				blue: {
					lighter: '#84B7C6',
					light: '#002F58',
					dark: '#00213D',
				},
				teal: {
					light: '#0BE6D8',
				},
				yellow: {
					dark: '#E6BF17',
				},
				red: {
					light: '#EC4530',
				},
				black: {
					faded: '#00000E6',
				},
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				'ropa-sans': ['Ropa Sans', 'serif'],
			},
		},
	},
	plugins: [],
}
