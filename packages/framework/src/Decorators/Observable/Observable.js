/**
 * @description A decorator that turns a property into an observable.
 * @example @Observable<string> public test: Observer<string>;
 * @param target
 * @param key
 */
export function Observable(target, key) {
    var pKey = '_' + key;
    var subscriptionsKey = pKey + '::subscriptions';
    var valueKey = pKey + '::value';
    var previousValueKey = pKey + '::previousValue';
    target[subscriptionsKey] = [];
    target[key] = {
        subscribe: function (callback) {
            target[subscriptionsKey].push(callback);
            return {
                unsubscribe: function () {
                    target[subscriptionsKey] = target[subscriptionsKey].filter(function (subscription) {
                        return subscription !== callback;
                    });
                }
            };
        },
        next: function (newValue) {
            target[previousValueKey] = target[valueKey];
            target[valueKey] = newValue;
            for (var _i = 0, _a = target[subscriptionsKey]; _i < _a.length; _i++) {
                var subscription = _a[_i];
                subscription(newValue, target[previousValueKey]);
            }
        },
        current: function () {
            return target[valueKey];
        },
        previous: function () {
            return target[previousValueKey];
        }
    };
}
