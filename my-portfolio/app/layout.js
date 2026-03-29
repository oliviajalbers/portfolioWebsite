import "./globals.css";
import Navbar from "../components/Navbar";

import { Montserrat, Inter } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-montserrat',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
});

export const metadata = {
  title: "Olivia Albers Portfolio",
  description: "Portfolio of Olivia Albers, Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main className="max-w-5xl mx-auto px-6">{children}</main>
      </body>
    </html>
  );
}

