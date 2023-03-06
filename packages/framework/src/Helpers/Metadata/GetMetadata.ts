import 'reflect-metadata';
import { MODULES_TOKEN, INJECTABLE_NAME, PROVIDERS_TOKEN } from '../../Constants';
import { AppType } from '../../Interfaces/App/App.type';
import { ModuleType } from '../../Interfaces/Module/Module.type';
import { Type } from '../../Interfaces/Type.interface';

export function getMetadata<T = any>(target: Type, key: string): T {
    return Reflect.getMetadata(key, target);
}

export function getInjectableToken(target: Type): string {
    return getMetadata<string>(target, INJECTABLE_NAME);
}

export function getInjectableName(target: Type): string {
    return getMetadata<string>(target, INJECTABLE_NAME);
}

export function getModule(target:ModuleType|AppType, token:Type):any {
    const modules = getModules(target);
    return modules[getInjectableName(token)];
}

export function getModules(target:AppType|ModuleType):any {
    return getMetadata(target, MODULES_TOKEN);
}

export function getProvider(target:AppType|ModuleType, token:Type):any {
    const providers = getProviders(target);
    return providers[getInjectableName(token)];
}

export function getProviders(target:AppType|ModuleType):any {
    return getMetadata(target, PROVIDERS_TOKEN);
}

export function getRoute(target:AppType|ModuleType, token:Type):any {
    const routes = getRoutes(target);
    return routes[getInjectableName(token)];
}

export function getRoutes(target:AppType|ModuleType):any {
    return getMetadata(target, PROVIDERS_TOKEN);
}


