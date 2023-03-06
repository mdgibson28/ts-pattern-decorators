import { APPLICATION_CLASS, PLUGINS_TOKEN } from "../../Constants";
import { getMetadata } from "../../Helpers/Metadata";
var AbstractApp = /** @class */ (function () {
    function AbstractApp() {
        this.registerPlugins();
    }
    /**
     * @name registerPlugins
     * @description Registers the plugins of the app
     * @since 0.1.0
     * @protected
     * @returns {void}
     */
    AbstractApp.prototype.registerPlugins = function () {
        var plugins = getMetadata(globalThis[APPLICATION_CLASS], PLUGINS_TOKEN) || [];
        plugins.forEach(function (plugin) { return plugin.register(); });
    };
    return AbstractApp;
}());
export { AbstractApp };
