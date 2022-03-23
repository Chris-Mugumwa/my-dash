module.exports = {
	mode: 'jit',
	darkMode: false,
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			// screens: {
			// 	xxs: '320px',
			// 	xxxs: '350px',
			// },
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
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				'ropa-sans': ['"Ropa Sans"', 'serif'],
			},
		},
	},
	plugins: [],
}
