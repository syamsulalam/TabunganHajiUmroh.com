'use client';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { Lock } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen pt-20 flex flex-col bg-stone-50">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-6">
              <div className="w-12 h-12 bg-emerald-900 rounded-xl flex items-center justify-center mx-auto shadow-md">
                <span className="text-white font-serif font-bold text-2xl leading-none">T</span>
              </div>
            </Link>
            <h1 className="text-2xl font-serif font-bold text-slate-900">Masuk ke Dashboard</h1>
            <p className="text-sm text-slate-500 mt-2">Pantau progres rencana ibadah Anda.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email atau Nomor HP</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] transition-all"
                  placeholder="name@example.com"
                />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-700">PIN Keamanan</label>
                  <Link href="#" className="text-sm text-[#064E3B] hover:underline">Lupa PIN?</Link>
                </div>
                <div className="relative">
                  <input 
                    type="password" 
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] transition-all"
                    placeholder="••••••"
                  />
                  <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                </div>
              </div>

              <Link href="/dashboard" className="w-full block text-center bg-[#064E3B] text-white rounded-xl py-3.5 font-bold hover:bg-emerald-900 transition-colors shadow-lg">
                Masuk
              </Link>
            </form>
            
            <div className="mt-8 text-center text-sm text-slate-500 border-t border-stone-100 pt-6">
              Belum punya rekening? <Link href="/daftar" className="text-[#064E3B] font-semibold hover:underline">Buka Rekening Baru</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
