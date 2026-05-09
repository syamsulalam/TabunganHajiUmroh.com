import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, BookOpen, Video, FileText } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
  const posts = [
    {
      title: 'Cara Mengecek Antrian Haji via Aplikasi Kemenag Pintar',
      category: 'Panduan',
      image: 'https://picsum.photos/seed/hajj1/600/400',
      type: 'article',
    },
    {
      title: '5 Tips Mengatur Keuangan untuk Pasangan Muda',
      category: 'Finansial',
      image: 'https://picsum.photos/seed/hajj2/600/400',
      type: 'article',
    },
    {
      title: 'Perbedaan Haji Reguler, Plus, dan Furoda. Mana yang Tepat?',
      category: 'Edukasi',
      image: 'https://picsum.photos/seed/hajj3/600/400',
      type: 'video',
    },
    {
      title: 'Mengenal Istilah-Istilah Manasik Haji',
      category: 'Ibadah',
      image: 'https://picsum.photos/seed/hajj4/600/400',
      type: 'article',
    },
    {
      title: 'Bagaimana Pengelolaan Dana Haji di Investasikan oleh BPKH?',
      category: 'Finansial',
      image: 'https://picsum.photos/seed/hajj5/600/400',
      type: 'article',
    },
    {
      title: 'Persiapan Mental & Spiritual Ke Tanah Suci',
      category: 'Edukasi',
      image: 'https://picsum.photos/seed/hajj6/600/400',
      type: 'video',
    }
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Pusat Edukasi & Inspirasi</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Perkaya pengetahuan Anda. Temukan info terbaru seputar kuota keberangkatan, tips finansial syariah, dan tata cara ibadah yang benar.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
           <button className="px-6 py-2 rounded-full font-medium bg-[#064E3B] text-white">Semua</button>
           <button className="px-6 py-2 rounded-full font-medium bg-white text-slate-600 border border-stone-200 hover:bg-stone-50">Panduan Kemenag</button>
           <button className="px-6 py-2 rounded-full font-medium bg-white text-slate-600 border border-stone-200 hover:bg-stone-50">Keuangan Islami</button>
           <button className="px-6 py-2 rounded-full font-medium bg-white text-slate-600 border border-stone-200 hover:bg-stone-50">Fikih Ibadah</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="group rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl transition-all cursor-pointer bg-white flex flex-col">
              <div className="h-56 w-full relative overflow-hidden bg-stone-100">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                {post.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <Video className="w-5 h-5 text-[#064E3B] ml-1" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-3 block">{post.category}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#064E3B] transition-colors leading-snug">{post.title}</h3>
                <div className="mt-auto flex items-center text-[#064E3B] font-medium text-sm pt-4 border-t border-stone-100">
                  {post.type === 'video' ? 'Tonton Video' : 'Baca Artikel'} <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
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
