import { INJECTABLE_TOKEN } from "../../Constants";

/**
 * Decorate that marks class as injectable.
 * You can then add the injectable class to a Module's providers array.
 * The injectable class will then be available to all components in the module.
 * Injectable classes can be accessed in a components using the useInjectable hook.
 *
 * @returns {ClassDecorator}
 */
export function Injectable(): ClassDecorator {
    return (target: Function) => {
        Reflect.defineMetadata(INJECTABLE_TOKEN, target, target);
    };
}
