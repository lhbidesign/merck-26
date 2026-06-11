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
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,mp4,jpg,jpeg,webp,woff2}'],
        maximumFileSizeToCacheInBytes: 105000000
      }
    })
  ]
})