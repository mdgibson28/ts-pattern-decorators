import "reflect-metadata";
import { MODULES_TOKEN, INJECTABLE_NAME, INJECTABLE_TOKEN, PROTOTYPE_TOKEN } from "../../Constants";
import { getMetadata } from "./GetMetadata";
export function setMetadata(target, token, value) {
    Reflect.defineMetadata(token, value, target);
}
export function setInjectableToken(target, value) {
    setMetadata(target, INJECTABLE_TOKEN, value);
}
export function setInjectableName(target, value) {
    setMetadata(target, INJECTABLE_NAME, value);
}
export function setInjectableMetadata(target, injectionType) {
    setInjectableToken(target, injectionType);
    setInjectableName(target, target.name);
}
export function setModule(target, token, value) {
    var key = getMetadata(token, INJECTABLE_NAME);
    var modules = getMetadata(target, MODULES_TOKEN) || {};
    modules[key] = value;
    setMetadata(target, MODULES_TOKEN, modules);
}
export function setProvider(target, token, value) {
    var key = getMetadata(token, INJECTABLE_NAME);
    var providers = getMetadata(target, PROTOTYPE_TOKEN) || {};
    providers[key] = value;
    setMetadata(target, PROTOTYPE_TOKEN, providers);
}
