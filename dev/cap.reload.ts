import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nasha.store',
  appName: 'Nasha Store',
  webDir: '.output/public',
  // server: {
  //   androidScheme: 'https',
  //   cleartext: true,
  //   allowNavigation: ['*']
  // },
  // android: {
  //   allowMixedContent: true
  // },
   server: {
    url: "http://192.168.99.39:3000",
    // url:"https://nashastore.netlify.app",
    cleartext: false
  },

  // },
 
};

export default config;
