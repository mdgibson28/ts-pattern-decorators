import { INJECTABLE_TOKEN, MODULE_TOKEN } from "../Constants";
import { StaticModule } from "../Interfaces/Module/StaticModule.interface";
import { Type } from "../Interfaces/Type.interface";

export function useBootstrap(modules:StaticModule[] = []) {
    modules.forEach((module:StaticModule) => {
        const moduleInstance = new module();
        const providers = Reflect.getMetadata("providers", module);
        (providers||[]).forEach((provider:Type) => {
            const providerInstance = new provider();
            const token = Reflect.getMetadata(INJECTABLE_TOKEN, provider);
            moduleInstance[INJECTABLE_TOKEN + token.name] = providerInstance;
        });

        globalThis[MODULE_TOKEN + Reflect.getMetadata(MODULE_TOKEN, module).name] = moduleInstance;
    });
}
