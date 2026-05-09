import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, Briefcase, MapPin, Clock } from 'lucide-react';

export default function Page() {
  const jobs = [
    { title: "Senior Islamic Financial Advisor", type: "Full-Time", location: "Jakarta, Indonesia", dept: "Advisory" },
    { title: "Frontend Engineer (React)", type: "Full-Time", location: "Remote / Jakarta", dept: "Engineering" },
    { title: "Digital Marketing Specialist", type: "Full-Time", location: "Jakarta, Indonesia", dept: "Marketing" },
    { title: "Customer Success (Jemaah Support)", type: "Shift", location: "Jakarta, Indonesia", dept: "Operations" },
  ];

  return (
    <div className="min-h-screen pt-20 flex flex-col bg-stone-50">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Beranda
        </Link>
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Bergabung dengan Kami</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Mari wujudkan kemudahan akses ibadah haji dan umroh bagi umat Muslim di seluruh pelosok negeri. 
            Jadilah bagian dari misi mulia ini.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Posisi Terbuka</h2>
          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <span className="text-xs font-semibold text-[#064E3B] bg-emerald-100 px-3 py-1 rounded-full mb-3 inline-block">
                    {job.dept}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {job.location}</span>
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {job.type}</span>
                  </div>
                </div>
                <button type="button" className="mt-4 sm:mt-0 px-6 py-2 bg-[#D4AF37] text-emerald-900 font-bold rounded-lg hover:bg-yellow-500 transition-colors">
                  Daftar
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#064E3B] text-white rounded-3xl p-8 md:p-12 text-center">
            <Briefcase className="w-12 h-12 text-[#D4AF37] mx-auto mb-6" />
            <h3 className="text-2xl font-serif font-bold mb-4">Tidak menemukan posisi yang pas?</h3>
            <p className="text-emerald-100 mb-8 max-w-lg mx-auto">Kami selalu mencari talenta luar biasa. Kirimkan CV dan portofolio Anda ke email rekrutmen kami.</p>
            <a href="mailto:karir@tabunganhajiumroh.com" className="inline-block px-8 py-4 bg-white text-[#064E3B] font-bold rounded-xl hover:bg-stone-100 transition-all">
              karir@tabunganhajiumroh.com
            </a>
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
