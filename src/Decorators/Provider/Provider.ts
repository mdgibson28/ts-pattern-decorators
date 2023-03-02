import { INJECTABLE_NAME, INJECTABLE_TOKEN, INJECTION_TYPE_PROVIDER } from "../../Constants";

/**
 * Decorate that marks class as a Provider.
 *
 * @returns {ClassDecorator}
 */
export function Provider(): ClassDecorator {
    return (prototype: Function) => {
        Reflect.defineMetadata(
            INJECTABLE_NAME,
            prototype.name,
            prototype
        );
        Reflect.defineMetadata(INJECTABLE_TOKEN, INJECTION_TYPE_PROVIDER, prototype);
    };
}
