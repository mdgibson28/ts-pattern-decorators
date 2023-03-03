import { INJECTION_TYPE_APP } from "../../Constants";
import { setInjectableName, setInjectableToken, setMetadata } from "../../Helpers/Metadata";
import { getInjectableName } from "../../Helpers/Metadata/GetMetadata";
import { AppMetadata } from "../../Interfaces/App/AppMetadata.interface";

export function App(metadata: AppMetadata): ClassDecorator {
    return (prototype: Function):any => {
        setInjectableToken(prototype, INJECTION_TYPE_APP);
        setInjectableName(prototype, prototype.name);

        for (const property in metadata) {
            if (!Array.isArray(metadata[property])) {
                setMetadata(prototype, property, metadata[property]);
            } else if(Array.isArray(metadata[property])) {
                const map = {};
                for(const item of metadata[property]) map[getInjectableName(item)] = item;
                setMetadata(prototype, property, map);
            }
        }

        return prototype;
    };
}
