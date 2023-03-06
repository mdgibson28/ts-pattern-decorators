import "reflect-metadata";
import { ModuleType } from "../../Interfaces/Module/Module.type";
import { MODULES_TOKEN, INJECTABLE_NAME, INJECTABLE_TOKEN, PROTOTYPE_TOKEN } from "../../Constants";
import { AppType } from "../../Interfaces/App/App.type";
import { getMetadata } from "./GetMetadata";
import { ProviderType } from "../../Interfaces/Provider/Provider.type";

export function setMetadata(target: any, token: any, value: any):void {
    Reflect.defineMetadata(token, value, target);
}

export function setInjectableToken(target: any, value: string):void {
    setMetadata(target, INJECTABLE_TOKEN, value);
}
export function setInjectableName(target: any, value: string):void {
    setMetadata(target, INJECTABLE_NAME, value);
}

export function setInjectableMetadata(target:{name:string}, injectionType:string):void {
    setInjectableToken(target, injectionType);
    setInjectableName(target, target.name);
}

export function setModule(target: AppType | ModuleType, token: ModuleType, value: any):void {
    const key:string = getMetadata(token, INJECTABLE_NAME)
    const modules = getMetadata(target, MODULES_TOKEN) || {};
    modules[key] = value;
    setMetadata(target, MODULES_TOKEN, modules);
}

export function setProvider(target: ModuleType, token: ProviderType, value: any):void {
    const key:string = getMetadata(token, INJECTABLE_NAME)
    const providers = getMetadata(target, PROTOTYPE_TOKEN) || {};
    providers[key] = value;
    setMetadata(target, PROTOTYPE_TOKEN, providers);
}