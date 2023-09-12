/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.html', './src/**/*.js'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '3rem',
                lg: '8rem',
            },
        },
        extend: {
            colors: {
                'primary-1': '#F9E0BB',
                'primary-2': '#FFC26F',
                'primary-3': '#C38154',
                'primary-4': '#884A39',
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif', 'system-ui'],
            },
        },
    },
    plugins: [],
};
