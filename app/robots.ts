import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Autorise tous les robots
      allow: '/', // Autorise l'accès à toutes les pages
    },
    sitemap: 'https://samira-couture.vercel.app/sitemap.xml', // Lien vers le sitemap
  };
}