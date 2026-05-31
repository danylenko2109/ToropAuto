import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative asset URLs keep the exported static root index.html working on
// simple hosts and sub-path deployments, while the app source still runs in Vite.
export default defineConfig({
  base: './',
  plugins: [react()],
})
