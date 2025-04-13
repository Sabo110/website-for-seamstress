import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-4 sm:px-6">
      {/* Titre principal */}
      <h1 className="text-5xl sm:text-6xl font-bold text-indigo-600 mb-4">404</h1>
      <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center">Page non trouvée</h2>
      <p className="text-base sm:text-lg text-gray-600 mb-8 text-center">
        Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
      </p>

      {/* Bouton pour retourner à l'accueil */}
      <Link
        href="/"
        className="px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 text-sm sm:text-base"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}