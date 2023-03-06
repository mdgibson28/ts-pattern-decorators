import { RouterPluginConfig } from "./RouterPluginConfig.interface";

/**
 * @name RouterPlugin
 * @description Interface for a router plugin. Handles adapting @Route classes to the router implementation
 * @since 0.1.0
 * @interface
 */
export abstract class RouterPlugin {
    constructor (protected config: RouterPluginConfig) {}
    public abstract register(): void;
}