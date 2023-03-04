import { getModules } from "../Metadata";

/**
 * Recursively searches the module tree from its root entry point and returns the matching module or undefined.
 * @param root 
 * @param token 
 * @returns 
 */
export function findModule(root:any, token:string):any {
    const modules = getModules(root);
    if(!modules) return undefined;  
    if(modules[token]) return modules[token];

    for(const moduleToken in modules) {
        const subModule = findModule(modules[moduleToken].prototype, token);
        if(subModule) return subModule;
    }

    return undefined;
}