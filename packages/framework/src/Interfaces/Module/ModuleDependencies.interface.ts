import { ProviderType } from "../Provider/Provider.type";
import { ModuleType } from "./Module.type";

export interface ModuleDependencies {
    modules?: ModuleType[];
    providers?: ProviderType[];
}