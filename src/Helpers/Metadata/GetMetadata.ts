import 'reflect-metadata';
import { INJECTABLE_NAME } from '../../Constants';

export function getMetadata<T>(key: string, target: any): T {
    return Reflect.getMetadata(key, target);
}

export function getInjectableName(target: any): string {
    return getMetadata<string>(INJECTABLE_NAME, target);
}
