/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import all translations
import enCommon from './translations/en/common.json';
import enMenu from './translations/en/menu.json';
import enSettings from './translations/en/settings.json';
import enWelcome from './translations/en/welcome.json';
import enComponents from './translations/en/components.json';
import enErrors from './translations/en/errors.json';
import enKubernetes from './translations/en/kubernetes.json';
import zhCnCommon from './translations/zh-CN/common.json';
import zhCnMenu from './translations/zh-CN/menu.json';
import zhCnSettings from './translations/zh-CN/settings.json';
import zhCnWelcome from './translations/zh-CN/welcome.json';
import zhCnComponents from './translations/zh-CN/components.json';
import zhCnErrors from './translations/zh-CN/errors.json';
import zhCnKubernetes from './translations/zh-CN/kubernetes.json';

// Define translation namespaces
export const translationNamespaces = [
  'common',
  'menu',
  'settings',
  'welcome',
  'components',
  'errors',
  'kubernetes',
] as const;

export type TranslationNamespace = typeof translationNamespaces[number];

// i18n configuration
i18n
  .use(initReactI18next)
  .init({
    lng: 'zh-CN',
    fallbackLng: 'en',
    ns: translationNamespaces,
    defaultNS: 'common',
    resources: {
      en: {
        common: enCommon,
        menu: enMenu,
        settings: enSettings,
        welcome: enWelcome,
        components: enComponents,
        errors: enErrors,
        kubernetes: enKubernetes,
      },
      'zh-CN': {
        common: zhCnCommon,
        menu: zhCnMenu,
        settings: zhCnSettings,
        welcome: zhCnWelcome,
        components: zhCnComponents,
        errors: zhCnErrors,
        kubernetes: zhCnKubernetes,
      },
    },
    interpolation: {
      escapeValue: false, // React already escapes values
      format: (value, format) => {
        if (format === 'uppercase') {
          return value.toUpperCase();
        }
        return value;
      },
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
