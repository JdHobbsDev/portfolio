import './globals.css';
import { Inter } from 'next/font/google';
import ClientLayout from '@/components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jd Hobbs | Portfolio',
  description: 'A discord.js developer with a passion for creating innovative and efficient solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:," />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
