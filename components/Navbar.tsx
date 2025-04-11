'use client';

import React, { useState, useEffect } from 'react';
import { AlignRight } from 'lucide-react';
import Image from 'next/image';
import logo from '@/images/logo.png'; // Replace with the actual path to your logo image
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet'; // Adjust the import path based on your project structure

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false); // État pour contrôler l'ouverture du Sheet

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change navbar shadow after scrolling 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsSheetOpen(false); // Ferme le Sheet lorsque l'utilisateur clique sur un lien
  };

  return (
    <nav
      className={`sticky top-0 z-20 transition-shadow duration-300 md:py-6  ${
        isScrolled ? 'shadow-md bg-white' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Samira Couture Logo" width={50} height={50} />
          <span className="text-2xl font-heading tracking-wide text-gray-800 hidden md:inline">
            Samira Couture
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="text-lg font-semibold text-gray-800 hover:text-indigo-400 transition duration-300"
          >
            À propos
          </a>
          <a
            href="#contact"
            className="text-lg font-semibold text-gray-800 hover:text-indigo-400 transition duration-300"
          >
            Contact
          </a>
          <a
            href="#services"
            className="text-lg font-semibold text-gray-800 hover:text-indigo-400 transition duration-300"
          >
            Services
          </a>
          <a
            href="#realizations"
            className="text-lg font-semibold text-gray-800 hover:text-indigo-400 transition duration-300"
          >
            Réalisations
          </a>
        </div>

        {/* Mobile Burger Menu */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <button
                className="focus:outline-none cursor-pointer text-gray-800"
                aria-label="Toggle Menu"
              >
                <AlignRight size={24} /> {/* Burger menu icon */}
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-white text-gray-800"
            >
              <SheetHeader>
                <nav className="space-y-6 text-center mt-8 flex flex-col items-center justify-center">
                  <a
                    href="#about"
                    className="text-gray-800 text-2xl font-semibold hover:text-indigo-400"
                    onClick={handleLinkClick} // Ferme le Sheet au clic
                  >
                    À propos
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-800 text-2xl font-semibold hover:text-indigo-400"
                    onClick={handleLinkClick} // Ferme le Sheet au clic
                  >
                    Contact
                  </a>
                  <a
                    href="#services"
                    className="text-gray-800 text-2xl font-semibold hover:text-indigo-400"
                    onClick={handleLinkClick} // Ferme le Sheet au clic
                  >
                    Services
                  </a>
                  <a
                    href="#realizations"
                    className="text-gray-800 text-2xl font-semibold hover:text-indigo-400"
                    onClick={handleLinkClick} // Ferme le Sheet au clic
                  >
                    Réalisations
                  </a>
                </nav>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}