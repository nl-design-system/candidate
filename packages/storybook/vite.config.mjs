import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // Make sure the modern Dart Sass API is used
        api: 'modern',
      },
    },
  },
});
