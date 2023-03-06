var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { JsonBuilder } from "..";
describe("JsonBuilder", function () {
    it("should build an object from a JSON object", function () {
        var MyClass = /** @class */ (function () {
            function MyClass() {
            }
            return MyClass;
        }());
        var MyTestClass = /** @class */ (function () {
            function MyTestClass() {
            }
            __decorate([
                JsonBuilder(MyClass)
            ], MyTestClass.prototype, "myProperty", void 0);
            return MyTestClass;
        }());
        var testObj = new MyTestClass();
        testObj.myProperty = { name: "John", age: 30 };
        expect(testObj.myProperty).toBeInstanceOf(MyClass);
        expect(testObj.myProperty.name).toEqual("John");
        expect(testObj.myProperty.age).toEqual(30);
    });
    it("should build an array of objects from a JSON array", function () {
        var MyClass = /** @class */ (function () {
            function MyClass() {
            }
            return MyClass;
        }());
        var MyTestClass = /** @class */ (function () {
            function MyTestClass() {
            }
            __decorate([
                JsonBuilder(MyClass)
            ], MyTestClass.prototype, "myProperty", void 0);
            return MyTestClass;
        }());
        var testObj = new MyTestClass();
        testObj.myProperty = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }];
        expect(Array.isArray(testObj.myProperty)).toBe(true);
        expect(testObj.myProperty.length).toBe(2);
        expect(testObj.myProperty[0]).toBeInstanceOf(MyClass);
        expect(testObj.myProperty[0].name).toEqual("John");
        expect(testObj.myProperty[0].age).toEqual(30);
        expect(testObj.myProperty[1]).toBeInstanceOf(MyClass);
        expect(testObj.myProperty[1].name).toEqual("Jane");
        expect(testObj.myProperty[1].age).toEqual(25);
    });
    it("should not build an object if the value is already an instance of the buildClass", function () {
        var MyClass = /** @class */ (function () {
            function MyClass() {
            }
            return MyClass;
        }());
        var MyTestClass = /** @class */ (function () {
            function MyTestClass() {
            }
            __decorate([
                JsonBuilder(MyClass)
            ], MyTestClass.prototype, "myProperty", void 0);
            return MyTestClass;
        }());
        var testObj = new MyTestClass();
        testObj.myProperty = new MyClass();
        testObj.myProperty.name = "John";
        testObj.myProperty.age = 30;
        expect(testObj.myProperty).toBeInstanceOf(MyClass);
        expect(testObj.myProperty.name).toEqual("John");
        expect(testObj.myProperty.age).toEqual(30);
    });
    it("should not build an object if the value is an array of instances of the buildClass", function () {
        var MyClass = /** @class */ (function () {
            function MyClass() {
            }
            return MyClass;
        }());
        var MyTestClass = /** @class */ (function () {
            function MyTestClass() {
            }
            __decorate([
                JsonBuilder(MyClass)
            ], MyTestClass.prototype, "myProperty", void 0);
            return MyTestClass;
        }());
        var testObj = new MyTestClass();
        testObj.myProperty = [new MyClass(), new MyClass()];
        testObj.myProperty[0].name = "John";
        testObj.myProperty[0].age = 30;
        testObj.myProperty[1].name = "Jane";
        testObj.myProperty[1].age = 25;
        expect(Array.isArray(testObj.myProperty)).toBe(true);
        expect(testObj.myProperty.length).toBe(2);
        expect(testObj.myProperty[0]).toBeInstanceOf(MyClass);
        expect(testObj.myProperty[0].name).toEqual("John");
        expect(testObj.myProperty[0].age).toEqual(30);
        expect(testObj.myProperty[1]).toBeInstanceOf(MyClass);
        expect(testObj.myProperty[1].name).toEqual("Jane");
        expect(testObj.myProperty[1].age).toEqual(25);
    });
});
