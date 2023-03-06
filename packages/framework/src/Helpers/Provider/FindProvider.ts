import { getClassInstance } from "../ClassInjection";
import { getModules, getProviders } from "../Metadata";

/**
 * Recursively searches the module tree from its root entry point and returns the matching provider or undefined.
 * @param root 
 * @param token 
 * @returns 
 */
export function findProvider(root:any, token:string):any {
    const providers = getProviders(root);
    if(providers && providers[token]) return getClassInstance(providers[token]);

    const subModules = getModules(root);
    if(!subModules) return undefined;
    
    for(const moduleToken in subModules) {
        const subProvider = findProvider(subModules[moduleToken].prototype, token);
        if(subProvider) return subProvider;
    }

    return undefined;
}