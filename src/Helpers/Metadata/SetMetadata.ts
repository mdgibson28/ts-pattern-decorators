import "reflect-metadata";
import { Type } from "../../Interfaces/Type.interface";
import { Module } from "../../Interfaces/Module/Module.interface";
import { APPLICATION_MODULES, INJECTABLE_NAME, INJECTABLE_TOKEN } from "../../Constants";
import { App } from "../../Interfaces/App/App.interface";
import { getMetadata } from "./GetMetadata";

export function setMetadata(target: any, token: any, value: any):void {
    Reflect.defineMetadata(token, value, target);
}

export function setInjectableToken(target: any, value: string):void {
    setMetadata(target, INJECTABLE_TOKEN, value);
}
export function setInjectableName(target: any, value: string):void {
    setMetadata(target, INJECTABLE_NAME, value);
}

export function setModule(target: App | Module, token: Module, value: any):void {
    const key:string = getMetadata(token, INJECTABLE_NAME)
    const modules = getMetadata(target, APPLICATION_MODULES) || {};
    modules[key] = value;
    setMetadata(target, APPLICATION_MODULES, modules);
}
