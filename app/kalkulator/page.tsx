'use client';
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, Calculator, Info, Wallet } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CurrencyInput } from '@/components/CurrencyInput';
import { Tooltip } from '@/components/Tooltip';

export default function Page() {
  const [targetYears, setTargetYears] = useState(5);
  const [estimatedCost, setEstimatedCost] = useState(45000000);
  const [inflationRate, setInflationRate] = useState(3); // 3%
  const [initialDeposit, setInitialDeposit] = useState(1000000);

  // Future Value calculation: FV = PV * (1 + r)^n
  const futureCost = estimatedCost * Math.pow(1 + (inflationRate / 100), targetYears);
  
  // Total needed to save
  const totalNeeded = futureCost - initialDeposit;
  
  // Monthly deposit required
  const targetMonthly = Math.max(0, Math.round(totalNeeded / (targetYears * 12)));

  // Animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen pt-20 flex flex-col bg-stone-50">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full overflow-hidden">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-900 mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Beranda
        </Link>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Kalkulator Perencanaan Ibadah</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hitung perkiraan setoran bulanan yang Anda butuhkan untuk mencapai target biaya ibadah, lengkap dengan estimasi inflasi.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl p-8 shadow-sm border border-stone-100"
        >
          
          {/* Controls */}
          <motion.div variants={itemVars} className="space-y-8">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3">Target Ibadah (Biaya Saat Ini)</label>
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setEstimatedCost(45000000)} 
                  className={`p-4 border rounded-xl text-left transition-all relative overflow-hidden ${estimatedCost === 45000000 ? 'border-[#064E3B] bg-emerald-50 ring-2 ring-[#064E3B]/20' : 'border-stone-200 hover:border-stone-300'}`}
                >
                  <div className="font-semibold text-slate-900 relative z-10 flex items-center justify-between">
                    Haji Reguler
                    <Tooltip content="Biaya Penyelenggaraan Ibadah Haji rata-rata tahun ini">
                      <Info className="w-4 h-4 text-stone-400" />
                    </Tooltip>
                  </div>
                  <div className="text-sm text-slate-500 relative z-10">Rp 45 Juta</div>
                  {estimatedCost === 45000000 && (
                    <motion.div layoutId="highlight" className="absolute inset-0 bg-emerald-50 z-0" />
                  )}
                </button>
                <button 
                  onClick={() => setEstimatedCost(35000000)} 
                  className={`p-4 border rounded-xl text-left transition-all relative overflow-hidden ${estimatedCost === 35000000 ? 'border-[#064E3B] bg-emerald-50 ring-2 ring-[#064E3B]/20' : 'border-stone-200 hover:border-stone-300'}`}
                >
                  <div className="font-semibold text-slate-900 relative z-10 flex items-center justify-between">
                    Umroh
                    <Tooltip content="Paket Umroh standar 9 Hari">
                      <Info className="w-4 h-4 text-stone-400" />
                    </Tooltip>
                  </div>
                  <div className="text-sm text-slate-500 relative z-10">Rp 35 Juta</div>
                  {estimatedCost === 35000000 && (
                    <motion.div layoutId="highlight" className="absolute inset-0 bg-emerald-50 z-0" />
                  )}
                </button>
              </div>
            </div>

            <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
              <label className="flex justify-between block text-sm font-bold text-slate-700 mb-4 items-center">
                <span className="flex items-center">
                  <Wallet className="w-4 h-4 mr-2 text-[#064E3B]" /> Setoran Awal
                </span>
                <span className="text-xs text-slate-500 font-normal border border-stone-200 px-2 py-1 rounded bg-white">Geser atau Ketik</span>
              </label>
              
              <CurrencyInput 
                value={initialDeposit} 
                onChange={setInitialDeposit} 
                className="w-full mb-4 px-4 py-3 text-lg font-bold text-slate-900 bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] transition-all text-center"
              />
              
              <input 
                type="range" 
                min="0" 
                max="25000000" 
                step="500000"
                value={initialDeposit}
                onChange={(e) => setInitialDeposit(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
              <div className="flex justify-between text-xs text-stone-400 mt-2">
                <span>Rp 0</span>
                <span>Rp 25 Jt</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2 items-center">
                <label className="text-sm font-bold text-slate-700 flex items-center">
                  Target Waktu Keberangkatan
                  <Tooltip content="Waktu yang Anda butuhkan untuk mengumpulkan dana">
                    <Info className="w-4 h-4 ml-2 text-stone-400" />
                  </Tooltip>
                </label>
                <div className="px-3 py-1 bg-[#064E3B]/10 text-[#064E3B] font-bold rounded-lg">{targetYears} Tahun</div>
              </div>
              <input 
                type="range" 
                min="1" 
                max="15" 
                value={targetYears}
                onChange={(e) => setTargetYears(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2 items-center">
                <label className="text-sm font-bold text-slate-700 flex items-center">
                  Asumsi Inflasi Tahunan 
                  <Tooltip content="Kenaikan harga komponen biaya ibadah (tiket, hotel) tiap tahun">
                    <Info className="w-4 h-4 ml-2 text-stone-400" />
                  </Tooltip>
                </label>
                <div className="px-3 py-1 bg-rose-50 text-rose-600 font-bold rounded-lg">{inflationRate}%</div>
              </div>
              <input 
                type="range" 
                min="0" 
                max="10" 
                step="0.5"
                value={inflationRate}
                onChange={(e) => setInflationRate(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div variants={itemVars} className="bg-[#064E3B] text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-emerald-900/20">
            <div className="absolute -right-8 -top-8 w-64 h-64 bg-emerald-800/30 rounded-full blur-3xl mix-blend-screen pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-xl font-serif font-bold text-[#D4AF37] mb-6 flex items-center">
                <Calculator className="w-5 h-5 mr-3" />
                Ringkasan Rencana Tabungan
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-emerald-100 border-b border-emerald-800/50 pb-4">
                  <span>Biaya Ibadah Saat Ini</span>
                  <span className="font-mono text-white">Rp {estimatedCost.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between items-center text-emerald-100 border-b border-emerald-800/50 pb-4">
                  <span className="flex items-center">
                    Estimasi Biaya ({targetYears} Thn)
                    <Tooltip content="Biaya saat ini yang telah disesuaikan dengan inflasi tahunan">
                      <Info className="w-4 h-4 ml-2 opacity-50 hover:opacity-100" />
                    </Tooltip>
                  </span>
                  <span className="font-mono text-white text-lg font-semibold">Rp {Math.round(futureCost).toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between items-center text-emerald-100 border-b border-emerald-800/50 pb-4">
                  <span>Setoran Awal</span>
                  <span className="font-mono text-[#D4AF37] font-semibold">- Rp {initialDeposit.toLocaleString('id-ID')}</span>
                </div>
              </div>

              <motion.div 
                key={targetMonthly}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-emerald-900/60 rounded-2xl p-6 border border-emerald-700/50 mb-8 backdrop-blur-sm"
              >
                <p className="text-sm text-emerald-200 mb-2 font-medium">Target Setoran Bulanan Anda:</p>
                <div className="flex items-baseline">
                  <span className="text-4xl md:text-5xl font-bold font-serif text-[#D4AF37]">
                    Rp {targetMonthly.toLocaleString('id-ID')}
                  </span>
                  <span className="ml-2 text-emerald-100">/ bln</span>
                </div>
              </motion.div>
            </div>

            <Link href="/daftar" className="relative z-10 w-full flex items-center justify-center py-4 bg-[#D4AF37] text-emerald-900 rounded-xl font-bold hover:bg-yellow-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Mulai Menabung Sekarang
            </Link>
          </motion.div>
          
        </motion.div>
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
