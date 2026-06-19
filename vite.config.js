// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
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
        globPatterns: ['**/*.{js,css,html,mp4,webm,ogg,ico,png,svg,jpg,jpeg,webp,woff2}'],
        maximumFileSizeToCacheInBytes: 110000000,
        skipWaiting: true,
        clientsClaim: true
        // runtimeCaching: [
        //   {
        //     urlPattern: /\.(?:mp4|webm|ogg)$/i,
        //     handler: 'CacheFirst',
        //     options: {
        //       cacheName: 'media-cache',
        //       expiration: {
        //         maxEntries: 10,
        //         maxAgeSeconds: 60 * 60 * 24 * 90, // 90 days
        //       },
        //       cacheableResponse: {
        //         statuses: [200]
        //       },
        //       rangeRequests: true
        //     }
        //   }
        // ]
      }
    })
  ]
})