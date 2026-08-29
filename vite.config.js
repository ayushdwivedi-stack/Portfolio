import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserPage = repoName?.endsWith('.github.io')
const githubPagesBase = process.env.GITHUB_ACTIONS && repoName && !isUserPage ? `/${repoName}/` : '/'

export default defineConfig({
  base: process.env.BASE_PATH || githubPagesBase,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three')) return 'three'
            if (id.includes('framer-motion') || id.includes('gsap')) return 'motion'
            if (id.includes('react-router') || id.includes('/react/') || id.includes('react-dom')) return 'vendor'
          }
        },
      },
    },
  },
})
