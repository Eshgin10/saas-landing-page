import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/saas-landing-page/',
  appType: 'spa',
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
})
