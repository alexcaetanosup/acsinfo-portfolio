import tailwindcss from '@tailwindcss/vite'; // 1. Importe o plugin oficial
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    tailwindcss(), // 2. Adicione o Tailwind ANTES do React
    react(),       // O plugin react-swc no Vite 8 já lida melhor com oxc internamente
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // 3. Opcional: Garante que o CSS seja processado corretamente no build
  build: {
    cssMinify: 'lightningcss',
  },
  server: {
    proxy: {
      "/api": "http://localhost:4000",  // redireciona para o Express
    },
  },
})











