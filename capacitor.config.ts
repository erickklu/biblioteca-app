import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'jm.dev.biblioteca',
  appName: 'BibliotecaApp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
