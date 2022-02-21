module.exports = {
    content: ['./app/**/*.{ts,tsx,js,jsx,mdx}'],
    theme: {
        extend: {
            typography: ({ theme }) => ({
                neutral: {
                    css: {
                        '--tw-prose-pre-bg': '#e9e0db',
                    },
                },
            }),
            backgroundColor: {
                main: '#262729',
                post: '#e7e8ed',
            },
            scale: {
                105: '1.05',
            },
        },
    },
    variants: {},
    plugins: [require('@tailwindcss/typography')],
};
