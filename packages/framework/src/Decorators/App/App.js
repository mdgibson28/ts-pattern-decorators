import { INJECTION_TYPE_APP, PLUGINS_TOKEN } from "../../Constants";
import { setInjectableMetadata, setMetadata } from "../../Helpers/Metadata";
import { mapDependencies } from "../../Helpers/Metadata/MapMetadata";
export function App(metadata) {
    return function (prototype) {
        setInjectableMetadata(prototype, INJECTION_TYPE_APP);
        mapDependencies(prototype, { modules: metadata.modules, providers: metadata.providers, routes: metadata.routes });
        setMetadata(prototype, PLUGINS_TOKEN, metadata.plugins);
        return prototype;
    };
}
