'use client';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, Target, Heart, Shield, Users } from 'lucide-react';
import { motion } from 'motion/react';

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
      <Navbar />
      <main className="flex-grow w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-900 mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Beranda
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-16 shadow-sm border border-stone-100 mb-16"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Tentang Kami</h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  TabunganHajiUmroh lahir dari sebuah keprihatinan: tingginya antusiasme umat Muslim Indonesia untuk beribadah ke Baitullah seringkali tidak diimbangi dengan perencanaan finansial yang matang dan aman. 
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Banyak jemaah yang terjebak pada janji manis agen tak bertanggung jawab, atau kesulitan karena tabungan ibadah tercampur dengan kebutuhan sehari-hari. Kami hadir untuk menyelesaikan masalah tersebut.
                </p>
                <p className="text-lg font-medium text-[#064E3B] leading-relaxed">
                  Kami adalah jembatan digital antara niat suci Anda dengan institusi perbankan syariah yang kredibel dan diawasi oleh negara.
                </p>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden bg-emerald-50 border border-emerald-100 flex items-center justify-center group">
                <div className="absolute inset-0 bg-emerald-900/5 group-hover:bg-emerald-900/10 transition-colors" />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, type: "spring" as const, stiffness: 200 }}
                  className="z-10 bg-white p-6 rounded-full shadow-xl shadow-emerald-900/10"
                >
                  <Heart className="w-16 h-16 text-[#064E3B]" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <div className="mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-serif font-bold text-center text-slate-900 mb-12"
            >
              Nilai Inti Kami
            </motion.h2>
            <motion.div 
              variants={containerVars}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-4 gap-8"
            >
              {[
                { icon: <Shield className="w-8 h-8 text-[#064E3B]" />, title: 'Keamanan Transaksi', desc: 'Dana langsung disetor ke Bank Syariah mitra pilihan Anda (diawasi LPS).' },
                { icon: <Target className="w-8 h-8 text-[#064E3B]" />, title: 'Perencanaan Terukur', desc: 'Sistem kalkulasi memperhitungkan inflasi agar target keberangkatan akurat.' },
                { icon: <Users className="w-8 h-8 text-[#064E3B]" />, title: 'Transparansi Penuh', desc: 'Tidak ada biaya tersembunyi. Semua informasi bagi hasil dan biaya admin dikomunikasikan.' },
                { icon: <Heart className="w-8 h-8 text-[#064E3B]" />, title: 'Edukasi Berkelanjutan', desc: 'Kami membimbing jemaah bukan hanya secara finansial, tapi juga mental dan spiritual.' },
              ].map((val, idx) => (
                <motion.div variants={itemVars} key={idx} className="bg-white p-6 rounded-2xl border border-stone-100 text-center hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    {val.icon}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{val.title}</h3>
                  <p className="text-sm text-slate-600">{val.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
        </div>
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
