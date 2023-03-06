import { getInjectableName, setProvider } from "../../Helpers/Metadata";
import { findProvider } from "../../Helpers/Provider";
import { ProviderType } from "../../Interfaces/Provider/Provider.type";
import { useApp } from "../UseApp";

export function useProvider(token:ProviderType) {
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