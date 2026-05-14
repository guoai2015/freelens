/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { useTranslation, withTranslation, Trans } from 'react-i18next';
import i18nInstance from '@common/i18n/i18n-base';

// Re-export the i18n instance
export { i18nInstance as i18n };

// Export translation types
export type { TranslationNamespace } from '@common/i18n/i18n-base';

export { useTranslation, withTranslation, Trans };
