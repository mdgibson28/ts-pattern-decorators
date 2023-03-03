import { APPLICATION_CLASS, APPLICATION_TOKEN } from "../../Constants";
import { App } from "../../Interfaces/App/App.interface";

export function useApp(token?: App): { app: App; prototype: any } {
    if (token) {
        globalThis[APPLICATION_TOKEN] = new token();
        globalThis[APPLICATION_CLASS] = token;
    }
    return {app: globalThis[APPLICATION_TOKEN], prototype: globalThis[APPLICATION_CLASS]};
}
