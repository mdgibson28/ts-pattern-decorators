import { Type } from '../../Interfaces/Type.interface';

export const SINGLETON_KEY = Symbol();

export type Singleton<T extends Type> = T&{
    [SINGLETON_KEY]:T extends new (...args:any[]) => infer I ? I : never
};

/**
 * Creates a Singleton from a constructor.
 * @template T The constructor to use.
 * @param {T} type The constructor to use.
 * @returns {Proxy<T>} The singleton.
 */
export const Singleton = <T extends Type>(type:T) => new Proxy(
    type,
    {
        construct(source:Singleton<T>, args:any[], target:T) {
            if (source.prototype !== target.prototype) {
                return Reflect.construct(source, args, target);
            }

            return source[SINGLETON_KEY] = !source[SINGLETON_KEY]
                ? Reflect.construct(source, args, target)
                : source[SINGLETON_KEY];
        }
    }
);
