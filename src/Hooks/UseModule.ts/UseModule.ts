import { setModule } from "../../Helpers/Metadata";
import { getModule } from "../../Helpers/Metadata/GetMetadata";
import { App } from "../../Interfaces/App/App.interface";
import { Module } from "../../Interfaces/Module/Module.interface";

/**
 * Returns an instance of a Module from an App.
 * If module is not yet instantiated, it will be instantiated and stored in the App.
 * This ensures only a single instance is ever created for the module
 * during the lifetime of the application.
 * @param source 
 * @param token 
 * @returns 
 */
export function useModule(source:App|Module, token:Module) {
    let value = getModule(source, token);
    if (value instanceof token) {
        return value;
    } else {
        value = new token();
        setModule(source, token, value);
        return value;
    }
}