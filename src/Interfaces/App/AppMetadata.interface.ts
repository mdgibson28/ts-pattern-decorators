import { ModuleType } from "../Module/Module.type";
import { Plugin } from "../Plugins/Plugin.interface";

export interface AppMetadata {
    selector: string;       // the selector of the html element where the app will be mounted
    plugins?: Plugin[];     // the plugins that the app will use
    modules?: ModuleType[];
}