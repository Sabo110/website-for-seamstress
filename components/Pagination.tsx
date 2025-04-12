'use client';

import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const getPaginationRange = () => {
    const range = [];
    const maxVisiblePages = 5;

    const start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const end = Math.min(totalPages, start + maxVisiblePages - 1);

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    if (!range.includes(totalPages)) {
      if (range[range.length - 1] !== totalPages - 1) {
        range.push('...');
      }
      range.push(totalPages);
    }

    return range;
  };

  return (
    <div className="flex flex-wrap justify-center items-center mt-8 gap-2">
      {/* Bouton "Précédent" */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 rounded-lg text-sm ${
          currentPage === 1
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        } transition duration-300`}
      >
        Précédent
      </button>

      {/* Numéros de page */}
      {getPaginationRange().map((pageNumber, index) => (
        <button
          key={index}
          onClick={() => typeof pageNumber === 'number' && onPageChange(pageNumber)}
          disabled={typeof pageNumber !== 'number'}
          className={`px-3 py-2 rounded-lg text-sm ${
            currentPage === pageNumber
              ? 'bg-indigo-500 text-white'
              : typeof pageNumber === 'number'
              ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              : 'bg-transparent text-gray-500 cursor-default'
          } transition duration-300`}
        >
          {pageNumber}
        </button>
      ))}

      {/* Bouton "Suivant" */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 rounded-lg text-sm ${
          currentPage === totalPages
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        } transition duration-300`}
      >
        Suivant
      </button>
    </div>
  );
}