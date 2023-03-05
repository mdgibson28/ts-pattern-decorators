import { AgnosticRouteObject } from "@remix-run/router";
import { PresenterType } from "../Presenter/Presenter.type";

export interface RouteDependencies {
    state: AgnosticRouteObject; 
    presenter: PresenterType
}