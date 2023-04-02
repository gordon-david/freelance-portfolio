/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'sans': ['Arial','Verdana','"sans serif"'],
            'serif': ['"serif"'],
            'mono': ['"mono"'],
            'cursive': ['"Brush Script MT']
        },
        extend: {
            fontFamily: {
                'roboto-mono': ['Roboto Mono']
            }
        },
    },
    plugins: [],
}

