'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCut, FaTshirt, FaRulerCombined } from 'react-icons/fa';
import ServiceCard from './ServiceCard'; // Import the new ServiceCard component

// Services data
const services = [
  {
    id: 1,
    title: 'Retouches',
    description: 'Ajustez vos vêtements pour un ajustement parfait, avec des retouches précises et soignées.',
    icon: <FaCut />,
  },
  {
    id: 2,
    title: 'Créations sur mesure',
    description: 'Confectionnez des vêtements uniques et personnalisés, adaptés à votre style et vos envies.',
    icon: <FaTshirt />,
  },
  {
    id: 3,
    title: 'Conception et Design',
    description: 'Profitez de nos services de design pour créer des modèles uniques et élégants.',
    icon: <FaRulerCombined />,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-neutral-light py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-heading font-bold text-primary-dark mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Nos Services
        </motion.h2>
        <motion.p
          className="text-lg text-neutral-dark mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Découvrez nos services de couture professionnels, adaptés à vos besoins.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}