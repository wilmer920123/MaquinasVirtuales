import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   base: 'https://wilmer920123.github.io/MaquinasVirtuales/',
  plugins: [react()],
})
