// import { RouterPlugin } from "../../../src/Interfaces/Plugins/Router/RouterPlugin.abstract";
// import { RouterPluginConfig } from "../../../src/Interfaces/Plugins/Router/RouterPluginConfig.interface";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";
// import { getMetadata } from "../../../src/Helpers/Metadata";
// import { ROUTE_CONFIG_TOKEN } from "../../../src/Constants";

// /**
//  * @class RemixRouterReactDom
//  * @description React Router DOM Plugin
//  * @extends RouterPlugin
//  * @param {RemixRouterReactDomConfig} config
//  */
// export class RemixRouterReactDom extends RouterPlugin {
//     constructor(protected config: any) {
//         super(config);
//     }

//     public register(): void {
//         const { routes } = this.config;

//         const router = createBrowserRouter(
//             (routes || []).map((route) => {
//                 return getMetadata(route, ROUTE_CONFIG_TOKEN);
//             })
//         );

//         ReactDOM.createRoot(this.config.attachTo).render(
//             <React.StrictMode>
//                 <RouterProvider router={router} />
//             </React.StrictMode>
//         );
//     }
// }
