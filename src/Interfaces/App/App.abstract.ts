import {
    APPLICATION_MODULES,
    APPLICATION_TOKEN,
    INJECTABLE_TOKEN,
    INJECTION_TYPE_MODULE,
} from "../../Constants";
import { InjectableMapper } from "../../Helpers/Injection";
import { Module } from "../Module/Module.interface";
import { Type } from "../Type.interface";

export abstract class AbstractApp {

    givr(): void {
        console.log("Application started. GIVR!");

        const modules: Type[] = Reflect.getMetadata(
            APPLICATION_MODULES,
            this.constructor
        );
        const appToken: string = this.getToken();

        globalThis[appToken] = {};

        (modules || []).forEach((module: Type) => {
            const moduleInstance = new module();
            const moduleToken: string = Reflect.getMetadata(
                INJECTABLE_TOKEN,
                module
            );

            globalThis[appToken][moduleToken] =
                globalThis[appToken][moduleToken] || {};
            globalThis[appToken][moduleToken][module] = moduleInstance;
        });
    }

    module(module: Module | Module[]): AbstractApp {
        const modules: Module[] = Array.isArray(module) ? module : [module];
        for(const m of modules) {
            InjectableMapper.append(APPLICATION_MODULES, this.constructor, m);
        }
        return this;
    }

    getToken(): string {
        return APPLICATION_TOKEN + this.constructor.name;
    }
}
