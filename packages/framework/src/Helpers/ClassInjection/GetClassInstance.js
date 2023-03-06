export function getClassInstance(injection) {
    return injection.instance || new injection.prototype();
}
