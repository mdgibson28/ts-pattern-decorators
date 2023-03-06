import { INJECTION_TYPE_PRESENTER } from "../../Constants";
import { setInjectableMetadata } from "../../Helpers/Metadata";
import { mapDependencies } from "../../Helpers/Metadata/MapMetadata";
/**
 * A decorator to create a Presenter. A Presenter i an interface between the user and the application. (User Interface)
 * It allows a developer to plug in a rendering agent (such as React, Solid, Svelte, etc.) to implement the UI.
 * The purpose of this concept is to decouple the application from the UI rendering agent.
 * @param dependencies
 */
export function Presenter(dependencies) {
    if (dependencies === void 0) { dependencies = {}; }
    return function (prototype) {
        setInjectableMetadata(prototype, INJECTION_TYPE_PRESENTER);
        mapDependencies(prototype, dependencies);
        return prototype;
    };
}
