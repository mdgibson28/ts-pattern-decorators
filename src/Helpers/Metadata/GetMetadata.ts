import 'reflect-metadata';
import { APPLICATION_MODULES, INJECTABLE_NAME, PROVIDERS } from '../../Constants';
import { App } from '../../Interfaces/App/App.interface';
import { Module } from '../../Interfaces/Module/Module.interface';
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

export function getModule(target:Module|App, token:Type):any {
    const modules = getModules(target);
    return modules[getInjectableName(token)];
}

export function getModules(target:Module|App):any {
    return getMetadata(target, APPLICATION_MODULES);
}

export function getProviders(target:Module):any {
    return getMetadata(target, PROVIDERS);
}

