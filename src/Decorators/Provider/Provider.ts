import { INJECTION_TYPE_PROVIDER } from "../../Constants";
import { setInjectableName, setInjectableToken } from "../../Helpers/Metadata";
import { Provider } from "../../Interfaces/Provider/Provider.interface";

/**
 * Decorate that marks class as a Provider.
 *
 * @returns {ClassDecorator}
 */
export function Provider(): ClassDecorator {
    return (prototype) => {
        setInjectableName(prototype, prototype.name);
        setInjectableToken(prototype, INJECTION_TYPE_PROVIDER);

        return prototype;
    };
}
