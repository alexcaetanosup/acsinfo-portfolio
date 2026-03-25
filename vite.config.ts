import react from '@vitejs/plugin-react-swc'
import path from 'path'; // Importe o path
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Define que "@" aponta para a pasta "src"
      '@': path.resolve(__dirname, './src'),
    },
  },
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








