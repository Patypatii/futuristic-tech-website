import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/by-3d-pixels-futurustic-web/',
  plugins: [react(), tailwindcss(),],

})
