import tailwindcss from '@tailwindcss/vite'; // 1. Importe o plugin oficial
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

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
  }
})



// import tailwindcss from '@tailwindcss/vite'
// import react from '@vitejs/plugin-react-swc'
// import { defineConfig } from 'vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react({
//       // Caso você estivesse usando esbuild: {} aqui, 
//       // o Vite 8 agora recomenda o uso do motor OXC
//       // Se não tiver configurações customizadas, pode deixar vazio: react()
//     }),
//     tailwindcss(),
//   ],
//   build: {
//     // Garante que o build final seja otimizado
//     minify: 'oxc', // Opcional: força o uso do novo minificador se disponível
//   }
// })








