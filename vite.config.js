import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
    host: '0.0.0.0',  
    allowedHosts: [
      'gpitchford.com',
      'www.gpitchford.com',
      'localhost'
    ]
  }
})