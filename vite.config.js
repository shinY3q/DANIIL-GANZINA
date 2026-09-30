import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves a project site from /<repo>/, so the deploy workflow
// passes that sub-path in as VITE_BASE. Locally — and on a custom domain —
// the site stays at the root.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()]
});
