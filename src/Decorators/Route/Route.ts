import { RouteDependencies } from "../../Interfaces/Route/RouteDependencies.interface";

export function Route(dependencies:RouteDependencies = {}): ClassDecorator {
    return (prototype) => {
        return prototype;
    };
}