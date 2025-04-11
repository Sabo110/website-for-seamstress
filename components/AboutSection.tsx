'use client';

import React from 'react';
import Image from 'next/image';
import aboutImage from '@/images/bg-test.png'; // Remplacez par le chemin de votre image

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-6 md:px-16 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-indigo-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-30"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Title and Image */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            À propos de <span className="text-indigo-500">Samira Couture</span>
          </h2>
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] group">
            <Image
              src={aboutImage}
              alt="À propos de Samira Couture"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col justify-center space-y-6">
          <p className="text-lg text-gray-600 leading-relaxed">
            Chez <span className="font-semibold text-indigo-500">Samira Couture</span>, chaque création est une œuvre d'art. 
            Depuis plus de 10 ans, nous transformons vos idées en pièces uniques, alliant élégance, qualité et créativité.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center bg-white bg-opacity-80 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-indigo-500 text-white flex items-center justify-center rounded-full mb-4">
                <span className="text-lg font-bold">Q</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Qualité</h3>
              <p className="text-sm text-gray-600 text-center">
                Des matériaux haut de gamme et une attention minutieuse aux détails.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white bg-opacity-80 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-purple-500 text-white flex items-center justify-center rounded-full mb-4">
                <span className="text-lg font-bold">C</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Créativité</h3>
              <p className="text-sm text-gray-600 text-center">
                Des designs uniques qui reflètent votre style et votre personnalité.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white bg-opacity-80 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 bg-yellow-500 text-white flex items-center justify-center rounded-full mb-4">
                <span className="text-lg font-bold">S</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Satisfaction</h3>
              <p className="text-sm text-gray-600 text-center">
                Votre bonheur est notre priorité absolue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}