/**
 * Copyright (c) Freelens Authors. All rights reserved.
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import "./welcome.scss";

import { Icon } from "@freelensapp/icon";
import { withInjectables } from "@ogre-tools/injectable-react";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { forumsUrl } from "../../../common/vars";
import productNameInjectable from "../../../common/vars/product-name.injectable";
import newVersionNotificationInjectable from "./new-version-notification.injectable";
import welcomeMenuItemsInjectable from "./welcome-menu-items/welcome-menu-items.injectable";
import { useTranslation } from "../../../renderer/i18n/renderer";

import type { IComputedValue } from "mobx";

import type { WelcomeMenuRegistration } from "./welcome-menu-items/welcome-menu-registration";

export const defaultWidth = 320;

interface Dependencies {
  welcomeMenuItems: IComputedValue<WelcomeMenuRegistration[]>;
  productName: string;
  newVersionNotification: () => Promise<void> | void;
}

const NonInjectedWelcome = observer(({ welcomeMenuItems, productName, newVersionNotification }: Dependencies) => {
  const { t } = useTranslation("welcome");
  useEffect(() => {
    newVersionNotification();
  }, []);

  return (
    <div className="flex justify-center Welcome align-center" data-testid="welcome-page">
      <div style={{ width: `${defaultWidth}px` }} data-testid="welcome-banner-container">
        <Icon svg="logo-lens" className="logo" welcomeLogo={true} data-testid="no-welcome-banners-icon" />

        <div className="flex justify-center">
          <div style={{ width: `${defaultWidth}px` }} data-testid="welcome-text-container">
            <h2>{t("welcome.title", { productName })}</h2>

            <p>
              {t("welcome.description")}
              <br />
              <br />
              {t("welcome.joinUs")}
              <a href={forumsUrl} target="_blank" rel="noreferrer" className="link">
                {t("welcome.githubRepository")}
              </a>
              .
            </p>

            <ul className="block" style={{ width: `${defaultWidth}px` }} data-testid="welcome-menu-container">
              {welcomeMenuItems.get().map((item, index) => (
                <li key={index} className="flex grid-12" onClick={() => item.click()}>
                  <Icon material={item.icon} className="box col-1" />
                  <a className="box col-10">{typeof item.title === "string" ? item.title : item.title()}</a>
                  <Icon material="navigate_next" className="box col-1" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

export const Welcome = withInjectables<Dependencies>(NonInjectedWelcome, {
  getProps: (di) => ({
    welcomeMenuItems: di.inject(welcomeMenuItemsInjectable),
    productName: di.inject(productNameInjectable),
    newVersionNotification: di.inject(newVersionNotificationInjectable),
  }),
});
