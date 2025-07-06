import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/abitare-la-differenza/', // 👈 nome esatto del repo
});
