import { Public_Sans } from 'next/font/google';
import '../globals.css';

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export const metadata = {
  title: 'Identification | ScapeSync',
  description: 'client & Businesses can login and register to access ScapeSync',
};

export default function IdentificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={`${publicSans.variable} min-h-[calc(100vh-80px)] mx-auto max-w-7xl flex justify-center items-center`}
    >
      {children}
    </main>
  );
}
