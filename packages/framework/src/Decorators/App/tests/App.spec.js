var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { useApp } from "../../../Hooks";
import { Module, Presenter, Provider, Route } from "../../../Decorators";
import { App } from "../App";
import "reflect-metadata";
import { getModule, getProvider, getRoute } from "../../../Helpers/Metadata/GetMetadata";
import { AbstractApp } from "../../../Interfaces/App/App.abstract";
describe("App", function () {
    it("should mount an injected module", function () {
        var TestModule = /** @class */ (function () {
            function TestModule() {
            }
            TestModule = __decorate([
                Module()
            ], TestModule);
            return TestModule;
        }());
        var TestApp = /** @class */ (function (_super) {
            __extends(TestApp, _super);
            function TestApp() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TestApp = __decorate([
                App({
                    modules: [TestModule],
                })
            ], TestApp);
            return TestApp;
        }(AbstractApp));
        useApp(TestApp);
        expect(getModule(TestApp, TestModule).prototype).toBe(TestModule);
    });
    it("should mount two injected modules", function () {
        var TestModule = /** @class */ (function () {
            function TestModule() {
            }
            TestModule = __decorate([
                Module()
            ], TestModule);
            return TestModule;
        }());
        var TestModule2 = /** @class */ (function () {
            function TestModule2() {
            }
            TestModule2 = __decorate([
                Module()
            ], TestModule2);
            return TestModule2;
        }());
        var TestApp = /** @class */ (function (_super) {
            __extends(TestApp, _super);
            function TestApp() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TestApp = __decorate([
                App({
                    modules: [TestModule, TestModule2],
                })
            ], TestApp);
            return TestApp;
        }(AbstractApp));
        useApp(TestApp);
        expect(getModule(TestApp, TestModule).prototype).toBe(TestModule);
        expect(getModule(TestApp, TestModule2).prototype).toBe(TestModule2);
    });
    it("should mount an injected provider", function () {
        var TestProvider = /** @class */ (function () {
            function TestProvider() {
            }
            TestProvider = __decorate([
                Provider()
            ], TestProvider);
            return TestProvider;
        }());
        var TestApp = /** @class */ (function (_super) {
            __extends(TestApp, _super);
            function TestApp() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TestApp = __decorate([
                App({
                    providers: [TestProvider],
                })
            ], TestApp);
            return TestApp;
        }(AbstractApp));
        useApp(TestApp);
        expect(getProvider(TestApp, TestProvider).prototype).toBe(TestProvider);
    });
    it("should mount an injected route", function () {
        var TestPresenter = /** @class */ (function () {
            function TestPresenter() {
            }
            TestPresenter = __decorate([
                Presenter()
            ], TestPresenter);
            return TestPresenter;
        }());
        var TestRoute = /** @class */ (function () {
            function TestRoute() {
            }
            TestRoute = __decorate([
                Route({
                    presenter: TestPresenter
                })
            ], TestRoute);
            return TestRoute;
        }());
        var TestApp = /** @class */ (function (_super) {
            __extends(TestApp, _super);
            function TestApp() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TestApp = __decorate([
                App({
                    providers: [TestRoute],
                })
            ], TestApp);
            return TestApp;
        }(AbstractApp));
        useApp(TestApp);
        expect(getRoute(TestApp, TestRoute).prototype).toBe(TestRoute);
    });
    it("should register a plugin", function () {
        var register = jest.fn();
        var TestPlugin = /** @class */ (function () {
            function TestPlugin() {
                this.register = register;
            }
            return TestPlugin;
        }());
        var TestApp = /** @class */ (function (_super) {
            __extends(TestApp, _super);
            function TestApp() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TestApp = __decorate([
                App({
                    plugins: [new TestPlugin()],
                })
            ], TestApp);
            return TestApp;
        }(AbstractApp));
        useApp(TestApp);
        expect(register).toBeCalled();
    });
});
