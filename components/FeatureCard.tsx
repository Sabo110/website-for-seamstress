'use client';

import React from 'react';

// Définition des props pour le composant FeatureCard
interface FeatureCardProps {
  icon: string; // Lettre ou icône à afficher dans le cercle
  title: string; // Titre de la fonctionnalité
  description: string; // Description de la fonctionnalité
  bgColor: string; // Couleur de fond du cercle
}

// Composant réutilisable pour afficher une fonctionnalité
export default function FeatureCard({ icon, title, description, bgColor }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center bg-white bg-opacity-80 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
      {/* Cercle avec l'icône */}
      <div
        className={`w-12 h-12 ${bgColor} text-white flex items-center justify-center rounded-full mb-4`}
      >
        <span className="text-lg font-bold">{icon}</span>
      </div>

      {/* Titre de la fonctionnalité */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>

      {/* Description de la fonctionnalité */}
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
  );
}