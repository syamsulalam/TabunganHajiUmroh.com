const fs = require('fs');
const path = require('path');

const pages = [
  {
    path: 'produk/page.tsx',
    title: 'Pilihan Produk Tabungan Haji & Umroh',
    desc: 'Bandingkan berbagai paket tabungan yang kami tawarkan. Pilih yang paling sesuai dengan kemampuan finansial dan waktu Anda.'
  },
  {
    path: 'kalkulator/page.tsx',
    title: 'Kalkulator Pintar Tabungan',
    desc: 'Simulasikan rencana tabungan Haji atau Umroh Anda dalam hitungan menit.'
  },
  {
    path: 'mitra/page.tsx',
    title: 'Mitra Bank Syariah',
    desc: 'Kami bekerja sama dengan Bank Syariah terbaik dan diawasi oleh LPS untuk mengamankan dana ibadah Anda.'
  },
  {
    path: 'edukasi/page.tsx',
    title: 'Pusat Edukasi & Inspirasi',
    desc: 'Berita, panduan, dan tips persiapan dari sebelum hingga saat ibadah Haji dan Umroh.'
  },
  {
    path: 'dashboard/page.tsx',
    title: 'Dashboard Saya',
    desc: 'Pantau terus perkembangan tabungan Haji & Umroh Anda di sini.'
  },
  {
    path: 'tentang-kami/page.tsx',
    title: 'Tentang Kami',
    desc: 'Mengenal lebih dekat platform terpercaya pengelolaan persiapan finansial haji dan umroh.'
  },
  {
    path: 'faq/page.tsx',
    title: 'Bantuan & FAQ',
    desc: 'Temukan jawaban atas pertanyaan yang sering diajukan oleh pengguna kami.'
  },
  {
    path: 'kontak/page.tsx',
    title: 'Hubungi Kami',
    desc: 'Punya pertanyaan lebih lanjut? Tim dukungan kami siap membantu Anda.'
  },
  {
    path: 'syarat-ketentuan/page.tsx',
    title: 'Syarat & Ketentuan',
    desc: 'Informasi mengenai aturan dan ketentuan penggunaan layanan TabunganHajiUmroh.'
  },
  {
    path: 'kebijakan-privasi/page.tsx',
    title: 'Kebijakan Privasi',
    desc: 'Kami menjaga privasi dan keamanan data Anda dengan sangat serius.'
  },
  {
    path: 'daftar/page.tsx',
    title: 'Buka Rekening Baru',
    desc: 'Langkah awal yang mudah untuk memulai perjalanan ibadah Anda ke Baitullah.'
  },
  {
    path: 'login/page.tsx',
    title: 'Masuk ke Akun',
    desc: 'Akses dashboard dan kelola tabungan ibadah Anda.'
  }
];

const template = (title, desc) => `
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen pt-20 flex flex-col bg-stone-50">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Beranda
        </Link>
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">${title}</h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed mb-12">
            ${desc}
          </p>
          <div className="h-64 rounded-2xl border-2 border-dashed border-stone-200 bg-stone-50 flex items-center justify-center text-stone-500">
            [ Konten untuk halaman ini akan dibangun selanjutnya ]
          </div>
        </div>
      </main>
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-8 mt-auto text-center text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2026 TabunganHajiUmroh.com. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/syarat-ketentuan" className="hover:text-white">Syarat & Ketentuan</Link>
            <Link href="/kebijakan-privasi" className="hover:text-white">Kebijakan Privasi</Link>
            <Link href="/kontak" className="hover:text-white">Hubungi Kami</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
`;

pages.forEach(page => {
  const fullPath = path.join(__dirname, 'app', page.path);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, template(page.title, page.desc).trim() + '\\n');
});

console.log('Successfully created all pages.');
