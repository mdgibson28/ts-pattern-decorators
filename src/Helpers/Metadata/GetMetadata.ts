import 'reflect-metadata';
import { MODULES_TOKEN, INJECTABLE_NAME, PROVIDERS } from '../../Constants';
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

export function getModules(target:ModuleType|AppType):any {
    return getMetadata(target, MODULES_TOKEN);
}

export function getProviders(target:ModuleType):any {
    return getMetadata(target, PROVIDERS);
}

