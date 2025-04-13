'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation'; // Permet de récupérer les paramètres de l'URL
import RealizationCard from '@/components/RealizationCard'; // Composant pour afficher une carte de réalisation
import Pagination from '@/components/Pagination'; // Composant pour gérer la pagination
import realizationImage from '@/images/realization.png'; // Image utilisée pour toutes les réalisations
import { allRealizations as realizations } from '@/data/realizations'; // Import des données des réalisations depuis un fichier externe

export default function RealizationsContent() {
  const searchParams = useSearchParams(); // Récupère les paramètres de l'URL
  const currentPage = parseInt(searchParams.get('page') || '1', 10); // Récupère la page actuelle depuis l'URL ou utilise 1 par défaut
  const itemsPerPage = 2; // Nombre de réalisations affichées par page

  // Calcul des indices pour afficher les réalisations de la page actuelle
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = realizations.slice(indexOfFirstItem, indexOfLastItem); // Sélectionne les réalisations à afficher

  const totalPages = Math.ceil(realizations.length / itemsPerPage); // Calcule le nombre total de pages

  // Fonction pour gérer le changement de page
  const handlePageChange = (pageNumber: number) => {
    const url = new URL(window.location.href); // Crée une nouvelle URL basée sur l'URL actuelle
    url.searchParams.set('page', pageNumber.toString()); // Met à jour le paramètre `page` dans l'URL
    window.history.pushState({}, '', url.toString()); // Met à jour l'URL sans recharger la page
    window.dispatchEvent(new Event('popstate')); // Déclenche un événement pour forcer la mise à jour de l'état
  };

  return (
    <section className="py-16 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Titre de la section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Nos Réalisations</h1>
        <p className="text-lg text-gray-600 mb-12">
          Découvrez quelques-unes de nos créations uniques, conçues avec soin et passion.
        </p>

        {/* Grille des réalisations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentItems.map((realization, index) => (
            <RealizationCard
              key={realization.id} // Clé unique pour chaque réalisation
              img={realizationImage} // Image de la réalisation
              alt={realization.title} // Texte alternatif pour l'image
              title={realization.title} // Titre de la réalisation
              delay={index * 0.1} // Délai pour l'animation
            />
          ))}
        </div>

        {/* Composant de pagination */}
        <Pagination
          currentPage={currentPage} // Page actuelle
          totalPages={totalPages} // Nombre total de pages
          onPageChange={handlePageChange} // Fonction appelée lors du changement de page
        />
      </div>
    </section>
  );
}