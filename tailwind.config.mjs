import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class', '[data-theme="dark"]'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ["fantasy", "dracula"],
		darkTheme: "dracula", 
	}
}
