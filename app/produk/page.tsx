'use client';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, TrendingUp, CalendarDays } from 'lucide-react';
import { motion } from 'motion/react';

export default function Page() {
  const products = [
    {
      title: "Tabungan Umroh",
      description: "Rencanakan ibadah Umroh dengan setoran ringan dan fleksibel tanpa penalti.",
      icon: <CalendarDays className="w-10 h-10 text-[#D4AF37]" />,
      target: "1 - 3 Tahun",
      features: [
        "Setoran awal mulai Rp 100.000",
        "Bebas biaya administrasi bulanan",
        "Bebas penalti jika berhenti menabung",
        "Pilihan bank syariah terkemuka"
      ],
      cta: "Buka Rekening Umroh",
      popular: true,
    },
    {
      title: "Tabungan Haji Reguler",
      description: "Amankan nomor porsi Haji Anda lebih awal dengan integrasi ke Siskohat Kemenag.",
      icon: <ShieldCheck className="w-10 h-10 text-[#064E3B]" />,
      target: "5 - 15 Tahun",
      features: [
        "Bantuan pendaftaran porsi Haji (min. saldo 25jt)",
        "Terhubung dengan Siskohat Kemenag",
        "Estimasi inflasi biaya haji otomatis",
        "Bagi hasil kompetitif (Nisbah)"
      ],
      cta: "Buka Rekening Haji",
      popular: false,
    },
    {
      title: "Tabungan Haji Plus (Khusus)",
      description: "Masa tunggu lebih singkat dengan fasilitas premium untuk ibadah yang lebih nyaman.",
      icon: <TrendingUp className="w-10 h-10 text-emerald-600" />,
      target: "3 - 7 Tahun",
      features: [
        "Masa tunggu 5-7 tahun",
        "Setoran dalam mata uang USD/IDR",
        "Layanan VIP & Hotel Bintang 5",
        "Pengelolaan dana terproteksi"
      ],
      cta: "Konsultasi Haji Plus",
      popular: false,
    }
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Pilihan Produk Tabungan Haji & Umroh</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Pilih paket tabungan yang paling sesuai dengan target waktu dan kemampuan finansial Anda. Kami bermitra hanya dengan Lembaga Keuangan Syariah terpercaya.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVars}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {products.map((product, idx) => (
            <motion.div variants={itemVars} key={idx} className={`relative bg-white rounded-3xl p-8 border ${product.popular ? 'border-[#064E3B] shadow-2xl scale-105 z-10' : 'border-stone-200 shadow-sm'} flex flex-col hover:-translate-y-2 transition-transform duration-300`}>
              {product.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#064E3B] text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  Paling Diminati
                </span>
              )}
              <div className="mb-6">{product.icon}</div>
              <h2 className="text-2xl font-serif font-bold text-slate-900 mb-3">{product.title}</h2>
              <p className="text-slate-600 mb-6 flex-grow">{product.description}</p>
              
              <div className="bg-stone-50 rounded-xl p-4 mb-6">
                <span className="text-sm text-slate-500 block mb-1">Estimasi Target Waktu:</span>
                <span className="font-semibold text-[#064E3B]">{product.target}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {product.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/daftar" className={`w-full text-center py-4 rounded-xl font-medium transition-all ${product.popular ? 'bg-[#064E3B] text-white hover:bg-emerald-900 shadow-lg' : 'bg-stone-100 text-[#064E3B] hover:bg-stone-200'}`}>
                {product.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-serif font-bold text-emerald-900 mb-4">Mengapa Menggunakan Rekening Khusus?</h3>
            <p className="text-emerald-800 leading-relaxed">
              Memisahkan dana ibadah dari rekening harian mencegah dana terpakai untuk kebutuhan lain. Selain itu, setoran Anda otomatis tercatat dalam sistem perbankan syariah yang terhubung langsung dengan Kementerian Agama, memudahkan proses pendaftaran porsi saat dana sudah mencukupi.
            </p>
          </div>
          <div className="flex-shrink-0">
             <ShieldCheck className="w-24 h-24 text-emerald-200" />
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
