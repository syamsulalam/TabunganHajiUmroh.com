'use client';

import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, UserPlus } from 'lucide-react';
import { motion } from 'motion/react';

export default function Karir() {
  return (
    <div className="min-h-screen pt-20 flex flex-col bg-stone-50">
      <Navbar />
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-900 mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Beranda
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center bg-white rounded-3xl p-12 md:p-24 shadow-sm border border-stone-100">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
             <UserPlus className="w-10 h-10 text-[#064E3B]" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Bergabung Bersama Kami</h1>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Saat ini belum ada posisi yang dibuka secara publik. Kami selalu mencari individu yang berkomitmen untuk mempermudah niat suci umat ke tanah suci. Silakan kirimkan CV Anda secara proaktif.
          </p>
          <a href="mailto:hrd@tabunganhajiumroh.com" className="inline-flex border border-stone-200 text-slate-600 hover:bg-stone-50 transition-colors font-medium px-8 py-3 rounded-xl">
             Kirim CV ke hrd@tabunganhajiumroh.com
          </a>
        </motion.div>
      </main>
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-8 mt-auto text-center text-sm">
        <p>&copy; 2026 TabunganHajiUmroh.com. All rights reserved.</p>
      </footer>
    </div>
  );
}
