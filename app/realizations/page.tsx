import React, { Suspense } from 'react';
import RealizationsContent from '@/components/RealizationsContent'; // Import du composant client
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Nos Réalisations - Samira Couture",
  description: "Découvrez les réalisations uniques de Samira Couture. Des créations sur mesure alliant élégance et qualité.",
};

export default function RealizationsPage() {
  return (
    <Suspense fallback={<div>Chargement des réalisations...</div>}>
      <RealizationsContent />
    </Suspense>
  );
}

