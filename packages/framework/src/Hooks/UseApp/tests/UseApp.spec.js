var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { APPLICATION_TOKEN } from "../../../Constants";
import { Module } from "../../../Decorators";
import { App } from "../../../Decorators/App/App";
import { useApp } from "../useApp";
import "reflect-metadata";
describe("useApp", function () {
    it("should mount an App", function () {
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
                App({ modules: [TestModule] })
            ], TestApp);
            return TestApp;
        }());
        useApp(TestApp);
        expect(globalThis[APPLICATION_TOKEN]).toBeInstanceOf(TestApp);
    });
});
