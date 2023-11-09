import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      // Removes the attributes used for testing from the production's build.
      ...(mode === 'production'
        ? {
            babel: {
              plugins: [
                ['react-remove-properties', { properties: ['data-testid'] }],
              ],
            },
          }
        : {}),
    }),
    svgr(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['html', 'json', 'text'],
      exclude: ['src/setupTests.ts', 'src/utils/test-utils.ts'],
    },
    environment: 'jsdom',
    globals: true,
    setupFiles: ['src/setupTests.ts'],
    onConsoleLog(log, type) {
      if (
        type === 'stderr' &&
        log.includes(
          'Consider adding an error boundary to your tree to customize error handling behavior.',
        )
      ) {
        return false;
      }
    },
  },
  build: {
    lib: {
      entry: {
        'example-react': resolve(__dirname, 'src/lib/index.ts'),
        'example-tailwind-preset': resolve(__dirname, 'src/preset/index.ts'),
      },
      formats: ['es', 'cjs'],
      fileName: '[name]',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      plugins: [],
    },
  },
}));
