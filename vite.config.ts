import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';
import vike from 'vike/plugin'

// https://vite.dev/config/
const elastic_ip = '18.188.40.201/';

export default defineConfig({
  // base: 'http://localhost:3001/', Use em localhost
  base: elastic_ip, // Use no build na cloud
  plugins: [
    react(),
    vike(),
    federation({
      name: 'fiap_mf_home',
      filename: 'remoteEntry.js',
      exposes: {
        './Home': './src/App.tsx'
      },
      shared: [
        'react', 
        'react-dom', 
      ],
    }),
  ],
  build: {
    target: 'esnext',
    outDir: 'dist',
    rollupOptions: {
      external: [],
      output: {
        chunkFileNames: 'assets/chunks/[name]-[hash].js',
      }
    },
  },
  ssr: {
    noExternal: true
  }
})
