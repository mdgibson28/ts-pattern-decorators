import { setModule } from "../../Helpers/Metadata";
import { getInjectableName } from "../../Helpers/Metadata/GetMetadata";
import { findModule } from "../../Helpers/Module";
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