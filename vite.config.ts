import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path,
      },
      '/start_task': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      },
      '^/generate_questions/.*': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },
      '^/get_generate_questions/.*': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      }
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}); 