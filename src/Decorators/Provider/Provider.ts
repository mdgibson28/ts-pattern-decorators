import { INJECTABLE_NAME, INJECTABLE_TOKEN, INJECTION_TYPE_PROVIDER } from "../../Constants";
import { setInjectableName, setInjectableToken } from "../../Helpers/Metadata";

/**
 * Decorate that marks class as a Provider.
 *
 * @returns {ClassDecorator}
 */
export function Provider(): ClassDecorator {
    return (prototype: Function) => {
        setInjectableName(prototype, prototype.name);
        setInjectableToken(prototype, INJECTION_TYPE_PROVIDER);
    };
}
