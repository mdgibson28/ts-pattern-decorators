import { setModule } from "../../Helpers/Metadata";
import { getInjectableName, getModules } from "../../Helpers/Metadata/GetMetadata";
import { Module } from "../../Interfaces/Module/Module.interface";
import { useApp } from "../UseApp";

/**
 * Returns an instance of a Module from an App.
 * If module is not yet instantiated, it will be instantiated and stored in the App.
 * This ensures only a single instance is ever created for the module
 * during the lifetime of the application.
 * @param source 
 * @param token 
 * @returns 
 */
export function useModule(token:Module) {
    const {prototype} = useApp();
    let value = findModule(prototype, getInjectableName(token));
    if(!value) throw new Error('Module not found');

    if (value instanceof token) {
        return value;
    } else {
        value = new token();
        setModule(prototype, token, value);
        return value;
    }
}

/**
 * Recursively searches the module tree from its root entry point and returns the matching module or undefined.
 * @param root 
 * @param token 
 * @returns 
 */
function findModule(root:any, token:string):any {
    const modules = getModules(root);
    if(!modules) return undefined;  
    if(modules[token]) return modules[token];

    for(const moduleToken in modules) {
        const subModule = findModule(modules[moduleToken], token);
        if(subModule) return subModule;
    }

    return undefined;
}