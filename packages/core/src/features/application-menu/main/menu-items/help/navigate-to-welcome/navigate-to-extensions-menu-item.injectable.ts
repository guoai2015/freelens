/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getInjectable } from "@ogre-tools/injectable";
import navigateToWelcomeInjectable from "../../../../../../common/front-end-routing/routes/welcome/navigate-to-welcome.injectable";
import applicationMenuItemInjectionToken from "../../application-menu-item-injection-token";
import { useTranslation } from "@renderer/i18n/renderer";

const navigateToWelcomeMenuItem = getInjectable({
  id: "navigate-to-welcome-menu-item",

  instantiate: (di) => {
    const { t } = useTranslation("menu");
    const navigateToWelcome = di.inject(navigateToWelcomeInjectable);

    return {
      kind: "clickable-menu-item" as const,
      parentId: "help",
      id: "navigate-to-welcome",
      orderNumber: 10,
      label: t("menu.help.welcome"),

      onClick: () => {
        navigateToWelcome();
      },
    };
  },

  injectionToken: applicationMenuItemInjectionToken,
});

export default navigateToWelcomeMenuItem;
