import { RouterPlugin } from "../../Interfaces/Plugins/Router/RouterPlugin.abstract";
import { RouterPluginConfig } from "../../Interfaces/Plugins/Router/RouterPluginConfig.interface";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { getMetadata } from "../../Helpers/Metadata";
import { ROUTE_CONFIG_TOKEN } from "../../Constants";

/**
 * @interface RemixRouterReactDomConfig
 * @description React Router DOM Plugin Config
 * @extends RouterPluginConfig
 */
export interface RemixRouterReactDomConfig extends RouterPluginConfig {
    attachTo: HTMLElement;
}

/**
 * @class RemixRouterReactDom
 * @description React Router DOM Plugin
 * @extends RouterPlugin
 * @param {RemixRouterReactDomConfig} config
 */
export class RemixRouterReactDom extends RouterPlugin {
    constructor(protected config: RemixRouterReactDomConfig) {
        super(config);
    }

    public register(): void {
        const { routes } = this.config;

        const router = createBrowserRouter(
            (routes || []).map((route) => {
                return getMetadata(route, ROUTE_CONFIG_TOKEN);
            })
        );

        ReactDOM.createRoot(this.config.attachTo).render(
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        );
    }
}
