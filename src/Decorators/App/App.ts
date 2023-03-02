import { INJECTABLE_NAME } from "../../Constants";
import { getMetadata } from "../../Helpers/Metadata/GetMetadata";
import { AppMetadata } from "../../Interfaces/App/AppMetadata.interface";

export function App(metadata: AppMetadata): ClassDecorator {
    return (prototype: Function):any => {
        for (const property in metadata) {
            if (Object.prototype.hasOwnProperty.call(metadata, property) && !Array.isArray(metadata[property])) {
                Reflect.defineMetadata(property,metadata[property],prototype);
            } else if(Object.prototype.hasOwnProperty.call(metadata, property) && Array.isArray(metadata[property])) {
                const map = {};
                Reflect.defineMetadata(property, map, prototype);

                for(const item of metadata[property]) {
                    const key:string = getMetadata(INJECTABLE_NAME, item);
                    map[key] = item;
                }
            }
        }

        return prototype;
    };
}
