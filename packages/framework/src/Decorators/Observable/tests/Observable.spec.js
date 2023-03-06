var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Observable } from "../Observable";
describe("Observable", function () {
    it("should be able to subscribe to an observable", function () {
        var Test = /** @class */ (function () {
            function Test() {
            }
            __decorate([
                (Observable)
            ], Test.prototype, "test", void 0);
            return Test;
        }());
        var test = new Test();
        var observer = test.test;
        var subscription = observer.subscribe(function (newValue) {
            expect(newValue).toBe("test2");
        });
        observer.next("test2");
        subscription.unsubscribe();
    });
    it("should be able to get the current value of an observable", function () {
        var Test = /** @class */ (function () {
            function Test() {
            }
            __decorate([
                (Observable)
            ], Test.prototype, "test", void 0);
            return Test;
        }());
        var test = new Test();
        var observer = test.test;
        observer.next("test");
        expect(observer.current()).toBe("test");
    });
    it("should be able to get the previous value of an observable", function () {
        var Test = /** @class */ (function () {
            function Test() {
            }
            __decorate([
                (Observable)
            ], Test.prototype, "test", void 0);
            return Test;
        }());
        var test = new Test();
        var observer = test.test;
        observer.next("test");
        observer.next("test2");
        expect(observer.previous()).toBe("test");
    });
});
