import { INJECTABLE_NAME, INJECTABLE_TOKEN, INJECTION_TYPE_MODULE } from "../../Constants";
import { ModuleMetadata } from "../../Interfaces/Module/ModuleMetadata.interface";

export function Module(metadata: ModuleMetadata = {}): ClassDecorator {
    return (prototype: Function):any => {

        Reflect.defineMetadata(
            INJECTABLE_TOKEN,
            INJECTION_TYPE_MODULE,
            prototype
        );

        Reflect.defineMetadata(
            INJECTABLE_NAME,
            prototype.name,
            prototype
        );

        for (const property in metadata) {
            if (
                Object.prototype.hasOwnProperty.call(metadata, property)
            ) {
                Reflect.defineMetadata(
                    property,
                    metadata[property],
                    prototype
                );
            }
        }

        return prototype;
    };
}
