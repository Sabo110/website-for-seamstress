'use client';

import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import ContactAction from './ContactAction';

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Contact Section */}
      <div className="py-16 px-6 md:px-16 max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contactez-nous</h2>
        <p className="text-lg text-gray-600 mb-10">
          Besoin d'un service de couture ou d'une consultation ? Nous sommes là pour vous aider !
        </p>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ContactAction
            href="https://wa.me/659182723" // Remplacez par votre numéro WhatsApp
            icon={<FaWhatsapp size={36} />}
            text="Envoyez-nous un message"
            bgColor="bg-green-500"
            hoverColor="bg-green-600"
          />
          <ContactAction
            href="tel:+237659182723" // Remplacez par votre numéro de téléphone
            icon={<FaPhoneAlt size={36} />}
            text="Appelez-nous"
            bgColor="bg-indigo-500"
            hoverColor="bg-indigo-600"
          />
          <ContactAction
            href="mailto:samirphanuel@gmail.com" // Remplacez par votre adresse email
            icon={<FaEnvelope size={36} />}
            text="Envoyez-nous un email"
            bgColor="bg-yellow-500"
            hoverColor="bg-yellow-600"
          />
        </div>

        {/* Working Days */}
        <div className="relative bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-6 md:px-16 overflow-hidden rounded-2xl shadow-lg">
          {/* Decorative Background Elements */}
          

          <div className="relative">
            <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center gap-2 text-gray-900">
              <FaClock className="text-yellow-500" />
              Horaires d'ouverture
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center bg-white bg-opacity-90 p-4 rounded-lg shadow-md">
                <span className="font-medium text-lg text-gray-900">Lundi - Vendredi</span>
                <span className="text-sm text-gray-700">09:00 - 18:00</span>
              </div>
              <div className="flex flex-col items-center bg-white bg-opacity-90 p-4 rounded-lg shadow-md">
                <span className="font-medium text-lg text-gray-900">Samedi</span>
                <span className="text-sm text-gray-700">10:00 - 16:00</span>
              </div>
              <div className="flex flex-col items-center bg-white bg-opacity-90 p-4 rounded-lg shadow-md">
                <span className="font-medium text-lg text-gray-900">Dimanche</span>
                <span className="text-sm text-gray-700">Fermé</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}