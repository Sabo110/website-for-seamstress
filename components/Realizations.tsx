'use client';

import React from 'react';
import { motion } from 'framer-motion';
import RealizationCard from './RealizationCard'; // Import the new RealizationCard component
import { someRealizations as  realizations} from '@/data/realizations';



export default function Realizations() {
  return (
    <section id="realizations" className="bg-gray-50 py-16 px-6 md:px-16">
      <div className='max-w-7xl mx-auto'>
      <motion.div
        className="text-center"
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
      </div>
    </section>
  );
}