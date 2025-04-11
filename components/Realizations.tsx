'use client';

import React from 'react';
import { motion } from 'framer-motion';
import RealizationCard from './RealizationCard'; // Import the new RealizationCard component
import image from '@/images/realization.png'; // Adjust the path to your image

const realizations = [
  { id: 1, title: 'Robe élégante', alt: 'Robe élégante sur mesure', img: image },
  { id: 2, title: 'Costume sur mesure', alt: 'Costume sur mesure', img: image },
  { id: 3, title: 'Robe de soirée', alt: 'Robe de soirée personnalisée', img: image },
  { id: 4, title: 'Veste élégante', alt: 'Veste élégante sur mesure', img: image },
  { id: 5, title: 'Robe de mariée', alt: 'Robe de mariée personnalisée', img: image },
  { id: 6, title: 'Tenue traditionnelle', alt: 'Tenue traditionnelle sur mesure', img: image },
];

export default function Realizations() {
  return (
    <section id="realizations" className="bg-gray-50 py-16 px-6 md:px-16">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Nos Réalisations</h2>
        <p className="text-lg text-gray-600 mb-12">
          Découvrez quelques-unes de nos créations uniques et personnalisées.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {realizations.map((realization, index) => (
          <RealizationCard
            key={realization.id}
            img={realization.img}
            alt={realization.alt}
            title={realization.title}
            delay={index * 0.2}
          />
        ))}
      </div>
    </section>
  );
}