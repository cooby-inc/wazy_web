import packageJson from '../package.json';

export default {
  APP_VERSION: packageJson.version,
  NEXT_PUBLIC_AMPLITUDE_API_KEY: process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY,
};
