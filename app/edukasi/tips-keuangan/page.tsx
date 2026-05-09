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
            <Image src="https://picsum.photos/seed/hajj2/1200/600" alt="5 Tips Mengatur Keuangan untuk Pasangan Muda" fill className="object-cover mix-blend-multiply" referrerPolicy="no-referrer" />
          </div>
          <div className="p-8 md:p-12">
            <div className="flex items-center space-x-4 mb-6 text-sm text-slate-500">
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" /> 20 Okt 2026</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5" /> 6 Min Baca</span>
              <span className="flex items-center"><User className="w-4 h-4 mr-1.5" /> Tim Finansial</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">5 Tips Mengatur Keuangan untuk Pasangan Muda Pergi Umroh</h1>
            <div className="prose prose-emerald lg:prose-lg max-w-none text-slate-600">
              <p>Memprioritaskan ibadah seringkali berbenturan dengan banyak kebutuhan bagi pasangan muda. Namun, dengan perencanaan yang matang, impian untuk pergi ke tanah suci bersama pasangan bukan hal yang mustahil.</p>
              
              <h3>1. Tetapkan Niat Kuat Bersama</h3>
              <p>Semua berawal dari niat. Diskusikan dan sepakati visi bersama bahwa Umroh adalah prioritas nomor satu setelah pemenuhan kebutuhan dasar.</p>
              
              <h3>2. Rumus Pembagian Gaji Jelas (50-30-20)</h3>
              <p>Terapkan rumus 50% kebutuhan pokok, 30% cicilan dan hiburan, lalu 20% khusus untuk tabungan dan investasi. Dari 20% ini, alokasikan minimal separuhnya khusus untuk tabungan Umroh.</p>
              
              <h3>3. Pisahkan Rekening Tabungan</h3>
              <p>Ini adalah prinsip paling utama. Jangan mencampur dana ibadah di rekening yang sama dengan pengeluaran harian. Buka rekening tabungan berjangka Umroh di Bank Syariah untuk mengamankan dana.</p>
              
              <h3>4. Gunakan Fitur Auto-Debit</h3>
              <p>Untuk menghilangkan jeda dan peluang dana terpakai, aktifkan autodebit atau potong gaji bulanan yang lansung masuk ke dompet atau rekening Umroh Anda tepat pada tanggal gajian.</p>
              
              <h3>5. Tekan Biaya Gaya Hidup</h3>
              <p>Ganti kebiasaan nongkrong di cafe (ngopi) mahal dengan menyeduh kopi bersama di rumah, atau batasi pesanan pesan-antar makanan. Dana 50.000 per hari yang diselamatkan bisa sangat berarti dalam menabung!</p>
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
