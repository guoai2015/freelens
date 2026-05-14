/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getInjectable } from "@ogre-tools/injectable";
import isMacInjectable from "../../../../../../common/vars/is-mac.injectable";
import applicationMenuItemInjectionToken from "../../application-menu-item-injection-token";
import { useTranslation } from "@renderer/i18n/renderer";

const closeWindowMenuItemInjectable = getInjectable({
  id: "close-window-application-menu-item",

  instantiate: (di) => {
    const { t } = useTranslation("menu");
    const isMac = di.inject(isMacInjectable);

    return {
      id: "close-window",
      kind: "os-action-menu-item" as const,
      parentId: "file",
      orderNumber: 60,
      actionName: "close" as const,
      label: t("menu.file.closeWindow"),
      keyboardShortcut: "Shift+Cmd+W",
      isShown: isMac,
    };
  },

  injectionToken: applicationMenuItemInjectionToken,
});

export default closeWindowMenuItemInjectable;
