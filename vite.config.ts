import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/MOH-Reinigung/',
  plugins: [vue()],
  build: {
    outDir: 'docs'
  }
});
