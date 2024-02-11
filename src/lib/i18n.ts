import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Initialize i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: require('../data/locales/en.json'),
    },
    it: {
      translation: require('../data/locales/it.json'),
    },
  },
  // lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false, // Allow interpolation in translations
  },
});

export default i18n;
