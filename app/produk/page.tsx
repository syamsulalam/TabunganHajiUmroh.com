'use client';
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Star, Plane, MapPin, Bus, Coffee, Info, Clock, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Tooltip } from '@/components/Tooltip';

type PackageType = 'umroh' | 'haji';

export default function Page() {
  const [activeTab, setActiveTab] = useState<PackageType>('umroh');

  const packages = {
    umroh: [
      {
        id: "eko-umroh",
        name: "Paket Ekonomis",
        price: 28500000,
        color: "from-stone-400 to-stone-500",
        badge: "Pilihan Hemat",
        popular: false,
        specs: {
          flight: "Direct / 1x Transit (Lion Air / Saudia Ekonomi)",
          hotelMakkah: "Bintang 3 (Radius 500m-700m)",
          hotelMadinah: "Bintang 3 (Radius 300m-500m)",
          duration: "9 Hari (4 Makkah, 3 Madinah)",
          food: "Full Board Menu Indonesia Porsi Standar",
          transport: "Bus AC Standar (45 Seat)"
        },
        timeOptions: [
          { time: "1 Tahun", savings: "Rp 2.375.000 / bln" },
          { time: "2 Tahun", savings: "Rp 1.187.500 / bln" },
          { time: "3 Tahun", savings: "Rp 791.600 / bln" },
          { time: "4 Tahun", savings: "Rp 593.750 / bln" },
        ]
      },
      {
        id: "prem-umroh",
        name: "Paket Premium",
        price: 38500000,
        color: "from-[#D4AF37] to-amber-600",
        badge: "Paling Diminati",
        popular: true,
        specs: {
          flight: "Direct Flight (Garuda / Saudia Ekonomi Premium)",
          hotelMakkah: "Bintang 4/5 (Pelataran Haram, Zamzam Tower)",
          hotelMadinah: "Bintang 4/5 (Pelataran Nabawi, Ex: Mövenpick)",
          duration: "10 Hari (5 Makkah, 3 Madinah)",
          food: "Hotel Buffet Menu Internasional & Nusantara",
          transport: "Executive Bus (30 Seat), Kereta Cepat (Opsional)"
        },
        timeOptions: [
          { time: "1 Tahun", savings: "Rp 3.208.300 / bln" },
          { time: "2 Tahun", savings: "Rp 1.604.100 / bln" },
          { time: "3 Tahun", savings: "Rp 1.069.400 / bln" },
          { time: "5 Tahun", savings: "Rp 641.600 / bln" },
        ]
      },
      {
        id: "lux-umroh",
        name: "Paket Luxury (VVIP)",
        price: 65000000,
        color: "from-[#064E3B] to-emerald-900",
        badge: "Eksklusif",
        popular: false,
        specs: {
          flight: "Direct Flight Business Class / Executive",
          hotelMakkah: "Bintang 5 Premium (View Masjidil Haram, Ex: Fairmont)",
          hotelMadinah: "Bintang 5 Premium (View Masjid Nabawi, Ex: The Oberoi)",
          duration: "12 Hari (+ City Tour Thaif / Dubai)",
          food: "A La Carte & Premium Hotel Buffet (Custom Dietary)",
          transport: "Private Van VIP (Alphard/GMC) & VIP Haramain Train"
        },
        timeOptions: [
          { time: "1 Tahun", savings: "Rp 5.416.600 / bln" },
          { time: "2 Tahun", savings: "Rp 2.708.300 / bln" },
          { time: "3 Tahun", savings: "Rp 1.805.500 / bln" },
          { time: "5 Tahun", savings: "Rp 1.083.300 / bln" },
        ]
      }
    ],
    haji: [
      {
        id: "eko-haji",
        name: "Haji Reguler",
        price: 65000000, // as assumption for BPIH final
        color: "from-stone-400 to-stone-500",
        badge: "Pemerintah (Kemenag)",
        popular: true,
        specs: {
          flight: "Sesuai Kloter Kemenag (Garuda / Saudia)",
          hotelMakkah: "Sektor Pemondokan Kemenag (Tersedia Bus Salawat)",
          hotelMadinah: "Sektor Pemondokan Kemenag (Markaziah)",
          duration: "40 Hari",
          food: "Konsumsi Standar Dapur Kemenag",
          transport: "Bus Khusus Jemaah Haji Indonesia"
        },
        timeOptions: [
          { time: "5 Tahun", savings: "Rp 1.083.300 / bln" },
          { time: "10 Tahun", savings: "Rp 541.600 / bln" },
          { time: "15 Tahun", savings: "Rp 361.100 / bln" },
        ]
      },
      {
        id: "prem-haji",
        name: "Haji Khusus (Plus)",
        price: 255000000, // assumption ~$15k+
        color: "from-[#D4AF37] to-amber-600",
        badge: "Masa Tunggu 5-7 Thn",
        popular: false,
        specs: {
          flight: "Direct Flight (Garuda / Saudia Ekonomi Premium)",
          hotelMakkah: "Bintang 5 (Radius dekat Masjidil Haram)",
          hotelMadinah: "Bintang 5 (Sekitar Pelataran Masjid Nabawi)",
          duration: "25 Hari",
          food: "Catering Nusantara & Hotel Buffet",
          transport: "Maktab VIP di Mina & Arafah, Bus Executive"
        },
        timeOptions: [
          { time: "2 Tahun", savings: "Rp 10.625.000 / bln" },
          { time: "5 Tahun", savings: "Rp 4.250.000 / bln" },
          { time: "8 Tahun", savings: "Rp 2.656.200 / bln" },
        ]
      },
      {
        id: "lux-haji",
        name: "Haji Furoda / Mujamalah",
        price: 375000000,
        color: "from-[#064E3B] to-emerald-900",
        badge: "Berangkat Tahun Ini",
        popular: false,
        specs: {
          flight: "Direct Flight Express / Business Class Optional",
          hotelMakkah: "Bintang 5 Premium (Zamzam Tower, View Ka'bah)",
          hotelMadinah: "Bintang 5 Premium (Pelataran, Ex: Dar Al Taqwa)",
          duration: "20 Hari - 25 Hari",
          food: "A La Carte & Premium Buffet, Tenda AC VIP (MIna/Arafah)",
          transport: "Tenda VVIP Maktab Furoda, Private Van & Train"
        },
        timeOptions: [
          { time: "6 Bulan", savings: "Rp 62.500.000 / bln" },
          { time: "1 Tahun", savings: "Rp 31.250.000 / bln" },
          { time: "2 Tahun", savings: "Rp 15.625.000 / bln" },
        ]
      }
    ]
  };

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
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Pilihan Produk & Spesifikasi Paket</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Temukan paket Umroh atau Haji dari Travel Agent terpercaya (Mitra Penyelenggara) yang spesifikasinya transparan, sesuai dengan ekspektasi dan budget Anda.
          </p>
        </motion.div>

        {/* Tabs for Umroh or Haji */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-sm border border-stone-200 relative">
            <button
              onClick={() => setActiveTab('umroh')}
              className={`relative px-8 py-3 rounded-xl font-bold text-sm transition-colors z-10 ${activeTab === 'umroh' ? 'text-[#064E3B]' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Paket Umroh
            </button>
            <button
              onClick={() => setActiveTab('haji')}
              className={`relative px-8 py-3 rounded-xl font-bold text-sm transition-colors z-10 ${activeTab === 'haji' ? 'text-[#064E3B]' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Paket Haji
            </button>
            
            {/* Animated Tab Background Indicator */}
            <div className="absolute inset-2 top-2 bottom-2 left-2 right-2 pointer-events-none">
              <motion.div
                className="absolute top-0 bottom-0 bg-emerald-50 rounded-xl border border-emerald-100"
                initial={false}
                animate={{
                  x: activeTab === 'umroh' ? 0 : '100%',
                  width: '50%'
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            variants={containerVars}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            className="grid lg:grid-cols-3 gap-8 mb-16"
          >
            {packages[activeTab].map((pkg) => (
              <motion.div variants={itemVars} key={pkg.id} className={`relative bg-white rounded-3xl overflow-hidden border ${pkg.popular ? 'border-[#D4AF37] shadow-xl shadow-amber-900/5 ring-1 ring-[#D4AF37] lg:scale-105 z-10' : 'border-stone-200 shadow-sm hover:shadow-md'} flex flex-col transition-all duration-300`}>
                
                {/* Header Section */}
                <div className={`p-8 bg-gradient-to-br ${pkg.color} text-white relative`}>
                  {pkg.popular && (
                    <span className="absolute top-4 right-4 bg-white text-[#D4AF37] text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-sm">
                      {pkg.badge}
                    </span>
                  )}
                  {!pkg.popular && (
                    <span className="absolute top-4 right-4 bg-white/20 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full">
                      {pkg.badge}
                    </span>
                  )}
                  <h2 className="text-2xl font-serif font-bold text-white mb-2 pt-4">{pkg.name}</h2>
                  <p className="text-white/80 text-sm mb-4">Estimasi / Harga Paket</p>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">Rp {pkg.price.toLocaleString('id-ID')}</span>
                  </div>
                </div>

                {/* Specs Section */}
                <div className="p-8 flex-grow bg-white">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center">
                    Spesifikasi Travel & Layanan
                  </h4>
                  <ul className="space-y-5 text-sm text-slate-600">
                    <li className="flex items-start">
                      <Plane className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="block text-slate-900">Penerbangan</strong>
                        <span>{pkg.specs.flight}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="block text-slate-900">Akomodasi Makkah & Madinah</strong>
                        <span className="block mb-1">{pkg.specs.hotelMakkah}</span>
                        <span>{pkg.specs.hotelMadinah}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="block text-slate-900">Durasi Perjalanan</strong>
                        <span>{pkg.specs.duration}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Coffee className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="block text-slate-900">Konsumsi</strong>
                        <span>{pkg.specs.food}</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Bus className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="block text-slate-900">Transportasi Darat</strong>
                        <span>{pkg.specs.transport}</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Savings Strategy Section */}
                <div className="p-8 pt-0 bg-stone-50 border-t border-stone-100 flex-none mt-auto">
                  <h4 className="text-sm font-bold text-slate-900 mb-4 mt-8 flex items-center">
                    Estimasi Waktu Menabung
                    <Tooltip content="Angka perkiraan tanpa inflasi. Untuk simulasi inflasi, gunakan fitur Kalkulator.">
                      <Info className="w-4 h-4 ml-2 text-stone-400" />
                    </Tooltip>
                  </h4>
                  
                  <div className="space-y-2 mb-8">
                    {pkg.timeOptions.map((opt, oIdx) => (
                      <div key={oIdx} className="flex justify-between items-center bg-white p-3 rounded-xl border border-stone-200 text-sm">
                        <span className="font-semibold text-slate-700">{opt.time}</span>
                        <span className="text-emerald-700 font-medium">{opt.savings}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/daftar" className={`w-full flex items-center justify-center py-4 rounded-xl font-bold transition-all ${pkg.popular ? 'bg-[#064E3B] text-white shadow-lg hover:bg-emerald-800' : 'bg-white border-2 border-stone-200 text-slate-700 hover:border-emerald-600 hover:text-emerald-700'}`}>
                    Pilih Paket Ini
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

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
