import { INJECTION_TYPE_MODULE } from "../../Constants";
import { setInjectableName, setInjectableToken } from "../../Helpers/Metadata";
import { mapDependencies } from "../../Helpers/Metadata/MapMetadata";
import { Module } from "../../Interfaces/Module/Module.interface";
import { ModuleDependencies } from "../../Interfaces/Module/ModuleDependencies.interface";

/*
Module prototype metadata:
    providers: {
        [key: string]: {
            prototype: ProviderPrototype;
            instance: Provider;
        };
    }
    modules: {
        [key: string]: {
            prototype: ModulePrototype;
            instance: Module;
        };
    }
 */

export function Module(dependencies: ModuleDependencies = {}): ClassDecorator {
    return (prototype) => {

        setInjectableToken(prototype, INJECTION_TYPE_MODULE);
        setInjectableName(prototype, prototype.name);
        mapDependencies(prototype, dependencies);

        return prototype;
    };
}
