type ObjectConstructor = new (...args: unknown[]) => unknown;
/**
 * Decorator that will build an Object from a JSON object.
 * @param buildClass The class to use to build the value.
 * @param buildClass
 * @returns returns a factory for the property descriptor
 * @example @JsonBuilder(MyClass) myProperty:MyClass;
 */
export declare function JsonBuilder(buildClass: ObjectConstructor): (target: unknown, key: string) => void;
export {};
