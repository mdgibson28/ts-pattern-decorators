import { JsonBuilder } from "..";

describe("JsonBuilder", () => {
    it("should build an object from a JSON object", () => {
        class MyClass {
            public name:string;
            public age:number;
        }

        class MyTestClass {
            @JsonBuilder(MyClass)
            public myProperty:MyClass;
        }

        const testObj = new MyTestClass();
        testObj.myProperty = {name: "John", age: 30};

        expect(testObj.myProperty).toBeInstanceOf(MyClass);
        expect(testObj.myProperty.name).toEqual("John");
        expect(testObj.myProperty.age).toEqual(30);
    });

    it("should build an array of objects from a JSON array", () => {
        class MyClass {
            public name:string;
            public age:number;
        }

        class MyTestClass {
            @JsonBuilder(MyClass)
            public myProperty:MyClass[];
        }

        const testObj = new MyTestClass();
        testObj.myProperty = [{name: "John", age: 30}, {name: "Jane", age: 25}];

        expect(Array.isArray(testObj.myProperty)).toBe(true);
        expect(testObj.myProperty.length).toBe(2);
        expect(testObj.myProperty[0]).toBeInstanceOf(MyClass);
        expect(testObj.myProperty[0].name).toEqual("John");
        expect(testObj.myProperty[0].age).toEqual(30);
        expect(testObj.myProperty[1]).toBeInstanceOf(MyClass);
        expect(testObj.myProperty[1].name).toEqual("Jane");
        expect(testObj.myProperty[1].age).toEqual(25);
    });

    it("should not build an object if the value is already an instance of the buildClass", () => {
        class MyClass {
            public name:string;
            public age:number;
        }

        class MyTestClass {
            @JsonBuilder(MyClass)
            public myProperty:MyClass;
        }

        const testObj = new MyTestClass();
        testObj.myProperty = new MyClass();
        testObj.myProperty.name = "John";
        testObj.myProperty.age = 30;

        expect(testObj.myProperty).toBeInstanceOf(MyClass);
        expect(testObj.myProperty.name).toEqual("John");
        expect(testObj.myProperty.age).toEqual(30);
    });

    it("should not build an object if the value is an array of instances of the buildClass", () => {
        class MyClass {
            public name:string;
            public age:number;
        }

        class MyTestClass {
            @JsonBuilder(MyClass)
            public myProperty:MyClass[];
        }

        const testObj = new MyTestClass();
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

