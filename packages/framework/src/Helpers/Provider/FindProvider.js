import { getClassInstance } from "../ClassInjection";
import { getModules, getProviders } from "../Metadata";
/**
 * Recursively searches the module tree from its root entry point and returns the matching provider or undefined.
 * @param root
 * @param token
 * @returns
 */
export function findProvider(root, token) {
    var providers = getProviders(root);
    if (providers && providers[token])
        return getClassInstance(providers[token]);
    var subModules = getModules(root);
    if (!subModules)
        return undefined;
    for (var moduleToken in subModules) {
        var subProvider = findProvider(subModules[moduleToken].prototype, token);
        if (subProvider)
            return subProvider;
    }
    return undefined;
}
