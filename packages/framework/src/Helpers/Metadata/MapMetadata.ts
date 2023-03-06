import { setMetadata } from './SetMetadata';
import { getInjectableName } from './GetMetadata';
;

export function mapDependencies(prototype:any, metadata:{}):void {
    for (const property in metadata) {
        if (!Array.isArray(metadata[property])) {
            setMetadata(prototype, property, metadata[property]);
        } else if(Array.isArray(metadata[property])) {
            const map = {};
            for(const item of metadata[property]) map[getInjectableName(item)] = {prototype: item, instance: undefined};
            setMetadata(prototype, property, map);
        }
    }
}