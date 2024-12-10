'use client';

import {useState} from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="container-padding">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-primary">
            MHB Pvt. Ltd.
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className="text-gray-600 hover:text-primary transition-colors">
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-gray-600 hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-primary transition-colors">
              Contact
            </Link>
            <button className="button-primary">Get a Quote</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -20}}
            className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="#services"
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link
                href="#portfolio"
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}>
                Portfolio
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <button className="button-primary w-full mt-4">
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
