import React from 'react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-white via-gray-100 to-indigo-100 h-screen"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 drop-shadow-lg">
          Bienvenue chez <span className="text-indigo-500">Samira Couture</span>
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-3xl text-gray-700 drop-shadow-md">
          Découvrez l'art de la couture sur mesure, où chaque création est pensée pour sublimer votre style.
        </p>
        <a
          href="#contact"
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300"
        >
          Prenez rendez-vous avec Samira
        </a>
      </div>
    </section>
  );
}
