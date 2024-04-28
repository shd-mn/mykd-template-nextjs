import './globals.css';
import Header from '@/components/Header';
import { barlow, berlinSans } from './fonts';

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${berlinSans.variable} ${barlow.variable}`}>
            <body className={barlow.className}>
                <Header /> 
                {children}
            </body>
        </html>
    );
}