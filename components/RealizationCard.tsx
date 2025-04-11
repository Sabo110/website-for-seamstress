'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface RealizationCardProps {
  img: StaticImport;
  alt: string;
  title: string;
  delay: number;
}

export default function RealizationCard({ img, alt, title, delay }: RealizationCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl shadow-lg group hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <Image
        src={img}
        alt={alt}
        className="rounded-2xl group-hover:scale-105 transition-transform duration-500"
        layout="responsive"
        width={4}
        height={3}
        placeholder="blur"
      />

      {/* Title Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <p className="text-lg font-semibold text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg shadow-md">
          {title}
        </p>
      </div>
    </motion.div>
  );
}