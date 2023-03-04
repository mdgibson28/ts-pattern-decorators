import { ClassInjection } from "../../Interfaces/ClassInjection.interface";

export function getClassInstance<T = any>(injection:ClassInjection<T>) {
    return injection.instance || new injection.prototype();
}
