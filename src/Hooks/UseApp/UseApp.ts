import { APPLICATION_CLASS, APPLICATION_TOKEN } from "../../Constants";
import { AppType } from "../../Interfaces/App/App.type";

export function useApp(token?: AppType): { app: AppType; prototype: any } {
    if (token) {
        globalThis[APPLICATION_CLASS] = token;
        globalThis[APPLICATION_TOKEN] = new token();
    }
    return {app: globalThis[APPLICATION_TOKEN], prototype: globalThis[APPLICATION_CLASS]};
}
