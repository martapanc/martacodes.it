import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as en from '../data/locales/en.json';
import * as it from '../data/locales/it.json';

// Initialize i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    it: {
      translation: it,
    },
  },
  // lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false, // Allow interpolation in translations
  },
});

export default i18n;
