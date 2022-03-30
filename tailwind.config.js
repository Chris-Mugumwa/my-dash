module.exports = {
	mode: 'jit',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				blue: {
					lighter: '#84B7C6',
					light: '#002f58',
					dark: '#00213d',
				},
				teal: {
					light: '#0be6d8',
				},
				yellow: {
					dark: '#e6bf17',
				},
				red: {
					light: '#EC4530',
				},
				black: {
					faded: '#000000e6',
					dark: '#000',
				},
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				'ropa-sans': ['"Ropa Sans"', 'serif'],
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
}
