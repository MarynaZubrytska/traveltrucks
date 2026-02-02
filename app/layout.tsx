import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ToastProvider from '@/components/ToastProvider';
import Header from '@/components/Header/Header';

import './globals.css';

const inter = Inter({ 
  variable: '--font-inter-sans',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap', });

export const metadata: Metadata = {
  title: 'Travel trucks',
  description: 'Campers of your dreams',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}