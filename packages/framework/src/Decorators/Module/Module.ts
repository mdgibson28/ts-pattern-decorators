import { INJECTION_TYPE_MODULE } from "../../Constants";
import { setInjectableMetadata } from "../../Helpers/Metadata";
import { mapDependencies } from "../../Helpers/Metadata/MapMetadata";
import { ModuleDependencies } from "../../Interfaces/Module/ModuleDependencies.interface";

export function Module(dependencies: ModuleDependencies = {}): ClassDecorator {
    return (prototype) => {
        setInjectableMetadata(prototype, INJECTION_TYPE_MODULE);
        mapDependencies(prototype, dependencies);

        return prototype;
    };
}
