import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen pt-20 flex flex-col bg-stone-50">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Beranda
        </Link>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Hubungi Kami</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Tim layanan jemaah kami siap membantu Anda setiap langkah menuju persiapan ibadah ke Tanah Suci.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
              <h3 className="font-serif font-bold text-2xl text-slate-900 mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#064E3B]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Kantor Pusat</h4>
                    <p className="text-slate-600">Gedung Menara Mulia Lt. 12<br/>Jl. Gatot Subroto Kav. 9-11<br/>Jakarta Selatan 12930</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#064E3B]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Telepon & WhatsApp</h4>
                    <p className="text-slate-600">+62 811 0000 0000<br/>(Bebas Pulsa)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#064E3B]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Layanan</h4>
                    <p className="text-slate-600">bantuan@tabunganhajiumroh.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#064E3B]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Jam Operasional</h4>
                    <p className="text-slate-600">Senin - Jumat: 08:00 - 17:00 WIB<br/>Sabtu - Minggu: Layanan Darurat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
            <h3 className="font-serif font-bold text-2xl text-slate-900 mb-6">Kirim Pesan</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nomor Telepon</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B]" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B]" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Pesan Anda</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] resize-none"></textarea>
              </div>

              <button type="button" className="w-full bg-[#064E3B] text-white py-4 rounded-xl font-bold hover:bg-emerald-900 transition-colors">
                Kirim Pesan
              </button>
            </form>
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
