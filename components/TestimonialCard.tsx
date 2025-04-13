'use client'; // Indique que ce composant est côté client (Next.js)

import React from 'react';
import { motion } from 'framer-motion'; // Librairie pour les animations
import Image from 'next/image'; // Composant optimisé pour les images dans Next.js
import { StaticImport } from 'next/dist/shared/lib/get-img-props'; // Type pour les images statiques

// Définition des props attendues par le composant
interface TestimonialCardProps {
  name: string; // Nom du client
  feedback: string; // Témoignage du client
  avatar: StaticImport; // Image statique pour l'avatar du client
  delay: number; // Délai pour l'animation
}

// Composant principal pour afficher un témoignage
export default function TestimonialCard({ name, feedback, avatar, delay }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white border rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }} // Animation initiale (invisible et décalée vers le bas)
      whileInView={{ opacity: 1, y: 0 }} // Animation lorsque l'élément devient visible
      transition={{ duration: 0.3, delay }} // Durée et délai de l'animation
      viewport={{ once: true }} // L'animation ne se déclenche qu'une seule fois
    >
      {/* Avatar du client */}
      <div className="w-20 h-20 mb-4">
        <Image
          src={avatar} // Image de l'avatar
          alt={`Avatar of ${name}`} // Texte alternatif pour l'accessibilité
          className="rounded-full border-4 border-indigo-500" // Bordure stylisée autour de l'avatar
          placeholder="blur" // Effet de flou pendant le chargement
        />
      </div>

      {/* Nom du client */}
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>

      {/* Témoignage du client */}
      <p className="text-gray-600 mt-4 italic">"{feedback}"</p>
    </motion.div>
  );
}