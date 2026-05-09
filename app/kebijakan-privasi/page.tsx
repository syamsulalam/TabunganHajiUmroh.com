'use client';

import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function KebijakanPrivasi() {
  return (
    <div className="min-h-screen pt-20 flex flex-col bg-stone-50">
      <Navbar />
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-900 mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Beranda
        </Link>
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-8">Kebijakan Privasi</h1>
          <div className="prose prose-emerald max-w-none text-slate-600">
            <p>Privasi Anda sangat penting bagi kami. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.</p>
            
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Informasi yang Kami Kumpulkan</h3>
            <p>Kami mengumpulkan informasi identitas (nama, alamat email, no telepon) yang Anda berikan langsung saat mendaftar, serta informasi data finansial semata untuk simulasi kalkulator ibadah. Jika berlanjut ke integrasi bank, proses finansial akan disalurkan dengan sistem bank langsung.</p>
            
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Penggunaan Informasi Pribadi</h3>
            <p>Informasi yang kami kumpulkan digunakan untuk:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Menyediakan layanan perencanaan dan simulasi ibadah.</li>
              <li>Berkomunikasi dengan Anda mengenai layanan dan program.</li>
              <li>Meningkatkan pengalaman pengguna di dalam platform kami.</li>
            </ul>
            
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Keamanan Data</h3>
            <p>Kami mengimplementasikan tindakan keamanan teknis dan organisasi yang ketat untuk melindungi data pribadi Anda dari akses tidak sah, kehilangan, atau manipulasi.</p>
            
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Kebijakan Berbagi Data</h3>
            <p>Kami tidak akan menjual atau membagikan data identifikasi pribadi Anda kepada pihak ketiga untuk tujuan pemasaran komersial tanpa persetujuan eksplisit dari Anda.</p>
          </div>
        </div>
      </main>
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-8 mt-auto text-center text-sm">
        <p>&copy; 2026 TabunganHajiUmroh.com. All rights reserved.</p>
      </footer>
    </div>
  );
}
