import { INJECTION_TYPE_GUARD } from "../../Constants";
import { setInjectableName, setInjectableToken } from "../../Helpers/Metadata";

/**
 * Decorate that marks class as a Guard.
 *
 * @returns {ClassDecorator}
 */
export function Guard(): ClassDecorator {
    return (prototype: Function) => {
        setInjectableToken(prototype, INJECTION_TYPE_GUARD);
        setInjectableName(prototype, prototype.name);
    };
}
