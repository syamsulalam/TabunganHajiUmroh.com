'use client';

import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft } from 'lucide-react';

export default function SyaratKetentuan() {
  return (
    <div className="min-h-screen pt-20 flex flex-col bg-stone-50">
      <Navbar />
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-900 mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Beranda
        </Link>
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-8">Syarat dan Ketentuan</h1>
          <div className="prose prose-emerald max-w-none text-slate-600">
            <p>Selamat datang di TabunganHajiUmroh.com. Dengan mengakses dan menggunakan layanan kami, Anda menyetujui syarat dan ketentuan berikut:</p>
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Penggunaan Layanan</h3>
            <p>Layanan kami bertujuan membantu Anda merencanakan dan menyiapkan dana ibadah Haji dan Umroh. Anda setuju untuk memberikan informasi yang benar, akurat, dan lengkap saat menggunakan layanan kami.</p>
            
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Akun dan Keamanan</h3>
            <p>Anda bertanggung jawab untuk menjaga kerahasiaan kata sandi akun Anda, serta semua aktivitas yang terjadi di bawah akun Anda. Kami memiliki hak untuk membekukan akun jika terdapat indikasi pelanggaran syarat dan ketentuan.</p>
            
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Kemitraan Bank Syariah</h3>
            <p>Dana yang Anda setorkan akan ditempatkan di Bank Syariah mitra kami yang terdaftar dan diawasi oleh Otoritas Jasa Keuangan (OJK) serta penjaminan Lembaga Penjamin Simpanan (LPS). Kami bukan merupakan lembaga penerima dana secara langsung.</p>
            
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Perubahan Layanan</h3>
            <p>Kami berhak memodifikasi, menghentikan sementara, atau menghentikan secara permanen layanan (atau bagian layanan) kapan saja, dengan atau tanpa pemberitahuan sebelumnya.</p>
          </div>
        </div>
      </main>
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-8 mt-auto text-center text-sm">
        <p>&copy; 2026 TabunganHajiUmroh.com. All rights reserved.</p>
      </footer>
    </div>
  );
}
