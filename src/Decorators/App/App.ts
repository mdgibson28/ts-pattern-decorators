import { INJECTION_TYPE_APP, PLUGINS_TOKEN } from "../../Constants";
import { setInjectableMetadata, setMetadata } from "../../Helpers/Metadata";
import { mapDependencies } from "../../Helpers/Metadata/MapMetadata";
import { AppMetadata } from "../../Interfaces/App/AppMetadata.interface";

export function App(metadata: AppMetadata): ClassDecorator {
    return (prototype) => {
        setInjectableMetadata(prototype, INJECTION_TYPE_APP);
        mapDependencies(prototype, { modules: metadata.modules});
        setMetadata(prototype, PLUGINS_TOKEN, metadata.plugins);

        return prototype;
    };
}
