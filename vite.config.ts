import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), tsconfigPaths()],
    define: {
      APP_VERSION: JSON.stringify(env.npm_package_version),
      AMPLITUDE_API_KEY: JSON.stringify(env.AMPLITUDE_API_KEY),
      ENVIRONMENT: JSON.stringify(mode),
    },
  };
});
