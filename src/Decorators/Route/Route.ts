import { INJECTION_TYPE_ROUTE } from "../../Constants";
import { setInjectableName, setInjectableToken } from "../../Helpers/Metadata";
import { mapDependencies } from "../../Helpers/Metadata/MapMetadata";
import { RouteDependencies } from "../../Interfaces/Route/RouteDependencies.interface";

export function Route(dependencies:RouteDependencies): ClassDecorator {
    return (prototype) => {
        setInjectableName(prototype, prototype.name);
        setInjectableToken(prototype, INJECTION_TYPE_ROUTE);
        mapDependencies(prototype, dependencies);

        return prototype;
    };
}