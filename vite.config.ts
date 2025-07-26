import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';
import vike from 'vike/plugin'

// https://vite.dev/config/
const elastic_ip = '18.188.40.201';

const isDevEnv = false; // Mude para true quando em dev
export default defineConfig({
  base: `http://${isDevEnv ? 'localhost:3001' : elastic_ip}`,
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
