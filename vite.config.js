import { defineConfig } from 'vite';

export default defineConfig({
  // Base '/' funciona para dominio propio y para *.vercel.app
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
