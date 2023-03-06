var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from "../Module";
import { Provider } from "../../Provider";
import "reflect-metadata";
import { INJECTABLE_NAME, MODULES_TOKEN, PROVIDERS_TOKEN } from "../../../Constants";
import { getInjectableName, getMetadata } from "../../../Helpers/Metadata";
describe("Module", function () {
    it("should be defined", function () {
        expect(Module).toBeDefined();
    });
    it('should define an injectable name', function () {
        var TestModule = /** @class */ (function () {
            function TestModule() {
            }
            TestModule = __decorate([
                Module()
            ], TestModule);
            return TestModule;
        }());
        var metadata = getMetadata(TestModule, INJECTABLE_NAME);
        expect(metadata).toEqual("TestModule");
    });
    it("should define metadata", function () {
        var TestModule = /** @class */ (function () {
            function TestModule() {
            }
            TestModule = __decorate([
                Module({
                    providers: [],
                })
            ], TestModule);
            return TestModule;
        }());
        var metadata = getMetadata(TestModule, PROVIDERS_TOKEN);
        expect(metadata).toEqual({});
    });
    it("should define metadata with a sub module", function () {
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
        var metadata = getMetadata(TestModule, MODULES_TOKEN);
        expect(metadata[getInjectableName(TestSubModule)].prototype).toEqual(TestSubModule);
    });
    it("should define metadata with providers", function () {
        var TestService = /** @class */ (function () {
            function TestService() {
            }
            TestService = __decorate([
                Provider()
            ], TestService);
            return TestService;
        }());
        var TestModule = /** @class */ (function () {
            function TestModule() {
            }
            TestModule = __decorate([
                Module({
                    providers: [TestService],
                })
            ], TestModule);
            return TestModule;
        }());
        var metadata = getMetadata(TestModule, PROVIDERS_TOKEN);
        expect(metadata[getInjectableName(TestService)].prototype).toEqual(TestService);
    });
});
