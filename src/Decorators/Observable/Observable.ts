/**
 * @description A decorator that turns a property into an observable.
 * @example @Observable<string> public test: Observer<string>;
 * @param target 
 * @param key 
 */
export function Observable<T>(target:object, key:string):void {
    const pKey:string = '_' + key;
    const subscriptionsKey:string =  pKey + '::subscriptions';
    const valueKey:string = pKey + '::value';
    const previousValueKey:string = pKey + '::previousValue';

    target[subscriptionsKey] = [];
    target[key] = {
        subscribe: (callback:(newVal:T, prevVal?:T) => unknown):Subscription => {
            target[subscriptionsKey].push(callback);
            return {
                unsubscribe() {
                    target[subscriptionsKey] = target[subscriptionsKey].filter((subscription:any) => {
                        return subscription !== callback;
                    });
                }
            };
        },
        next: (newValue:T) => {
            target[previousValueKey] = target[valueKey];
            target[valueKey] = newValue;
            for(const subscription of target[subscriptionsKey]) {
                subscription(newValue, target[previousValueKey]);
            }
        },
        current: ():T => {
            return target[valueKey];
        },
        previous: ():T => {
            return target[previousValueKey];
        }
    }
}

/**
 * @description A subscription to an observer.
 */
export interface Subscription {
    /**
     * @description Unsubscribe from the observer.
     * @example const subscription = this.test.subscribe((newVal, prevVal) => {
     *    ...
     * });
     * 
     * @returns Unsubscribe from the observer. 
     */
    unsubscribe: () => void;
}

/**
 * @description An observer that manages the state of a property and notifies subscribers when the state changes.
 * @example @Observable<string> public test: Observer<string>;
 */
export interface Observer<T> {
    /**
     * @description Subscribe to the observer. 
     * @param callback
     * @example this.test.subscribe((newVal, prevVal) => {
     *     console.log('new value:', newVal);
     *     console.log('previous value:', prevVal);
     * });
     * @returns A subscription to the observer.  
     */
    subscribe: (callback:(newVal:T, prevVal?:T) => unknown) => Subscription;
    /**
     * @description Update the value of the observer and notify subscribers.
     * #example this.test.next('new value');
     * @param newValue 
     * @returns
     */
    next: (newValue:T) => void;
    /**
     * @description Get the current value of the observer.
     * @example const currentValue = this.test.current();
     * @returns The current value of the observer.
     */
    current: () => T;
    /**
     * @description Get the previous value of the observer.
     * @example const prevValue = this.test.previous();
     * @returns The previous value of the observer. 
     */
    previous: () => T;
}