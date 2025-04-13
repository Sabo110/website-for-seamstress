'use client'; // Error boundaries doivent être des composants côté client

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className="h-full flex flex-col items-center justify-center text-center text-gray-800 px-4 sm:px-6">
        {/* Titre principal */}
        <h1 className="text-5xl sm:text-6xl font-bold text-red-600 mb-4">Erreur</h1>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Oups ! Quelque chose s'est mal passé.
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8">
          Une erreur inattendue s'est produite. Veuillez réessayer ou revenir plus tard.
        </p>

        {/* Bouton pour réessayer */}
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 text-sm sm:text-base"
        >
          Réessayer
        </button>

        {/* Affichage optionnel de l'erreur */}
        <div className="mt-8 bg-gray-200 text-gray-700 p-4 rounded-lg shadow-md max-w-xl">
          <h3 className="text-lg font-semibold mb-2">Détails de l'erreur :</h3>
          <pre className="text-sm sm:text-base whitespace-pre-wrap">{error.message}</pre>
        </div>
      </body>
    </html>
  );
}