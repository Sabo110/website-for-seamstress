import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Localisation</h3>
            <p className="text-gray-400">
              Obili, Carrefour
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">
                  Nos Services
                </a>
              </li>
              <li>
                <a href="#realizations" className="text-gray-400 hover:text-white transition">
                  Réalisations
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition">
                  Contactez-nous
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex justify-center md:justify-end space-x-6">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://wa.me/659182723"
                className="text-gray-400 hover:text-white transition"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="mailto:samirphanuel@gmail.com"
                className="text-gray-400 hover:text-white transition"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Copyright */}
        <div className="mt-4 text-center text-gray-400">
          <p>&copy; 2025 Samira Couture. Tous droits réservés.</p>
          <p className="text-sm">
            Conçu avec ❤️ par <span className="font-semibold text-white">Yoba Sabo</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}