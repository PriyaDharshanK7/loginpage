import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  server: {
    port: process.env.PORT || 5173,
    host: '0.0.0.0'
  },
  preview: {
    port: process.env.PORT || 4173,
    host: '0.0.0.0',
    strictPort: true,
    allowedHosts: [
      'healthcheck.railway.app',
      '.railway.app',
      'localhost',
      '127.0.0.1',
      '0.0.0.0'
    ]
  }
})