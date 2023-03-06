export var SINGLETON_KEY = Symbol();
/**
 * Creates a Singleton from a constructor.
 * @template T The constructor to use.
 * @param {T} type The constructor to use.
 * @returns {Proxy<T>} The singleton.
 */
export var Singleton = function (type) { return new Proxy(type, {
    construct: function (source, args, target) {
        if (source.prototype !== target.prototype) {
            return Reflect.construct(source, args, target);
        }
        return source[SINGLETON_KEY] = !source[SINGLETON_KEY]
            ? Reflect.construct(source, args, target)
            : source[SINGLETON_KEY];
    }
}); };
