import { setMetadata } from './SetMetadata';
import { getInjectableName } from './GetMetadata';
;
export function mapDependencies(prototype, metadata) {
    for (var property in metadata) {
        if (!Array.isArray(metadata[property])) {
            setMetadata(prototype, property, metadata[property]);
        }
        else if (Array.isArray(metadata[property])) {
            var map = {};
            for (var _i = 0, _a = metadata[property]; _i < _a.length; _i++) {
                var item = _a[_i];
                map[getInjectableName(item)] = { prototype: item, instance: undefined };
            }
            setMetadata(prototype, property, map);
        }
    }
}
