import { PresenterType } from "../Presenter/Presenter.type";
import { RouteConfig } from "./RouteConfig.interface";

export interface RouteDependencies {
    config?:RouteConfig;
    presenter: PresenterType
}