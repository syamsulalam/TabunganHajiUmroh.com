'use client';
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, User, Building2 } from 'lucide-react';

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen pt-20 flex flex-col bg-stone-50">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        
        <div className="text-center mb-12">
          <span className="inline-flex items-center text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
             <ShieldCheck className="w-4 h-4 mr-1" /> Terenkripsi & Aman
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Buka Rekening Mudah</h1>
          <p className="text-slate-600 text-lg">Proses 100% online, tanpa perlu ke cabang.</p>
        </div>

        <div className="flex items-center justify-center mb-12">
           <div className="flex items-center w-full max-w-2xl relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-stone-200 -translate-y-1/2 z-0"></div>
              <div className="absolute top-1/2 left-0 h-1 bg-[#D4AF37] transition-all duration-500 -translate-y-1/2 z-0" style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}></div>
              
              <div className="flex justify-between w-full relative z-10">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white ${step >= 1 ? 'bg-[#D4AF37] text-emerald-900' : 'bg-stone-200 text-stone-400'}`}>1</div>
                  <span className="text-xs font-medium mt-2 text-slate-600">Produk</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white ${step >= 2 ? 'bg-[#D4AF37] text-emerald-900' : 'bg-stone-200 text-stone-400'}`}>2</div>
                  <span className="text-xs font-medium mt-2 text-slate-600">Data Diri</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white ${step >= 3 ? 'bg-[#D4AF37] text-emerald-900' : 'bg-stone-200 text-stone-400'}`}>3</div>
                  <span className="text-xs font-medium mt-2 text-slate-600">Selesai</span>
                </div>
              </div>
           </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
          
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Pilih Tabungan & Bank</h2>
              
              <div className="space-y-4 mb-8">
                <label className="block text-sm font-bold text-slate-700">Tujuan Menabung</label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <button className="flex flex-col items-center p-6 border-2 border-[#064E3B] bg-emerald-50 rounded-2xl text-emerald-900">
                     <span className="font-bold mb-1">Haji Reguler</span>
                     <span className="text-xs opacity-80">Mendapatkan nomor porsi</span>
                  </button>
                  <button className="flex flex-col items-center p-6 border-2 border-stone-200 hover:border-stone-300 rounded-2xl text-slate-600">
                     <span className="font-bold mb-1">Umroh</span>
                     <span className="text-xs opacity-80">Rencana keberangkatan &lt; 5 thn</span>
                  </button>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <label className="block text-sm font-bold text-slate-700">Pilih Bank Syariah Mitra</label>
                <select className="w-full px-4 py-4 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] transition-all bg-white">
                  <option value="">-- Pilih Bank --</option>
                  <option value="bsi">Bank Syariah Indonesia (BSI)</option>
                  <option value="muamalat">Bank Muamalat</option>
                  <option value="cimb">CIMB Niaga Syariah</option>
                </select>
              </div>

              <button onClick={() => setStep(2)} className="w-full flex items-center justify-center py-4 bg-[#064E3B] text-white rounded-xl font-bold hover:bg-emerald-900 transition-all shadow-lg">
                Lanjutkan Pengisian Data <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">Informasi Data Diri (Sesuai KTP)</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nomor Induk Kependudukan (NIK)</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] transition-all" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Aktif</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nomor HP / WhatsApp</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] transition-all" />
                </div>
              </div>

              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="px-6 py-4 border border-stone-200 text-slate-600 rounded-xl font-medium hover:bg-stone-50 transition-all">
                  Kembali
                </button>
                <button onClick={() => setStep(3)} className="flex-1 flex items-center justify-center py-4 bg-[#064E3B] text-white rounded-xl font-bold hover:bg-emerald-900 transition-all shadow-lg">
                  Verifikasi Data & Selesai <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Pengajuan Berhasil!</h2>
              <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
                Silakan cek email Anda untuk instruksi verifikasi identitas (e-KYC) lanjutan dari pihak bank syariah pilihan Anda.
              </p>
              
              <div className="bg-stone-50 rounded-xl p-6 mb-8 text-left max-w-sm mx-auto border border-stone-200">
                <p className="font-semibold text-slate-800 mb-2 text-sm">Langkah Selanjutnya:</p>
                <ol className="list-decimal pl-5 text-sm text-slate-600 space-y-2">
                  <li>Buka aplikasi bank terkait.</li>
                  <li>Lakukan video call / biometric verification.</li>
                  <li>Transfer setoran awal.</li>
                  <li>Login ke dashboard kami.</li>
                </ol>
              </div>

              <Link href="/login" className="inline-flex items-center justify-center px-8 py-4 bg-[#064E3B] text-white rounded-xl font-bold hover:bg-emerald-900 transition-all shadow-lg">
                Kembali ke Login
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
