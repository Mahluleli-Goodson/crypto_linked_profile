/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'lumino': '#1a0f2a',
                'lumino-1': 'rgba(88, 88, 121, 0.2)',
                'lumino-2': 'rgba(88, 88, 121, 1)',
                'lumino-3': '#422963',
                'archen': '#3e1f47',
            }
        },
        fontFamily: {
            'nunito': ['Nunito', 'sans-serif'],
            'archivo': ['Archivo', 'sans-serif'],
        },
    },
    plugins: [],
}
