import { Barlow } from 'next/font/google';
import localFont from 'next/font/local';

export const barlow = Barlow({
    subsets: ['latin'],
    variable: '--font-barlow',
    display: 'swap',
    weight: ['400', '500', '600', '700', '900'],
});

export const berlinSans = localFont({
    src: [
        {
            path: '../public/fonts/berlin_sans.woff2',
            weight: '500',
            style: 'normal',
        },
    ],
    variable: '--font-berlin-sans',
});
