import { INJECTION_TYPE_APP } from "../../Constants";
import { setInjectableName, setInjectableToken } from "../../Helpers/Metadata";
import { mapTypeMetadata } from "../../Helpers/Metadata/MapMetadata";
import { AppMetadata } from "../../Interfaces/App/AppMetadata.interface";

export function App(metadata: AppMetadata): ClassDecorator {
    return (prototype: Function):any => {
        setInjectableToken(prototype, INJECTION_TYPE_APP);
        setInjectableName(prototype, prototype.name);
        mapTypeMetadata(prototype, metadata);

        return prototype;
    };
}
