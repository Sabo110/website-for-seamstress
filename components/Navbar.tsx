'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import du composant Link de Next.js
import logo from '@/images/logo.png'; // Replace with the actual path to your logo image

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change navbar shadow after scrolling 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-20 transition-shadow duration-300 md:py-6 ${isScrolled ? 'shadow-md bg-white' : ''
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={logo} alt="Samira Couture Logo" width={50} height={50} />
            <span className="text-2xl font-heading tracking-wide text-gray-800 hidden md:inline">
              Samira Couture
            </span>
          </Link>
        </div>

        {/* Menu */}
        <div>
          <Link
            href="/realizations" // Lien vers la page Réalisations
            className="text-lg font-semibold text-gray-800 hover:text-indigo-400 transition duration-300"
          >
            Réalisations
          </Link>
        </div>
      </div>
    </nav>
  );
}