import { INJECTION_TYPE_MODULE } from "../../Constants";
import { setInjectableName, setInjectableToken, setMetadata } from "../../Helpers/Metadata";
import { ModuleMetadata } from "../../Interfaces/Module/ModuleMetadata.interface";

export function Module(metadata: ModuleMetadata = {}): ClassDecorator {
    return (prototype: Function):any => {

        setInjectableToken(prototype, INJECTION_TYPE_MODULE);
        setInjectableName(prototype, prototype.name);

        for (const property in metadata) {
            setMetadata(prototype, property, metadata[property]);
        }

        return prototype;
    };
}
