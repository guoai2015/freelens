/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getInjectable } from "@ogre-tools/injectable";
import navigateToCatalogInjectable from "../../../../../../common/front-end-routing/routes/catalog/navigate-to-catalog.injectable";
import applicationMenuItemInjectionToken from "../../application-menu-item-injection-token";
import { useTranslation } from "@renderer/i18n/renderer";

const navigateToCatalogMenuItemInjectable = getInjectable({
  id: "navigate-to-catalog-menu-item",

  instantiate: (di) => {
    const { t } = useTranslation("menu");
    const navigateToCatalog = di.inject(navigateToCatalogInjectable);

    return {
      kind: "clickable-menu-item" as const,
      parentId: "view",
      id: "navigate-to-catalog",
      orderNumber: 10,
      label: t("menu.view.navigate-to-catalog"),
      keyboardShortcut: "Shift+CmdOrCtrl+C",

      onClick: () => {
        navigateToCatalog();
      },
    };
  },

  injectionToken: applicationMenuItemInjectionToken,
});

export default navigateToCatalogMenuItemInjectable;
