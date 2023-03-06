import { getModules } from "../Metadata";
/**
 * Recursively searches the module tree from its root entry point and returns the matching module or undefined.
 * @param root
 * @param token
 * @returns
 */
export function findModule(root, token) {
    var modules = getModules(root);
    if (!modules)
        return undefined;
    if (modules[token])
        return modules[token];
    for (var moduleToken in modules) {
        var subModule = findModule(modules[moduleToken].prototype, token);
        if (subModule)
            return subModule;
    }
    return undefined;
}
