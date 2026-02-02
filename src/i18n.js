// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import pt from './locales/pt.json';

i18n
  .use(LanguageDetector) // Detecta o idioma do navegador (pt-BR ou en-US)
  .use(initReactI18next) // Passa o i18n para o React
    .init({
    resources: {
        en: { translation: en },
        pt: { translation: pt }
    },
    fallbackLng: 'en', // Se não detectar, usa inglês
    interpolation: {
      escapeValue: false // React já protege contra XSS
    }
    });

export default i18n;