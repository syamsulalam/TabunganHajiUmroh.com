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
            <Image src="https://picsum.photos/seed/hajj3/1200/600" alt="Perbedaan Haji Reguler, Plus, dan Furoda" fill className="object-cover mix-blend-multiply" referrerPolicy="no-referrer" />
          </div>
          <div className="p-8 md:p-12">
            <div className="flex items-center space-x-4 mb-6 text-sm text-slate-500">
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-1.5" /> 1 Nop 2026</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5" /> 7 Min Baca</span>
              <span className="flex items-center"><User className="w-4 h-4 mr-1.5" /> Tim Edukasi Ibadah</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">Perbedaan Haji Reguler, Plus (Khusus), dan Furoda</h1>
            <div className="prose prose-emerald lg:prose-lg max-w-none text-slate-600">
              <p>Memilih program haji yang tepat krusial demi kenyamanan Anda beribadah di tanah suci. Kenali 3 tipe utamanya:</p>
              
              <h3>1. Haji Reguler</h3>
              <p>Program standar pemerintah via Kementerian Agama RI.</p>
              <ul>
                <li><strong>Penyelenggara:</strong> Pemerintah (Kemenag).</li>
                <li><strong>Biaya:</strong> Subsidi (Sesuai ketetapan BPIH tahunan) — Paling terjangkau.</li>
                <li><strong>Masa Tunggu:</strong> 15-40 tahun tergantung domisili provinsi.</li>
                <li><strong>Durasi Ibadah:</strong> Kurang lebih 40 hari.</li>
              </ul>
              
              <h3>2. Haji Khusus (Dulu disebut Haji Plus)</h3>
              <p>Diselenggarakan pihak swasta PIHK (Penyelenggara Ibadah Haji Khusus) menggunakan kuota resmi Kemenag.</p>
              <ul>
                <li><strong>Penyelenggara:</strong> Travel Agent berizin resmi Kemenag (PIHK).</li>
                <li><strong>Biaya:</strong> Standar USD mengikuti fasilitas ($10,000 - $15,000).</li>
                <li><strong>Masa Tunggu:</strong> 5-8 tahun.</li>
                <li><strong>Fasilitas:</strong> Hotel lebih dekat ring utama, tenda Mina dan Arafah maktab VIP, durasi lebih singkat 25-28 hari.</li>
              </ul>
              
              <h3>3. Haji Furoda / Mujamalah</h3>
              <p>Haji jalur tanpa antre menggunakan visa undangan kerajaan atau jalur khusus luar alokasi kuota standar negara.</p>
              <ul>
                <li><strong>Penyelenggara:</strong> Biro perjalanan khusus afiliasi dari Kerajaan Saudi.</li>
                <li><strong>Biaya:</strong> Sangat tinggi (di atas $25,000).</li>
                <li><strong>Masa Tunggu:</strong> Tanpa antre (langsung berangkat tahun tersebut).</li>
                <li><strong>Fasilitas:</strong> Sangat Premium (VVIP).</li>
                <br/>
                <b>Penting:</b> Pastikan memilih travel penyelenggara Haji Furoda yang sudah berizin PIHK dan menjamin jenis visa yang dipakai adalah "Visa Haji Mujamalah/Furoda" (bukan malah terjerumus pada Visa Ziarah atau Amil).
              </ul>
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
