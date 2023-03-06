import { getInjectableName, setProvider } from "../../Helpers/Metadata";
import { findProvider } from "../../Helpers/Provider";
import { useApp } from "../UseApp";
export function useProvider(token) {
    var prototype = useApp().prototype;
    var value = findProvider(prototype, getInjectableName(token));
    if (!value)
        throw new Error('Module not found');
    if (value instanceof token) {
        return value;
    }
    else {
        value = new token();
        setProvider(prototype, token, value);
        return value;
    }
}
