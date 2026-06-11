// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // We removed the custom icons from the manifest as requested
      manifest: {
        name: 'Merck Kiosk Experience',
        short_name: 'MerckKiosk',
        description: 'Interactive experience for the Merck Kiosk',
        display: 'fullscreen',
        theme_color: '#00857C',
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,mp4}'],
        maximumFileSizeToCacheInBytes: 105000000
      }
    })
  ]
})