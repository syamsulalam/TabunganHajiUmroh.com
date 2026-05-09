'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Produk', href: '/produk' },
    { name: 'Kalkulator', href: '/kalkulator' },
    { name: 'Bank Partner', href: '/mitra' },
    { name: 'Edukasi', href: '/edukasi' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg leading-none">T</span>
            </div>
            <Link href="/" className="font-serif font-bold text-xl text-emerald-900 tracking-tight" onClick={() => setIsOpen(false)}>
              TabunganHajiUmroh
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-stone-600 hover:text-emerald-800 font-medium transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/login">
              <span className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-[#064E3B] bg-emerald-50 hover:bg-emerald-100 transition-colors">
                Masuk
              </span>
            </Link>
            <Link href="/daftar">
              <span className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-[#064E3B] hover:bg-emerald-800 transition-colors">
                Buka Rekening
              </span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              className="p-2 -mr-2 text-stone-600 hover:text-emerald-900"
              onClick={() => setIsOpen(!isOpen)}
            >
               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-stone-200/50 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-stone-600 hover:text-emerald-800 font-medium transition-colors text-base p-2 rounded-md hover:bg-stone-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="h-px bg-stone-100 w-full my-2"></div>
              <Link 
                href="/login"
                onClick={() => setIsOpen(false)}
                className="w-full text-center inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-[#064E3B] bg-emerald-50 hover:bg-emerald-100 transition-colors"
              >
                Masuk
              </Link>
              <Link 
                href="/daftar"
                onClick={() => setIsOpen(false)}
                className="w-full text-center inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#064E3B] hover:bg-emerald-800 transition-colors"
              >
                Buka Rekening
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
