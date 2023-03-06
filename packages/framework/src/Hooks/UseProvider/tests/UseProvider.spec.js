var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { App, Module, Provider } from "../../../Decorators";
import { useApp } from "../../UseApp";
import { useProvider } from "../UseProvider";
describe("UseProvider", function () {
    it("should return the provider instance when the provider had never been instantiated previously", function () {
        var TestProvider = /** @class */ (function () {
            function TestProvider() {
            }
            TestProvider = __decorate([
                Provider()
            ], TestProvider);
            return TestProvider;
        }());
        var TestModule = /** @class */ (function () {
            function TestModule() {
            }
            TestModule = __decorate([
                Module({
                    providers: [TestProvider],
                })
            ], TestModule);
            return TestModule;
        }());
        var TestApp = /** @class */ (function () {
            function TestApp() {
            }
            TestApp = __decorate([
                App({
                    modules: [TestModule],
                })
            ], TestApp);
            return TestApp;
        }());
        useApp(TestApp);
        expect(useProvider(TestProvider)).toBeInstanceOf(TestProvider);
    });
    it("should return a provider on a sub module", function () {
        var TestProvider = /** @class */ (function () {
            function TestProvider() {
            }
            TestProvider = __decorate([
                Provider()
            ], TestProvider);
            return TestProvider;
        }());
        var TestProvider2 = /** @class */ (function () {
            function TestProvider2() {
            }
            TestProvider2 = __decorate([
                Provider()
            ], TestProvider2);
            return TestProvider2;
        }());
        var TestSubModule = /** @class */ (function () {
            function TestSubModule() {
            }
            TestSubModule = __decorate([
                Module({
                    providers: [TestProvider2],
                })
            ], TestSubModule);
            return TestSubModule;
        }());
        var TestModule = /** @class */ (function () {
            function TestModule() {
            }
            TestModule = __decorate([
                Module({
                    providers: [TestProvider],
                    modules: [TestSubModule],
                })
            ], TestModule);
            return TestModule;
        }());
        var TestApp = /** @class */ (function () {
            function TestApp() {
            }
            TestApp = __decorate([
                App({
                    modules: [TestModule],
                })
            ], TestApp);
            return TestApp;
        }());
        useApp(TestApp);
        var provider = useProvider(TestProvider);
        expect(provider).toBeInstanceOf(TestProvider);
        var provider2 = useProvider(TestProvider2);
        expect(provider).toEqual(provider2);
    });
});
