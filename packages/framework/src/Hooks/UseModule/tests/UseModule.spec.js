var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { App, Module } from "../../../Decorators";
import { useApp } from "../../UseApp";
import { useModule } from "../UseModule";
describe("UseModule", function () {
    it("should return the module instance when the module had never been instantiated previously", function () {
        var TestModule = /** @class */ (function () {
            function TestModule() {
            }
            TestModule = __decorate([
                Module()
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
        expect(useModule(TestModule)).toBeInstanceOf(TestModule);
    });
    it("should return the same module instance that was previously created", function () {
        var TestModule = /** @class */ (function () {
            function TestModule() {
            }
            TestModule = __decorate([
                Module()
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
        var module = useModule(TestModule);
        module.test = "test";
        expect(module).toBeInstanceOf(TestModule);
        var module2 = useModule(TestModule);
        expect(module2.test).toEqual(module.test);
    });
    it("should return the instance of a requested module when the module is lower in the tree than the entry point", function () {
        var TestSubModule = /** @class */ (function () {
            function TestSubModule() {
            }
            TestSubModule = __decorate([
                Module()
            ], TestSubModule);
            return TestSubModule;
        }());
        var TestModule = /** @class */ (function () {
            function TestModule() {
            }
            TestModule = __decorate([
                Module({
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
        expect(useModule(TestSubModule)).toBeInstanceOf(TestSubModule);
    });
});
