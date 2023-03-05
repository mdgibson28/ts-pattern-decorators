import { ModuleType } from "../Module/Module.type";
import { Plugin } from "../Plugins/Plugin.interface";
import { ProviderType } from "../Provider/Provider.type";
import { RouteType } from "../Route/Route.type";

export interface AppMetadata {
    plugins?: Plugin[];
    modules?: ModuleType[];
    providers?: ProviderType[];
    routes?: RouteType[];
}