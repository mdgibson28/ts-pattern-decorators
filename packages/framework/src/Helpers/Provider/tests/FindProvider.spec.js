var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module, Provider } from "../../../Decorators";
import { findProvider } from "../FindProvider";
describe("FindProvider", function () {
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
    var TestProvider3 = /** @class */ (function () {
        function TestProvider3() {
        }
        TestProvider3 = __decorate([
            Provider()
        ], TestProvider3);
        return TestProvider3;
    }());
    var TestModule2 = /** @class */ (function () {
        function TestModule2() {
        }
        TestModule2 = __decorate([
            Module({
                providers: [TestProvider3],
            })
        ], TestModule2);
        return TestModule2;
    }());
    var TestModule = /** @class */ (function () {
        function TestModule() {
        }
        TestModule = __decorate([
            Module({
                modules: [TestModule2],
                providers: [TestProvider, TestProvider2],
            })
        ], TestModule);
        return TestModule;
    }());
    it("should find a provider in a module", function () {
        var provider = findProvider(TestModule, "TestProvider");
        expect(provider).toBeDefined();
        expect(provider instanceof TestProvider).toBe(true);
    });
    it("should find a provider in a sub-module", function () {
        var provider = findProvider(TestModule, "TestProvider2");
        expect(provider).toBeDefined();
        expect(provider instanceof TestProvider2).toBe(true);
    });
    it("should find a provider in a sub-sub-module", function () {
        var provider = findProvider(TestModule, "TestProvider3");
        expect(provider).toBeDefined();
        expect(provider instanceof TestProvider3).toBe(true);
    });
    it("should return undefined if provider is not found", function () {
        var provider = findProvider(TestModule, "TestProvider4");
        expect(provider).toBeUndefined();
    });
});
