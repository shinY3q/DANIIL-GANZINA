import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const sectionRoutes = ['about', 'work', 'services', 'process', 'contact'];

const prettySectionUrls = () => ({
  name: 'pretty-section-urls',
  apply: 'build',
  closeBundle() {
    const outputDirectory = resolve(process.cwd(), 'dist');
    const appShell = readFileSync(resolve(outputDirectory, 'index.html'), 'utf8');

    sectionRoutes.forEach(route => {
      const routeDirectory = resolve(outputDirectory, route);
      mkdirSync(routeDirectory, { recursive: true });
      writeFileSync(resolve(routeDirectory, 'index.html'), appShell);
    });
  }
});

// GitHub Pages serves a project site from /<repo>/, so the deploy workflow
// passes that sub-path in as VITE_BASE. Locally — and on a custom domain —
// the site stays at the root.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react(), prettySectionUrls()]
});
