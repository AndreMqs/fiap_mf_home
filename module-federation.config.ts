import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'fiap_mf_home',
  exposes: {
    './HomePage': './src/components/HomePage/HomePage.tsx',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
  getPublicPath: 'http://localhost:3002/',
});
