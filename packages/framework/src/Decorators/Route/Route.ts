import { INJECTION_TYPE_ROUTE } from "../../Constants";
import { setInjectableMetadata } from "../../Helpers/Metadata";
import { mapDependencies } from "../../Helpers/Metadata/MapMetadata";
import { RouteDependencies } from "../../Interfaces/Route/RouteDependencies.interface";

/**
 * @function
 * @description
 * A decorator that marks a class as a Route.
 * @param {RouteDependencies} dependencies - The dependencies of the route.
 * @returns {ClassDecorator} A class decorator that will set the INJECTION_TYPE_ROUTE
 * metadata for the prototype of the class that is passed to the decorator.
 */

export function Route(dependencies:RouteDependencies): ClassDecorator {
    return (prototype) => {
        setInjectableMetadata(prototype, INJECTION_TYPE_ROUTE);
        mapDependencies(prototype, dependencies);

        return prototype;
    };
}