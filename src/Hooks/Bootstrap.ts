import { AbstractApp } from "../Interfaces/App/App.abstract";

export function useBootstrap(app: AbstractApp) {
    globalThis[app.getToken()] = app;
}
