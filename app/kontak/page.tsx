'use client';

import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Kontak() {
  return (
    <div className="min-h-screen pt-20 flex flex-col bg-stone-50">
      <Navbar />
      <main className="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-900 mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Beranda
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
          <div>
            <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">Hubungi Kami</h1>
            <p className="text-slate-600 mb-8">Tim kami siap membantu menjawab semua pertanyaan seputar rencana dan solusi tabungan ibadah Anda.</p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-[#064E3B] mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Kantor Pusat</h4>
                  <p className="text-slate-600 text-sm">Gedung Tabungan Ibadah Tower, Lt. 8<br/>Jl. Sudirman Kav. 5A, Jakarta, 10220</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-[#064E3B] mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Layanan Call Center</h4>
                  <p className="text-slate-600 text-sm">+62 800-1234-5678 (Toll Free)</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-[#064E3B] mr-4 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Email Utama</h4>
                  <p className="text-slate-600 text-sm">cs@tabunganhajiumroh.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-emerald-500" placeholder="Ahmad Abdullah" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-emerald-500" placeholder="ahmad@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Pesan / Pertanyaan</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-emerald-500" placeholder="Tuliskan pertanyaan Anda..."></textarea>
              </div>
              <button type="button" className="w-full bg-[#064E3B] text-white py-3 rounded-xl font-medium hover:bg-emerald-800 transition-colors">
                Kirim Pesan
              </button>
            </form>
          </div>
        </motion.div>
      </main>
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-8 mt-auto text-center text-sm">
        <p>&copy; 2026 TabunganHajiUmroh.com. All rights reserved.</p>
      </footer>
    </div>
  );
}
