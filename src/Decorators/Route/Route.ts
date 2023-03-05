import { INJECTION_TYPE_ROUTE } from "../../Constants";
import { setInjectableMetadata } from "../../Helpers/Metadata";
import { mapDependencies } from "../../Helpers/Metadata/MapMetadata";
import { RouteDependencies } from "../../Interfaces/Route/RouteDependencies.interface";

export function Route(dependencies:RouteDependencies): ClassDecorator {
    return (prototype) => {
        setInjectableMetadata(prototype, INJECTION_TYPE_ROUTE);
        mapDependencies(prototype, dependencies);

        return prototype;
    };
}