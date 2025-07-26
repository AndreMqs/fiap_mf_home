import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';
import vike from 'vike/plugin'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    vike(),
    federation({
      name: 'fiap_mf_home',
      filename: 'remoteEntry.js',
      exposes: {
        './Home': './src/App.tsx'
      },
    }),
  ],
  build: {
    target: 'esnext'
  },
  ssr: {

  }
})
