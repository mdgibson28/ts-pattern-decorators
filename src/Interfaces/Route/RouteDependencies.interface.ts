import { PresenterType } from "../Presenter/Presenter.type";
import { RouteType } from "./Route.type";
import { RouteConfig } from "./RouteConfig.interface";

/**
 * The dependencies that a route needs to be mounted
 * @interface
 */
export interface RouteDependencies {
    /**
     * The route configuration
     */
    config?:RouteConfig;

    /**
     * The presenter that will manage the view and logic of the current route
     */
    presenter: PresenterType;

    /**
     * Optional child routes under the current route
     */
    routes?: RouteType[];
}