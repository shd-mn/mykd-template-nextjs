/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './container/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1334px',
            },
        },
        extend: {
            fontFamily: {
                berlinSans: ['var(--font-berlin-sans)'],
                dmSans: ['var(--font-dm-sans)'],
            },
            colors: {
                primary: '#45f882',
                secondary: '#ffbe18',
                'text-gray-clr': '#9b9b9b',

                'primary-hover': '#7444ff',
                'h-clr': ' #131740',
                't-clr': ' #5A5D79',
                'dark-clr': '#0D102D',

            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};
