import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Tabungan Haji Umroh | Rencanakan Ibadahmu Lebih Awal',
  description: 'Platform perencanaan dan tabungan Haji & Umroh terpercaya dengan kalkulator pintar, pantau progres, dan bekerja sama dengan bank partner terkemuka.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased text-[#0f172a] bg-stone-50" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
