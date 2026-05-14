/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getInjectable } from "@ogre-tools/injectable";
import i18n from "./i18n-base";

const i18nInjectable = getInjectable({
  id: "i18n",
  instantiate: () => i18n,
});

export default i18nInjectable;
