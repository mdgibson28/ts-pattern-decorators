/**
 * @name RouterPlugin
 * @description Interface for a router plugin. Handles adapting @Route classes to the router implementation
 * @since 0.1.0
 * @interface
 */
var RouterPlugin = /** @class */ (function () {
    function RouterPlugin(config) {
        this.config = config;
    }
    return RouterPlugin;
}());
export { RouterPlugin };
