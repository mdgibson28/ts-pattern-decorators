import { INJECTION_TYPE_PROVIDER } from "../../Constants";
import { setInjectableMetadata } from "../../Helpers/Metadata";
/**
 * Decorate that marks class as a Provider.
 *
 * @returns {ClassDecorator}
 */
export function Provider() {
    return function (prototype) {
        setInjectableMetadata(prototype, INJECTION_TYPE_PROVIDER);
        return prototype;
    };
}
