import { INJECTION_TYPE_MODULE } from "../../Constants";
import { setInjectableMetadata } from "../../Helpers/Metadata";
import { mapDependencies } from "../../Helpers/Metadata/MapMetadata";
export function Module(dependencies) {
    if (dependencies === void 0) { dependencies = {}; }
    return function (prototype) {
        setInjectableMetadata(prototype, INJECTION_TYPE_MODULE);
        mapDependencies(prototype, dependencies);
        return prototype;
    };
}
