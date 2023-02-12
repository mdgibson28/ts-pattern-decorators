export interface Subscription {
    unsubscribe: () => void;
}

export interface Observer<T> {
    subscribe: (callback:(newVal:T, prevVal?:T) => unknown) => Subscription;
    next: (newValue:T) => void;
    current: () => T;
    previous: () => T;
}

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
