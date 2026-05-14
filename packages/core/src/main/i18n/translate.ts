/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { i18n } from "./main";

// Simple translate function for main process (no React hooks)
export function translate(key: string, options?: Record<string, unknown>): string {
  return i18n.t(key, options);
}
