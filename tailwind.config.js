module.exports = {
    content: ['./app/**/*.{ts,tsx,js,jsx}'],
    theme: {
        extend: {},
        backgroundColor: {
            main: '#262729',
            post: '#e7e8ed',
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/typography')],
};
