import { APPLICATION_CLASS, PLUGINS_TOKEN } from "../../Constants";
import { getMetadata } from "../../Helpers/Metadata";

export abstract class AbstractApp {
    constructor() {
        this.registerPlugins();
    }

    /**
     * @name registerPlugins
     * @description Registers the plugins of the app
     * @since 0.1.0
     * @protected
     * @returns {void}
     */
    protected registerPlugins(): void {
        const plugins = getMetadata(globalThis[APPLICATION_CLASS], PLUGINS_TOKEN) || [];
        plugins.forEach((plugin) => plugin.register());
    }
}
