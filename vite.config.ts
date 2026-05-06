import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import {BRAND_EMAIL, OPERATING_LOCATIONS, SOCIAL_LINKS, TAGLINE} from './src/constants/site';
import {SEO_DESCRIPTION, SEO_KEYWORDS, SITE_NAME, SITE_URL, TWITTER_HANDLE} from './src/constants/seo';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  const siteUrl = SITE_URL.replace(/\/$/, '');
  const ogImage = `${siteUrl}/img/IMG_5107.JPG`;

  function transformIndexHtml(html: string) {
    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${siteUrl}/#organization`,
          name: SITE_NAME,
          url: siteUrl,
          description: SEO_DESCRIPTION,
          email: BRAND_EMAIL,
          areaServed: OPERATING_LOCATIONS.map((name) => ({'@type': 'Place', name})),
          sameAs: Object.values(SOCIAL_LINKS),
          logo: {'@type': 'ImageObject', url: `${siteUrl}/logo-clean.png`},
        },
        {
          '@type': 'WebSite',
          '@id': `${siteUrl}/#website`,
          url: siteUrl,
          name: SITE_NAME,
          description: SEO_DESCRIPTION,
          publisher: {'@id': `${siteUrl}/#organization`},
        },
      ],
    };

    const ldJson = `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;

    return html
      .replaceAll('%SITE_NAME%', SITE_NAME)
      .replaceAll('%TAGLINE%', TAGLINE)
      .replaceAll('%SEO_DESCRIPTION%', SEO_DESCRIPTION)
      .replaceAll('%SEO_KEYWORDS%', SEO_KEYWORDS)
      .replaceAll('%SITE_URL%', siteUrl)
      .replaceAll('%OG_IMAGE%', ogImage)
      .replaceAll('%TWITTER_HANDLE%', TWITTER_HANDLE)
      .replace('</head>', `    ${ldJson}\n  </head>`);
  }

  let outDir = 'dist';

  return {
    plugins: [
      react(),
      tailwindcss(),
      {name: 'html-seo', transformIndexHtml: transformIndexHtml},
      {
        name: 'seo-robots-sitemap',
        configResolved(config) {
          outDir = config.build.outDir;
        },
        closeBundle() {
          const dir = path.resolve(process.cwd(), outDir);
          fs.writeFileSync(
            path.join(dir, 'robots.txt'),
            `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
            'utf8',
          );
          fs.writeFileSync(
            path.join(dir, 'sitemap.xml'),
            `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
            'utf8',
          );
        },
      },
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
