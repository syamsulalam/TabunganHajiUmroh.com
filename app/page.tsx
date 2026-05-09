'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Calculator, ArrowRight, ShieldCheck, HeartHandshake, TrendingUp, ChevronRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const [targetYears, setTargetYears] = useState(5);
  const [estimatedCost, setEstimatedCost] = useState(45000000);
  const targetMonthly = Math.round(estimatedCost / (targetYears * 12));

  return (
    <div className="min-h-screen pt-20 flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#064E3B] opacity-5 pattern-grid-lg" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-stone-50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-[#064E3B] text-sm font-medium mb-6">
              Platform Perencanaan Ibadah #1 di Indonesia
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 tracking-tight mb-8 leading-tight">
              Langkah Pertama Menuju <br className="hidden md:block"/>
              <span className="text-[#064E3B]">Baitullah</span> Dimulai Hari Ini
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Penuhi panggilan suci dengan rencana tabungan yang terukur, aman, dan transparan. Bekerja sama dengan lembaga syariah terdaftar di LPS.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#kalkulator">
                <span className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-[#064E3B] bg-[#D4AF37] hover:bg-yellow-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  Mulai Rencanakan Tabungan
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
              <Link href="#produk">
                <span className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all">
                  Lihat Paket Edukasi
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust / Bank Partners */}
      <section className="py-12 bg-white border-y border-stone-200/50" id="mitra">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">Mitra Bank Syariah Pilihan</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using mock placeholders for bank logos */}
            <div className="text-xl font-serif font-bold text-slate-800 flex items-center">
               <div className="w-8 h-8 bg-[#064E3B] rounded-full mr-2"></div> Bank Syariah A
            </div>
            <div className="text-xl font-serif font-bold text-slate-800 flex items-center">
               <div className="w-8 h-8 bg-blue-800 rounded-sm mr-2"></div> Bank Syariah B
            </div>
            <div className="text-xl font-serif font-bold text-slate-800 flex items-center">
               <div className="w-8 h-8 object-cover rounded mr-2 bg-gradient-to-tr from-purple-600 to-emerald-400"></div> BPRS Partner
            </div>
            <div className="text-xl font-serif font-bold text-slate-800 flex items-center">
              <div className="w-8 h-8 rounded-full border-2 border-[#D4AF37] mr-2"></div> Diawasi LPS
            </div>
          </div>
        </div>
      </section>

      {/* Kalkulator Pintar */}
      <section className="py-24 bg-stone-50" id="kalkulator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-serif font-bold text-slate-900">Kalkulator Pintar: <br/><span className="text-[#064E3B]">Kapan Kamu Akan Berangkat?</span></h2>
              <p className="text-lg text-slate-600">
                Hitung estimasi setoran per bulan secara real-time berdasarkan target tahun keberangkatan. Termasuk estimasi inflasi tahunan.
              </p>
              
              <ul className="space-y-4 pt-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 bg-[#064E3B] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Berbasis Data Kemenag</h4>
                    <p className="text-slate-600 text-sm">Angka berdasarkan rata-rata biaya keberangkatan terbaru.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 bg-[#064E3B] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Auto-Debit Terintegrasi</h4>
                    <p className="text-slate-600 text-sm">Fitur potong gaji otomatis bekerja sama dengan bank partner.</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100 relative overflow-hidden"
            >
              {/* Gamification Tracker Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-0"></div>

              <div className="relative z-10 space-y-8">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Pilih Program</label>
                  <div className="flex p-1 bg-stone-100 rounded-lg">
                    <button onClick={() => setEstimatedCost(45000000)} className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${estimatedCost === 45000000 ? 'bg-white shadow text-[#064E3B]' : 'text-slate-500 hover:text-slate-700'}`}>Haji Reguler</button>
                    <button onClick={() => setEstimatedCost(35000000)} className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${estimatedCost === 35000000 ? 'bg-white shadow text-[#064E3B]' : 'text-slate-500 hover:text-slate-700'}`}>Umroh</button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-slate-700">Target Waktu Mendaftar Porsi/Berangkat</label>
                    <span className="text-sm font-bold text-[#064E3B]">{targetYears} Tahun</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="15" 
                    value={targetYears}
                    onChange={(e) => setTargetYears(parseInt(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                  />
                  <div className="flex justify-between mt-2 text-xs text-slate-400">
                    <span>1 Thn</span>
                    <span>15 Thn</span>
                  </div>
                </div>

                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                  <p className="text-sm text-emerald-800 mb-1">Estimasi Target Setoran Rutin:</p>
                  <p className="text-3xl font-serif font-bold text-[#064E3B]">
                    Rp {targetMonthly.toLocaleString('id-ID')} <span className="text-lg font-sans font-medium text-emerald-700">/ bulan</span>
                  </p>
                  <p className="text-xs text-emerald-600 mt-2">*Termasuk estimasi inflasi wajar tahunan.</p>
                </div>

                <button className="w-full bg-[#064E3B] text-white py-4 rounded-xl font-medium hover:bg-emerald-800 transition-colors shadow-lg shadow-emerald-900/20">
                  Simpan Hasil Kalkulasi & Daftar
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gamification Progress Tracker Display */}
      <section className="py-24 bg-[#064E3B] text-white relative overflow-hidden" id="dashboard">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="2" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Visualisasikan Perjalananmu</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-16 text-lg">Setiap rupiah yang kamu sisihkan adalah langkah nyata menuju Ka&apos;bah. Dapatkan notifikasi dan pantau progres secara real-time.</p>

          <div className="relative max-w-4xl mx-auto hidden md:block">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-emerald-800 -translate-y-1/2"></div>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '60%' }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute top-1/2 left-0 h-1 bg-[#D4AF37] -translate-y-1/2"
            ></motion.div>

            <div className="relative flex justify-between">
              {[
                { label: 'Mulai Niat', percent: 0, active: true },
                { label: 'Tercapai 25%', percent: 25, active: true },
                { label: 'Daftar Porsi', percent: 60, active: true },
                { label: 'Pelunasan', percent: 85, active: false },
                { label: 'Berangkat', percent: 100, active: false },
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-[#064E3B] ${step.active ? 'bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.6)]' : 'bg-emerald-800'} relative z-10 transition-all duration-500 delay-${idx*100}`}>
                    {step.active && <div className="w-3 h-3 bg-white rounded-full"></div>}
                  </div>
                  <span className={`mt-4 text-sm font-medium ${step.active ? 'text-white' : 'text-emerald-400'}`}>{step.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:hidden space-y-8 text-left max-w-sm mx-auto pl-4 border-l-2 border-emerald-800 relative">
            <motion.div initial={{ height: 0 }} whileInView={{ height: '60%' }} transition={{ duration: 1.5 }} className="absolute top-0 left-[-2px] w-[2px] bg-[#D4AF37]"></motion.div>
             {[
                { label: 'Mulai Niat', desc: 'Buka rekening tabungan.', active: true },
                { label: 'Tercapai 25%', desc: 'Setengah jalan mendaftar.', active: true },
                { label: 'Daftar Porsi Haji', desc: 'Dana cukup untuk mendapatkan porsi.', active: true },
                { label: 'Pelunasan', desc: 'Sisa biaya sebelum jadwal.', active: false },
              ].map((step, idx) => (
                 <div key={idx} className="relative pl-6">
                    <div className={`absolute top-1 -left-[30px] w-4 h-4 rounded-full border-2 border-[#064E3B] ${step.active ? 'bg-[#D4AF37]' : 'bg-emerald-800'} z-10`} />
                    <h4 className={`font-medium ${step.active ? 'text-white' : 'text-emerald-400'}`}>{step.label}</h4>
                    <p className={`text-sm ${step.active ? 'text-emerald-100' : 'text-emerald-600'}`}>{step.desc}</p>
                 </div>
              ))}
          </div>
        </div>
      </section>

      {/* Edukasi & Blog */}
      <section className="py-24 bg-white" id="edukasi">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Pusat Edukasi & Informasi</h2>
            <p className="text-slate-600 text-lg">Tetap update dengan informasi terbaru seputar kuota keberangkatan, tips finansial, dan tata cara ibadah yang benar.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cara Mengecek Antrian Haji via Aplikasi Kemenag',
                category: 'Panduan',
                image: 'https://picsum.photos/seed/hajj1/600/400'
              },
              {
                title: '5 Tips Mengatur Keuangan untuk Pasangan Muda',
                category: 'Finansial',
                image: 'https://picsum.photos/seed/hajj2/600/400'
              },
              {
                title: 'Perbedaan Haji Reguler, Plus, dan Furoda',
                category: 'Edukasi',
                image: 'https://picsum.photos/seed/hajj3/600/400'
              }
            ].map((post, i) => (
              <div key={i} className="group rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl transition-all cursor-pointer bg-white">
                <div className="h-48 w-full relative overflow-hidden bg-stone-100">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-2 block">{post.category}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#064E3B] transition-colors line-clamp-2">{post.title}</h3>
                  <div className="flex items-center text-[#064E3B] font-medium text-sm mt-4">
                    Baca Selengkapnya <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <Link href="https://wa.me/628000000000" target="_blank" className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
        <MessageCircle className="w-7 h-7" />
      </Link>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link href="/" className="font-serif font-bold text-2xl text-white tracking-tight mb-4 inline-block">
              TabunganHajiUmroh
            </Link>
            <p className="text-sm max-w-sm mb-6 leading-relaxed">
              Solusi perencanaan keuangan dan edukasi tata cara ibadah haji dan umroh yang aman, tenang, dan transparan terintegrasi langsung dengan Bank Syariah pilihan.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#produk" className="hover:text-emerald-400 transition-colors">Produk</Link></li>
              <li><Link href="#kalkulator" className="hover:text-emerald-400 transition-colors">Kalkulator Pintar</Link></li>
              <li><Link href="#edukasi" className="hover:text-emerald-400 transition-colors">Blog & Edukasi</Link></li>
              <li><Link href="#mitra" className="hover:text-emerald-400 transition-colors">Mitra Bank</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-sm">
              <li>cs@tabunganhajiumroh.com</li>
              <li>0800-1234-5678</li>
              <li>Gedung Pusat Bisnis Syariah,<br/>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2026 TabunganHajiUmroh.com. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Syarat & Ketentuan</Link>
            <Link href="#" className="hover:text-white">Kebijakan Privasi</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
