import { ModuleType } from "../Module/Module.type";

export interface AppMetadata {
    selector: string;       // the selector of the html element where the app will be mounted
    modules?: ModuleType[];
}