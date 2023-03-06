import { APPLICATION_CLASS, APPLICATION_TOKEN } from "../../Constants";
export function useApp(token) {
    if (token) {
        globalThis[APPLICATION_CLASS] = token;
        globalThis[APPLICATION_TOKEN] = new token();
    }
    return { app: globalThis[APPLICATION_TOKEN], prototype: globalThis[APPLICATION_CLASS] };
}
