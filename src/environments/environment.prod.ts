import { credentials } from './credentials.prod';

export const environment = {
  production: false,
  googleMapsConfig: {
    apiKey: credentials.googleMapsConfig.apiKey
  },
  firebaseConfig: {
    apiKey: credentials.firebaseConfig.apiKey,
    authDomain: credentials.firebaseConfig.authDomain,
    databaseURL: credentials.firebaseConfig.databaseURL,
    storageBucket: credentials.firebaseConfig.storageBucket
  }
}