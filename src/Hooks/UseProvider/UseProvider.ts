import { getModules, getProviders } from "../../Helpers/Metadata";
import { findModule } from "../../Helpers/Module";
import { Provider } from "../../Interfaces/Provider/Provider.interface";

export function useProvider(token:Provider) {
    // get module from module from module tree starting at provided module or app
    return null;
}

/**
 * Recursively searches the module tree from its root entry point and returns the matching module or undefined.
 * @param root 
 * @param token 
 * @returns 
 */
function findProvider(root:any, token:string):any {
    const providers = getProviders(root);
    if(providers[token]) return providers[token];

    const modules = getModules(root);
    
    for(const moduleToken in modules) {
        //  
    }

    return undefined;
}