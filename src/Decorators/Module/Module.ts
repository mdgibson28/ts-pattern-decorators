import { MODULE_TOKEN } from "../../Constants";
import { ModuleMetadata } from "../../Interfaces/Module/ModuleMetadata.interface";

export function Module(metadata: ModuleMetadata): ClassDecorator {
    return (target: Function) => {
        Reflect.defineMetadata(MODULE_TOKEN, target, target);
        for (const property in metadata) {
            if (Object.prototype.hasOwnProperty.call(metadata, property)) {
                Reflect.defineMetadata(property, metadata[property], target);
            }
        }
    };
}
