'use client';
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Tooltip } from '@/components/Tooltip';

export default function Page() {
  const faqs = [
    {
      q: "Bagaimana cara mulai menabung?",
      a: "Anda cukup klik tombol 'Buka Rekening' dan ikuti langkah pengisian data diri e-KYC. Setelah diverifikasi, kami akan membukakan rekening di bank syariah pilihan Anda. Anda akan mendapatkan nomor virtual account/rekening tujuan untuk transfer bulanan."
    },
    {
      q: "Apakah uang tabungan saya bisa ditarik kapan saja?",
      a: "Ya, karena ini adalah rekening tabungan wadiah/mudharabah atas nama Anda sendiri. Namun, kami menyarankan fitur 'Pencairan Bersyarat' aktif untuk mencegah dana ibadah terpakai untuk keperluan non-darurat."
    },
    {
      q: "Kapan saya bisa mendaftar nomor porsi Haji (Siskohat)?",
      a: "Sesuai aturan Kementerian Agama, Anda bisa mendaftarkan porsi Haji Reguler jika saldo di rekening tabungan haji Anda telah mencapai batas minimum pendaftaran porsi haji (Siskohat) yaitu Rp 25.000.000."
    },
    {
      q: "Apakah ada biaya tersembunyi atau biaya admin bulanan?",
      a: "Mayoritas bank syariah mitra kami memberikan fasilitas bebas biaya admin bulanan untuk produk Tabungan Haji dan Umroh. Anda hanya dikenakan biaya materai saat pembukaan dan penutupan rekening jika ada."
    },
    {
      q: "Bagaimana sistem auto-debit bekerja?",
      a: "Jika bank payroll (rekening gaji) Anda sama dengan bank tabungan haji, Anda bisa mengaktifkan auto-debit langsung. Jika berbeda, kami menyediakan opsi Standing Instruction atau autodebit via jaringan GPN/QRIS otomatis setiap bulan."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  // Animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen pt-20 flex flex-col bg-stone-50">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-900 mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Beranda
        </Link>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 flex items-center justify-center gap-3">
            Bantuan & FAQ
            <Tooltip content="Frequently Asked Questions (Pertanyaan yang sering diajukan)">
              <AlertCircle className="w-6 h-6 text-stone-400" />
            </Tooltip>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Temukan jawaban atas pertanyaan yang sering diajukan oleh pengguna kami.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-4"
          variants={containerVars}
          initial="hidden"
          animate="show"
        >
          {faqs.map((faq, idx) => (
            <motion.div 
              variants={itemVars}
              key={idx} 
              className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button 
                className="w-full px-6 py-5 flex items-center justify-between font-semibold text-slate-800 text-left hover:bg-stone-50 transition-colors"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className={`w-5 h-5 transition-colors ${openIdx === idx ? 'text-[#064E3B]' : 'text-stone-300'}`} />
                  {faq.q}
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {openIdx === idx && (
                  <motion.div 
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto", marginBottom: 16 },
                      collapsed: { opacity: 0, height: 0, marginBottom: 0 }
                    }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="px-6 pb-5 pt-0 text-slate-600 leading-relaxed border-t border-stone-100 mt-2"
                  >
                    <div className="pt-4">{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-emerald-50 rounded-2xl p-8 text-center border border-emerald-100"
        >
          <h3 className="font-serif font-bold text-xl text-emerald-900 mb-2">Masih punya pertanyaan?</h3>
          <p className="text-emerald-800 mb-6">Tim dukungan jemaah kami siap melayani Anda 24/7 melalui WhatsApp.</p>
          <Link href="https://wa.me/628000000000" className="inline-flex items-center px-6 py-3 bg-[#064E3B] text-white rounded-lg font-medium hover:bg-emerald-800 transition-all hover:shadow-lg hover:-translate-y-1">
            Chat WhatsApp CS
          </Link>
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
