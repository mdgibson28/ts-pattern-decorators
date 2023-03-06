type ObjectConstructor = new (...args: unknown[]) => unknown;

/**
 * Sets the value of a property on a target object.
 * If the value is an array, it will iterate over the array and create a new instance of the buildClass for each item.
 * If the value is not an array, it will create a new instance of the buildClass and assign the value to it.
 * If the value is already an instance of the buildClass, it will assign the value to the target object.
 * @param buildClass The class to use to build the value.
 * @param target The object on which to set the property.
 * @param pKey The name of the property to set.
 * @param val The value to set on the target object.
 */
function setValue(buildClass:ObjectConstructor, target:unknown, pKey:string, val:unknown):void {
    if(Array.isArray(val) && val.length > 0 && !(val[0] instanceof buildClass)) {
        target[pKey] = val.map((item) => {
            const instance = new buildClass();
            Object.assign(instance, item);
            return instance;
        });
    } else if(!Array.isArray(val) && val && typeof(val) === 'object' && !(val instanceof buildClass)) {
        target[pKey] = new buildClass();
        Object.assign(target[pKey], val);
    } else {
        target[pKey] = val;
    }
}

/**
 * Decorator that will build an Object from a JSON object.
 * @param buildClass The class to use to build the value.
 * @param buildClass 
 * @returns returns a factory for the property descriptor
 * @example @JsonBuilder(MyClass) myProperty:MyClass;
 */
export function JsonBuilder(buildClass:ObjectConstructor):  (target:unknown, key:string) => void {
    return function(target:unknown, key:string):void {

        const pKey:string = '_' + key;

        Object.defineProperty(target, pKey, {
            enumerable: false,
            configurable: true,
            writable: true
        });

        Object.defineProperty(target, key, {
            enumerable:true,
            get: function() {
                return this[pKey];
            },
            set: function(val) {
                setValue(buildClass, this, pKey, val);
            }
        });
    }
}


