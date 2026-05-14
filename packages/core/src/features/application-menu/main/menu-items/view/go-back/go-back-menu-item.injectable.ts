/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getInjectable } from "@ogre-tools/injectable";
import { webContents } from "electron";
import applicationMenuItemInjectionToken from "../../application-menu-item-injection-token";
import { useTranslation } from "@renderer/i18n/renderer";

const goBackMenuItemInjectable = getInjectable({
  id: "go-back-menu-item",

  instantiate: () => {
    const { t } = useTranslation("menu");

    return {
      kind: "clickable-menu-item" as const,
      parentId: "view",
      id: "go-back",
      orderNumber: 40,
      label: t("menu.view.back"),
      keyboardShortcut: "CmdOrCtrl+[",

      onClick: () => {
        webContents
          .getAllWebContents()
          .filter((wc) => wc.getType() === "window")
          .forEach((wc) => wc.navigationHistory.goBack());
      },
    };
  },

  injectionToken: applicationMenuItemInjectionToken,
});

export default goBackMenuItemInjectable;
