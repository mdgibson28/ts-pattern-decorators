var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { INJECTABLE_NAME, INJECTABLE_TOKEN, INJECTION_TYPE_PROVIDER } from "../../../Constants";
import { Provider } from "../Provider";
import "reflect-metadata";
describe("Provider", function () {
    it("should be defined", function () {
        expect(Provider).toBeDefined();
    });
    it("should be a function", function () {
        expect(typeof Provider).toBe("function");
    });
    it('should define an injectable token in metadata', function () {
        var Test = /** @class */ (function () {
            function Test() {
            }
            Test = __decorate([
                Provider()
            ], Test);
            return Test;
        }());
        var metadata = Reflect.getMetadata(INJECTABLE_TOKEN, Test);
        expect(metadata).toEqual(INJECTION_TYPE_PROVIDER);
    });
    it('should define an injectable name in metadata', function () {
        var Test = /** @class */ (function () {
            function Test() {
            }
            Test = __decorate([
                Provider()
            ], Test);
            return Test;
        }());
        var metadata = Reflect.getMetadata(INJECTABLE_NAME, Test);
        expect(metadata).toEqual("Test");
    });
});
