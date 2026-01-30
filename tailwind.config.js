/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: '#0a192f',
                light: '#cbd5e1',
                accent: '#38bdf8',
                neon: '#00e5ff',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
            },
        },
    },
    plugins: [],
}
