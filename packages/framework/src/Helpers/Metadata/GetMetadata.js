import 'reflect-metadata';
import { MODULES_TOKEN, INJECTABLE_NAME, PROVIDERS_TOKEN } from '../../Constants';
export function getMetadata(target, key) {
    return Reflect.getMetadata(key, target);
}
export function getInjectableToken(target) {
    return getMetadata(target, INJECTABLE_NAME);
}
export function getInjectableName(target) {
    return getMetadata(target, INJECTABLE_NAME);
}
export function getModule(target, token) {
    var modules = getModules(target);
    return modules[getInjectableName(token)];
}
export function getModules(target) {
    return getMetadata(target, MODULES_TOKEN);
}
export function getProvider(target, token) {
    var providers = getProviders(target);
    return providers[getInjectableName(token)];
}
export function getProviders(target) {
    return getMetadata(target, PROVIDERS_TOKEN);
}
export function getRoute(target, token) {
    var routes = getRoutes(target);
    return routes[getInjectableName(token)];
}
export function getRoutes(target) {
    return getMetadata(target, PROVIDERS_TOKEN);
}
