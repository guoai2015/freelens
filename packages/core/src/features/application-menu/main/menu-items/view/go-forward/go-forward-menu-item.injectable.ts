/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getInjectable } from "@ogre-tools/injectable";
import { webContents } from "electron";
import applicationMenuItemInjectionToken from "../../application-menu-item-injection-token";
import { useTranslation } from "@renderer/i18n/renderer";

const goForwardMenuItemInjectable = getInjectable({
  id: "go-forward-menu-item",

  instantiate: () => {
    const { t } = useTranslation("menu");

    return {
      kind: "clickable-menu-item" as const,
      parentId: "view",
      id: "go-forward",
      orderNumber: 50,
      label: t("menu.view.forward"),
      keyboardShortcut: "CmdOrCtrl+]",

      onClick: () => {
        webContents
          .getAllWebContents()
          .filter((wc) => wc.getType() === "window")
          .forEach((wc) => wc.navigationHistory.goForward());
      },
    };
  },

  injectionToken: applicationMenuItemInjectionToken,
});

export default goForwardMenuItemInjectable;
