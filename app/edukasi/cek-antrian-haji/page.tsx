'use client';

import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { motion } from 'motion/react';

export default function EdukasiArticle() {
  return (
    <div className="min-h-screen pt-20 flex flex-col bg-stone-50">
      <Navbar />
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/edukasi" className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-900 mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Pusat Edukasi
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100">
          <div className="w-full h-72 sm:h-96 relative bg-stone-100">
            <div className="absolute inset-0 bg-[#064E3B] opacity-10" />
            <Image src="https://picsum.photos/seed/hajj1/1200/600" alt="Cara Mengecek Antrian Haji via Aplikasi Kemenag" fill className="object-cover mix-blend-multiply" referrerPolicy="no-referrer" />
          </div>
          <div className="p-8 md:p-12">
            <div className="flex items-center space-x-4 mb-6 text-sm text-slate-500">
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" /> 12 Okt 2026</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5" /> 5 Min Baca</span>
              <span className="flex items-center"><User className="w-4 h-4 mr-1.5" /> Tim Redaksi</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">Cara Mengecek Antrian Haji via Aplikasi Kemenag</h1>
            <div className="prose prose-emerald lg:prose-lg max-w-none text-slate-600">
              <p>Mendapatkan nomor porsi haji merupakan langkah awal yang krusial. Namun, bagaimana cara memantau estimasi keberangkatan kita secara resmi? Kementerian Agama (Kemenag) RI telah menyediakan aplikasi "Pusaka" dan "Haji Pintar" untuk memudahkan jemaah.</p>
              
              <h3>1. Persiapkan Nomor Porsi Anda</h3>
              <p>Pastikan Anda sudah memegang bukti setoran awal BPIH yang di dalamnya tertera Nomor Porsi (biasanya terdiri dari 10 digit angka). Nomor ini merupakan kunci utama untuk mengecek keberangkatan.</p>
              
              <h3>2. Unduh Aplikasi Pusaka atau Haji Pintar</h3>
              <p>Anda dapat mengunduh aplikasi resmi dari Kemenag ini di Google Play Store atau Apple App Store. Keduanya menampilkan database yang langsung terhubung dengan Siskohat Kemenag.</p>
              
              <h3>3. Masukkan Nomor Porsi</h3>
              <p>Buka aplikasi, cari menu "Estimasi Keberangkatan" atau "Cek Porsi Haji". Masukkan 10 digit nomor porsi Anda lalu klik cari. Sistem akan langsung menampilkan estimasi tahun keberangkatan Anda.</p>
              
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl my-8">
                <p className="font-semibold text-emerald-900 m-0">Catatan Penting:</p>
                <p className="text-emerald-800 text-sm mt-2">Estimasi ini dapat berubah sewaktu-waktu karena bergantung pada kuota haji yang ditetapkan pemerintah Arab Saudi setiap tahunnya.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-8 mt-auto text-center text-sm">
        <p>&copy; 2026 TabunganHajiUmroh.com. All rights reserved.</p>
      </footer>
    </div>
  );
}
