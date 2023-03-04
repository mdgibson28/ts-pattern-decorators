import { getInjectableName, getInjectableToken, getModules, getProviders, setProvider } from "../../Helpers/Metadata";
import { Provider } from "../../Interfaces/Provider/Provider.interface";
import { useApp } from "../UseApp";

export function useProvider(token:Provider) {
    const {prototype} = useApp();
    let value = findProvider(prototype, getInjectableName(token));
    if(!value) throw new Error('Module not found');

    if (value instanceof token) {
        return value;
    } else {
        value = new token();
        setProvider(prototype, token, value);
        return value;
    }
}

/**
 * Recursively searches the module tree from its root entry point and returns the matching provider or undefined.
 * @param root 
 * @param token 
 * @returns 
 */
function findProvider(root:any, token:string):any {
    const providers = getProviders(root);
    if(providers && providers[token]) return providers[token];

    const subModules = getModules(root);
    if(!subModules) return undefined;
    
    for(const moduleToken in subModules) {
        const subProvider = findProvider(subModules[moduleToken], token);
        if(subProvider) return subProvider;
    }

    return undefined;
}