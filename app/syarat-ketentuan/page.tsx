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
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-8">Syarat & Ketentuan</h1>
          <p className="text-sm text-slate-500 mb-8 pb-8 border-b border-stone-100">Pembaruan terakhir: 1 Mei 2026</p>
          
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
            <p>Selamat datang di TabunganHajiUmroh.com. Syarat & ketentuan ini menetapkan aturan dan regulasi untuk penggunaan platform penyelenggaraan teknologi finansial yang memfasilitasi pembukaan tabungan atas tujuan ibadah Haji dan Umroh.</p>
            
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Definisi Pihak</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Kami</strong> merujuk pada penyelenggara platform TabunganHajiUmroh.com.</li>
              <li><strong>Pengguna</strong> atau <strong>Anda</strong> merujuk pada individu yang menggunakan platform untuk membuka akun atau mencari informasi terkait produk.</li>
              <li><strong>Mitra Bank Syariah</strong> merujuk pada lembaga keuangan syariah resmi (Bank Umum Syariah / Unit Usaha Syariah) yang telah bekerjasama dengan kami dan terdaftar di Otoritas Jasa Keuangan (OJK).</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Layanan Platform</h3>
            <p>TabunganHajiUmroh.com berfungsi sebagai platform digital / <em>aggregator</em> yang menjembatani Pengguna dengan Mitra Bank Syariah. Kami tidak menyimpan, mengelola, atau memutarkan dana nasabah secara langsung. Seluruh dana yang disetorkan Pengguna langsung dikelola oleh Mitra Bank Syariah yang dipilih oleh Pengguna sesuai dengan prinsip syariah (seperti akad <em>Wadiah</em> atau <em>Mudharabah</em>).</p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Otentikasi dan e-KYC</h3>
            <p>Untuk menggunakan fitur pembukaan rekening, Pengguna wajib melakukan proses e-KYC (<em>Electronic Know Your Customer</em>) yang sah sesuai regulasi BI dan OJK. Rekening bank tidak dapat diterbitkan bagi individu yang menggunakan data palsu, fiktif, atau milik orang lain tanpa izin hukum.</p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Penalti dan Biaya Tersembunyi</h3>
            <p>Kami menjamin bahwa platform kami bebas dari biaya administrasi bulanan tersembunyi yang ditagihkan oleh kami kepada Pengguna. Namun, terkait penalti, administrasi tutup rekening, atau biaya materai sepenuhnya tunduk kepada kebijakan masing-masing Mitra Bank Syariah yang dipilih Pengguna.</p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Pendaftaran Siskohat Kemenag</h3>
            <p>Fitur otomatis pendaftaran nomor porsi haji (Siskohat) dapat diakses apabila dana dalam rekening tabungan Haji reguler Anda pada Mitra Bank Syariah telah menyentuh batas minimum pendaftaran yang ditetapkan oleh Kementerian Agama Republik Indonesia (Rp 25.000.000 per tahun 2026).</p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Aturan Perubahan</h3>
            <p>Kami berhak untuk merevisi, memperbarui, atau memodifikasi Syarat dan Ketentuan ini sewaktu-waktu. Perusahaan akan memberikan notifikasi paling lambat 7 (tujuh) hari sebelum ketentuan baru berlaku efektif melalui Email Pengguna atau pengumuman Banner pada Dashboard.</p>
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
