import { INJECTABLE_TOKEN } from "../../Constants";

export class InjectableMapper {
    static map(type: string, prototype: Function, instance: any) {
        const types = Reflect.getMetadata(type, prototype);
        (types || []).forEach((provider: any) => {
            const providerInstance = new provider();
            const token = Reflect.getMetadata(INJECTABLE_TOKEN, provider);
            instance[token] = instance[token] || {};
            instance[token][provider] = providerInstance;
        });
    }
}