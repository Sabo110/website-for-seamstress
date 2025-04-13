'use client';

import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className="py-16 px-6 md:px-16 lg:py-32">
      <div className="max-w-7xl mx-auto text-center">
        {/* Titre de la section */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Ce que disent nos clients
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Découvrez les retours de nos clients satisfaits.
        </p>

        {/* Liste des témoignages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              feedback={testimonial.feedback}
              avatar={testimonial.avatar}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}