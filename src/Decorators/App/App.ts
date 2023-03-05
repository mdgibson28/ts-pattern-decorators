import { INJECTION_TYPE_APP } from "../../Constants";
import { setInjectableName, setInjectableToken } from "../../Helpers/Metadata";
import { mapDependencies } from "../../Helpers/Metadata/MapMetadata";
import { AppType } from "../../Interfaces/App/App.type";
import { AppMetadata } from "../../Interfaces/App/AppMetadata.interface";

export function App(metadata: AppMetadata): ClassDecorator {
    return (prototype) => {
        setInjectableToken(prototype, INJECTION_TYPE_APP);
        setInjectableName(prototype, prototype.name);
        mapDependencies(prototype, metadata);

        return prototype;
    };
}
