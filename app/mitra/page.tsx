'use client';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, Building2, ShieldCheck, Banknote } from 'lucide-react';
import { motion } from 'motion/react';

export default function Page() {
  const banks = [
    { name: "Bank Syariah Indonesia (BSI)", type: "Bank Umum Syariah", desc: "Bank Syariah terbesar di Indonesia dengan jaringan luas untuk pendaftaran Haji." },
    { name: "Bank Muamalat", type: "Bank Umum Syariah", desc: "Pelopor perbankan syariah di Indonesia dengan pengalaman puluhan tahun melayani jemaah haji." },
    { name: "CIMB Niaga Syariah", type: "Unit Usaha Syariah", desc: "Layanan perbankan digital mutakhir dengan fitur pendaftaran haji online." },
    { name: "Bank Mega Syariah", type: "Bank Umum Syariah", desc: "Fokus pada kemudahan akses dan fitur tabungan umroh yang fleksibel." }
  ];

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
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Mitra Bank Syariah</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Keamanan dana Anda adalah prioritas mutlak kami. Kami hanya bekerja sama dengan bank terdaftar di OJK dan dananya dijamin oleh Lembaga Penjamin Simpanan (LPS).
          </p>
        </motion.div>

        <motion.div 
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {banks.map((bank, i) => (
            <motion.div variants={itemVars} key={i} className="bg-white rounded-2xl p-8 border border-stone-100 flex items-start shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-stone-100 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                <Building2 className="w-8 h-8 text-stone-400" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1 block">{bank.type}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{bank.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{bank.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#064E3B] text-white rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left items-center">
            <div className="col-span-2">
              <h2 className="text-2xl font-serif font-bold mb-4">Mengapa Menggunakan Bank Syariah?</h2>
              <p className="text-emerald-100 leading-relaxed mb-6">
                Sesuai dengan ketentuan regulasi di Indonesia, penerimaan setoran Biaya Penyelenggaraan Ibadah Haji (BPIH) harus melalui Bank Penerima Setoran (BPS) BPIH yang beroperasi secara Syariah. Dana Anda dikelola dengan prinsip islami, terhindar dari riba, dan memberikan keberkahan.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-emerald-50"><ShieldCheck className="w-5 h-5 text-[#D4AF37] mr-3" /> Dijamin Lembaga Penjamin Simpanan (LPS)</li>
                <li className="flex items-center text-emerald-50"><ShieldCheck className="w-5 h-5 text-[#D4AF37] mr-3" /> Terdaftar dan diawasi oleh OJK</li>
                <li className="flex items-center text-emerald-50"><ShieldCheck className="w-5 h-5 text-[#D4AF37] mr-3" /> Langsung terhubung Siskohat Kemenag</li>
              </ul>
            </div>
            <div className="flex justify-center md:justify-end">
               <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                 <Banknote className="w-24 h-24 text-[#D4AF37]" />
               </div>
            </div>
          </div>
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
