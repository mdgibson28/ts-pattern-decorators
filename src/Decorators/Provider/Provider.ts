import { INJECTABLE_TOKEN, INJECTION_TYPE_PROVIDER } from "../../Constants";

/**
 * Decorate that marks class as a Provider.
 *
 * @returns {ClassDecorator}
 */
export function Provider(): ClassDecorator {
    return (target: Function) => {
        Reflect.defineMetadata(INJECTABLE_TOKEN, INJECTION_TYPE_PROVIDER, target);
    };
}
