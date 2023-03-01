import {  APPLICATION_MODULES } from "../../Constants";
import { InjectableMapper } from "../../Helpers/Injection";
import { AppMetadata } from "../../Interfaces/App/AppMetadata.interface";

export function App(metadata: AppMetadata): ClassDecorator {
    return (prototype: Function) => {
        const proxy = new Proxy(prototype, {
            construct(source: any, args: any[], target: any) {
                const appInstance: any = Reflect.construct(
                    source,
                    args,
                    target
                );
                
                InjectableMapper.map(APPLICATION_MODULES, target, appInstance);

                return appInstance;
            },
        });

        for (const property in metadata) {
            if (Object.prototype.hasOwnProperty.call(metadata, property)) {
                Reflect.defineMetadata(property, metadata[property], prototype);
            }
        }

        return proxy;
    };
}
