import { INJECTABLE_TOKEN, INJECTION_TYPE_MODULE } from "../../Constants";
import { InjectableMapper } from "../../Helpers/Injection";
import { ModuleMetadata } from "../../Interfaces/Module/ModuleMetadata.interface";

export function Module(metadata: ModuleMetadata = {}): ClassDecorator {
    return (prototype: Function) => {
        const proxy = new Proxy(prototype, {
            construct(source: any, args: any[], target: any) {
                const moduleInstance: any = Reflect.construct(
                    source,
                    args,
                    target
                );

                for (const type in metadata) {
                    InjectableMapper.map(type, target, moduleInstance);
                }

                return moduleInstance;
            },
        });

        Reflect.defineMetadata(INJECTABLE_TOKEN, INJECTION_TYPE_MODULE, proxy);
        for (const property in metadata) {
            if (Object.prototype.hasOwnProperty.call(metadata, property)) {
                Reflect.defineMetadata(property, metadata[property], proxy);
            }
        }

        return proxy;
    };
}