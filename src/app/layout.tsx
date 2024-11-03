// src/app/layout.tsx

import localFont from 'next/font/local';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const iranianSansFont = localFont({
  src: '/fonts/IranianSans.ttf',
  variable: '--font-iranian-sans',
  display: 'swap', // استفاده از گزینه swap برای بهبود تجربه کاربری در زمان بارگذاری
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" className={iranianSansFont.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
