import { ModuleType } from "../Module/Module.type";
import { Plugin } from "../Plugins/Plugin.interface";
import { RouteType } from "../Route/Route.type";

export interface AppMetadata {
    plugins?: Plugin[];     // the plugins that the app will use
    modules?: ModuleType[];
    routes?: RouteType[];
}