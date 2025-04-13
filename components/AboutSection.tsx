'use client';

import React from 'react';
import Image from 'next/image';
import aboutImage from '@/images/bg-test.png'; // Remplacez par le chemin de votre image
import FeatureCard from './FeatureCard'; // Import du composant réutilisable

export default function AboutSection() {
  // Données pour les fonctionnalités
  const features = [
    {
      icon: 'Q',
      title: 'Qualité',
      description: 'Des matériaux haut de gamme et une attention minutieuse aux détails.',
      bgColor: 'bg-indigo-500', // Couleur de fond du cercle
    },
    {
      icon: 'C',
      title: 'Créativité',
      description: 'Des designs uniques qui reflètent votre style et votre personnalité.',
      bgColor: 'bg-purple-500',
    },
    {
      icon: 'S',
      title: 'Satisfaction',
      description: 'Votre bonheur est notre priorité absolue.',
      bgColor: 'bg-yellow-500',
    },
  ];
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-gray-100 to-gray-200 py-16 px-6 md:px-16 overflow-hidden"
    >
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-indigo-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-30"></div>

      {/* Contenu principal */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Colonne gauche : Titre et image */}
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
              placeholder='blur'
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          </div>
        </div>

        {/* Colonne droite : Texte et fonctionnalités */}
        <div className="flex flex-col justify-center space-y-6">
          <p className="text-lg text-gray-600 leading-relaxed">
            Chez <span className="font-semibold text-indigo-500">Samira Couture</span>, chaque création est une œuvre d'art. 
            Depuis plus de 10 ans, nous transformons vos idées en pièces uniques, alliant élégance, qualité et créativité.
          </p>

          {/* Grille des fonctionnalités */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-2">
            {features.map((feature, index) => (
              <FeatureCard
                key={index} // Clé unique pour chaque élément
                icon={feature.icon} // Lettre ou icône
                title={feature.title} // Titre de la fonctionnalité
                description={feature.description} // Description de la fonctionnalité
                bgColor={feature.bgColor} // Couleur de fond du cercle
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}