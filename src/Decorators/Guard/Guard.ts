import { INJECTABLE_TOKEN, INJECTION_TYPE_GUARD } from "../../Constants";

/**
 * Decorate that marks class as a Guard.
 *
 * @returns {ClassDecorator}
 */
export function Guard(): ClassDecorator {
    return (target: Function) => {
        Reflect.defineMetadata(INJECTABLE_TOKEN, INJECTION_TYPE_GUARD, target);
    };
}
