import { RouterState } from "@remix-run/router";
import { PresenterType } from "../Presenter/Presenter.type";

export interface RouteDependencies extends RouterState {
    state: RouterState,
    presenter: PresenterType
}