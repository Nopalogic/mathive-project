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
				primary: '#7f5af0',
				secondary: '#72757e',
				tertiary: '#2cb67d',
				dark: '#0f172a',
			},
		},
	},
	plugins: [],
};
