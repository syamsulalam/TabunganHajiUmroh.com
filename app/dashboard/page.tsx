'use client';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, Wallet, TrendingUp, Bell, MapPin, ChevronRight, LogOut, CheckCircle2, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Tooltip } from '@/components/Tooltip';

export default function Page() {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen pt-20 flex flex-col bg-stone-50">
      
      {/* Auth Navbar Variant */}
      <nav className="fixed top-0 w-full z-50 bg-[#064E3B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="font-serif font-bold text-xl tracking-tight">TabunganHajiUmroh</div>
            <div className="flex items-center space-x-6">
              <button className="text-emerald-200 hover:text-white relative">
                 <Bell className="w-5 h-5"/>
                 <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#064E3B]"></span>
              </button>
              <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center font-bold text-emerald-900">
                A
              </div>
              <Link href="/login" className="text-emerald-200 hover:text-white text-sm flex items-center">
                Keluar <LogOut className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full mt-8 overflow-hidden">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-serif font-bold text-slate-900">Assalamu&apos;alaikum, Ahmad!</h1>
          <p className="text-slate-600 mt-1">Langkahmu menuju Baitullah semakin dekat.</p>
        </motion.div>

        <motion.div 
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-3 gap-8"
        >
          
          <div className="lg:col-span-2 space-y-8">
            {/* Balance Card */}
            <motion.div variants={itemVars} className="bg-[#064E3B] rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-emerald-900/10">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MapPin className="w-48 h-48 -mr-16 -mt-16" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-emerald-200 font-medium text-sm">Total Saldo Haji Reguler</span>
                  <span className="text-xs bg-[#D4AF37] text-emerald-900 font-bold px-2 py-1 rounded">BSI Syariah</span>
                </div>
                <div className="text-4xl md:text-5xl font-bold font-serif mb-8">
                  Rp 12.500.000
                </div>

                <div className="bg-emerald-800/50 rounded-2xl p-5 border border-emerald-700/50">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm text-emerald-100 flex items-center">
                      Progres menuju Porsi Haji
                      <Tooltip content="Setoran awal minimal Kemenag (SPPH) adalah Rp 25.000.000">
                        <Info className="w-3.5 h-3.5 ml-1.5 opacity-50 hover:opacity-100 transition-opacity" />
                      </Tooltip>
                    </span>
                    <span className="font-bold text-[#D4AF37]">50%</span>
                  </div>
                  <div className="w-full bg-emerald-900 rounded-full h-2.5 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '50%' }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className="bg-[#D4AF37] h-2.5 rounded-full" 
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Path visualization */}
            <motion.div variants={itemVars} className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
               <h3 className="font-bold text-slate-900 mb-6">Peta Perjalananmu</h3>
               <div className="relative pl-8 space-y-8 before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-stone-200">
                 
                 <div className="relative flex items-center justify-between before:absolute before:inset-0 before:ml-[5px] md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[#D4AF37]">
                    <div className="absolute left-[-32px] md:left-auto md:relative w-4 h-4 bg-[#D4AF37] rounded-full shadow-[0_0_0_4px_#fefce8] z-10" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Mulai Niat</h4>
                      <p className="text-xs text-slate-500">Januari 2024</p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 hidden md:block" />
                 </div>
                 
                 <div className="relative flex items-center justify-between before:absolute before:inset-0 before:ml-[5px] md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[#D4AF37]">
                    <div className="absolute left-[-32px] md:left-auto md:relative w-4 h-4 bg-[#D4AF37] rounded-full shadow-[0_0_0_4px_#fefce8] z-10" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Tercapai 50% Limit Porsi</h4>
                      <p className="text-xs text-slate-500">Hari ini</p>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 hidden md:block" />
                 </div>

                 <div className="relative flex items-center justify-between">
                    <div className="absolute left-[-32px] md:left-auto md:relative w-4 h-4 bg-stone-300 rounded-full z-10" />
                    <div>
                      <h4 className="font-medium text-slate-500">Daftar Porsi (SPPH) Kemenag</h4>
                      <p className="text-xs text-slate-400">Estimasi: Desember 2024</p>
                    </div>
                 </div>

                </div>
            </motion.div>
          </div>

          <motion.div variants={itemVars} className="space-y-8">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100 hidden lg:block">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                <Wallet className="w-5 h-5 mr-2 text-[#064E3B]"/> 
                Auto-Debit Rutin
                <Tooltip content="Dana ditarik otomatis setiap tanggal 25">
                  <Info className="w-4 h-4 ml-2 text-stone-300" />
                </Tooltip>
              </h3>
              <div className="bg-stone-50 rounded-xl p-4 flex justify-between items-center mb-4 border border-stone-200">
                <div>
                  <p className="text-sm text-slate-500">Setoran per bulan</p>
                  <p className="font-bold text-slate-900">Rp 1.000.000</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500">Tanggal</p>
                  <p className="font-bold text-[#064E3B]">Tgl 25</p>
                </div>
              </div>
              <button className="w-full py-2.5 text-sm font-medium text-slate-600 border border-stone-200 rounded-lg hover:bg-stone-50 transition-colors">Sesuaikan Jumlah</button>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100">
              <div className="p-6 bg-slate-900">
                <h3 className="font-serif font-bold text-white text-lg">Edukasi Hari Ini</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="group cursor-pointer">
                  <p className="text-xs font-semibold text-[#D4AF37] mb-1">PANDUAN</p>
                  <h4 className="font-bold text-slate-900 group-hover:text-[#064E3B] transition-colors leading-snug mb-1">Apa yang perlu disiapkan sebelum mendaftar ke Kemenag?</h4>
                  <p className="text-sm text-slate-500 flex items-center">Baca selengkapnya <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" /></p>
                </div>
                <div className="h-px bg-stone-100 w-full" />
                <div className="group cursor-pointer">
                  <p className="text-xs font-semibold text-[#D4AF37] mb-1">DOA SEHARI-HARI</p>
                  <h4 className="font-bold text-slate-900 group-hover:text-[#064E3B] transition-colors leading-snug mb-1">Doa agar dimudahkan rezekinya menuju Makkah</h4>
                  <p className="text-sm text-slate-500 flex items-center">Baca selengkapnya <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" /></p>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </main>
    </div>
  );
}
