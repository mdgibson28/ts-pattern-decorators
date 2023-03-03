import { INJECTION_TYPE_MODULE } from "../../Constants";
import { setInjectableName, setInjectableToken } from "../../Helpers/Metadata";
import { mapTypeMetadata } from "../../Helpers/Metadata/MapMetadata";
import { ModuleMetadata } from "../../Interfaces/Module/ModuleMetadata.interface";

export function Module(metadata: ModuleMetadata = {}): ClassDecorator {
    return (prototype: Function):any => {

        setInjectableToken(prototype, INJECTION_TYPE_MODULE);
        setInjectableName(prototype, prototype.name);
        mapTypeMetadata(prototype, metadata);

        return prototype;
    };
}
