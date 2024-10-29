// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                cormorant: ['Cormorant', 'serif'], // добавляем Cormorant
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};
