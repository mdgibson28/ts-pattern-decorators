import { APPLICATION_TOKEN } from "../../Constants";
import { getInjectableName } from "../../Helpers/Metadata/GetMetadata";
import { App } from "../../Interfaces/App/App.interface";

export function useApp(appToken: App): void {
    globalThis[APPLICATION_TOKEN + getInjectableName(appToken)] = new appToken();
}
