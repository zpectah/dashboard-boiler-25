import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import resources from './resources';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ['en', 'cs'],
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });
