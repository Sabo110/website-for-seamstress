'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Librairie pour les animations
import Image from 'next/image'; // Composant optimisé pour les images dans Next.js
import { StaticImport } from 'next/dist/shared/lib/get-img-props'; // Type pour les images statiques

interface RealizationCardProps {
  img: StaticImport; // Image statique importée
  alt: string; // Texte alternatif pour l'image
  title: string; // Titre de la réalisation
  delay: number; // Délai pour l'animation
}

export default function RealizationCard({ img, alt, title, delay }: RealizationCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl shadow-lg group hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, scale: 0.9 }} // Animation initiale
      whileInView={{ opacity: 1, scale: 1 }} // Animation lorsque l'élément est visible
      transition={{ duration: 0.3, delay }} // Durée et délai de l'animation
      viewport={{ once: true }} // L'animation ne se déclenche qu'une seule fois
    >
      {/* Image */}
      <Image
        src={img} // Image de la réalisation
        alt={alt} // Texte alternatif
        className="rounded-2xl group-hover:scale-105 transition-transform duration-500" // Animation au survol
        layout="responsive" // Mise en page responsive
        width={4}
        height={3}
        placeholder="blur" // Effet de flou pendant le chargement
      />

      {/* Titre en superposition */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <p className="text-lg font-semibold text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg shadow-md">
          {title}
        </p>
      </div>
    </motion.div>
  );
}