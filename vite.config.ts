import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          axios: ['axios'],
          dayjs: ['dayjs'],
          emotion: ['@emotion/react', '@emotion/styled'],
          mui: ['@mui/icons-material', '@mui/material', '@mui/x-date-pickers'],
          react: ['react', 'react-dom', 'react-router-dom'],
          zod: ['zod'],
          zustand: ['zustand'],
        },
      },
    },
  },
});
