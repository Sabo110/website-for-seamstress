'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

export default function ServiceCard({ icon, title, description, delay }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
    >
      {/* Icon */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-5xl p-4 rounded-full mb-6 flex items-center justify-center shadow-md">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-3 tracking-wide">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}