import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio-react/",
  plugins: [
    react(),
    compression(),
    cssInjectedByJsPlugin()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Se o arquivo vier de node_modules, crie um arquivo separado chamado 'vendor'
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
})
