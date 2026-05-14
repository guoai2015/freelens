/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getInjectable } from "@ogre-tools/injectable";
import applicationMenuItemInjectionToken from "../application-menu-item-injection-token";
import { useTranslation } from "@renderer/i18n/renderer";

const helpMenuItemInjectable = getInjectable({
  id: "help-application-menu-item",

  instantiate: () => {
    const { t } = useTranslation("menu");

    return {
      kind: "top-level-menu" as const,
      id: "help",
      parentId: "root" as const,
      orderNumber: 50,
      label: t("menu.help.label"),
      role: "help" as const,
    };
  },

  injectionToken: applicationMenuItemInjectionToken,
});

export default helpMenuItemInjectable;
