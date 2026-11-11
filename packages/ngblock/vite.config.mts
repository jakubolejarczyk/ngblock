/// <reference types='vitest' />
import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/packages/ngblock',
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    angular({
      tsconfig: () =>
        process.env['VITEST'] || process.env['NODE_ENV'] === 'test'
          ? './tsconfig.spec.json'
          : './.storybook/tsconfig.json',
    }),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [],
  // },
  test: {
    name: 'ngblock',
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: ['src/test-setup.ts'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/packages/ngblock',
      provider: 'v8' as const,
    },
  },
}));
