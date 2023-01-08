import dotenv from 'dotenv';
import visualizer from 'rollup-plugin-visualizer';
import {
  defineConfig,
  type PluginOption,
} from 'vite';
import svgr from 'vite-plugin-svgr';
import viteTsConfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';

dotenv.config();

export default defineConfig({
  define: {
    'process.env': JSON.stringify(process.env),
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },

  server: {
    port: 4200,
    host: 'localhost',
  },

  plugins: [
    react(),
    viteTsConfigPaths({
      root: './',
    }),
    svgr(),
    visualizer({
      filename: 'dist/aki-admin/stats.html'
    }) as PluginOption,
  ],

  test: {
    globals: true,
    cache: {
      dir: './node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
