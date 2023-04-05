/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '16px',
		},
		extend: {
			colors: {
				primary: '#14b8a6',
				secondary: '#64746b',
				dark: '#0f172a',
			},
		},
	},
	plugins: [],
};
