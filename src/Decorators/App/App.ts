import { INJECTION_TYPE_APP } from "../../Constants";
import { setInjectableMetadata } from "../../Helpers/Metadata";
import { mapDependencies } from "../../Helpers/Metadata/MapMetadata";
import { AppMetadata } from "../../Interfaces/App/AppMetadata.interface";

export function App(metadata: AppMetadata): ClassDecorator {
    return (prototype) => {
        setInjectableMetadata(prototype, INJECTION_TYPE_APP);
        mapDependencies(prototype, metadata);

        return prototype;
    };
}
