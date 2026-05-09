import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen pt-20 flex flex-col bg-stone-50">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Beranda
        </Link>
        <div className="bg-white rounded-3xl p-8 md:p-14 shadow-sm border border-stone-100">
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-8">Kebijakan Privasi</h1>
          <p className="text-sm text-slate-500 mb-8 pb-8 border-b border-stone-100">Efektif mulai: 1 Mei 2026</p>

          <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
            <p>Privasi Anda sangat penting bagi kami di TabunganHajiUmroh.com. Kebijakan ini menguraikan bagaimana kami mengumpulkan, menggunakan, melindungi, dan memproses data pribadi (PII) Anda sesuai dengan Undang-Undang Perlindungan Data Pribadi (UU PDP).</p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Data yang Kami Kumpulkan</h3>
            <p>Kami mengumpulkan informasi yang Anda berikan langsung ketika menggunakan layanan kami, antara lain:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Data Identitas:</strong> Nama lengkap, NIK (Nomor Induk Kependudukan), data biometrik (dalam proses e-KYC), salinan KTP atau paspor.</li>
              <li><strong>Data Kontak:</strong> Alamat email, nomor ponsel aktif, alamat rumah.</li>
              <li><strong>Data Finansial:</strong> Nominal pemasukan bulanan, nomor rekening, bukti mutasi transfer. (Dicatat dan dienkripsi).</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Bagaimana Kami Menggunakan Data Anda</h3>
            <p>Data pribadi digunakan semata-mata untuk memfasilitasi tujuan pendaftaran rekening syariah, antara lain:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Meneruskan data identitas ke sistem Mitra Bank Syariah untuk otentikasi pembukaan tabungan (CDD/Customer Due Diligence).</li>
              <li>Membantu mem-follow up ke Kementerian Agama Republik Indonesia (Siskohat) untuk pendaftaran porsi haji Anda.</li>
              <li>Membangun simulasi progress ibadah (dashboard) secara interaktif berdasarkan setoran Anda.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Pembagian Informasi kepada Pihak Ketiga</h3>
            <p>Kami bersumpah TIDAK akan pernah menjual, menyewakan, atau memperdagangkan data pribadi Anda kepada agen asuransi pihak ketiga, agen properti, atau entitas tak terkait. Data Anda HANYA kami bagikan kepada:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Bank Syariah mitra resmi yang Anda jadikan tempat menabung.</li>
              <li>Penyelenggara API e-KYC tersertifikasi Kominfo (seperti Asli RI atau VIDA) demi otentikasi.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Keamanan dan Enkripsi</h3>
            <p>Kami menerapkan prosedur keamanan tingkat perbankan, enkripsi data <i>in-transit</i> (SSL 256-bit) dan <i>at-rest</i>. Kami memiliki audit secara berkala untuk meyakinkan ketahanan sistem terhadap kebocoran informasi.</p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Permintaan Penghapusan Data (Right to be Forgotten)</h3>
            <p>Jika Anda memutuskan untuk berhenti menggunakan platform kami, Anda memiliki hak penuh untuk meminta penghapusan seluruh data digital dari sistem <i>frontend</i> dan <i>backend</i> kami dengan mengirimkan email pemberitahuan. Namun perlu dicatat, data yang telah masuk ke <i>core system</i> perbankan wajib tunduk pada prosedur penutupan rekening bank setempat.</p>
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
