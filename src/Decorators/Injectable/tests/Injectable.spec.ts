import { INJECTABLE_TOKEN } from "../../../Constants";
import { Injectable } from "../Injectable";
import "reflect-metadata";

describe("Injectable", () => {
    it("should be defined", () => {
        expect(Injectable).toBeDefined();
    });

    it("should be a function", () => {
        expect(typeof Injectable).toBe("function");
    });

    it("should decorate a class with a metadata key matching the class name", () => {
        @Injectable()
        class Test {}
        
        expect(Reflect.getMetadata(INJECTABLE_TOKEN, Test)).toBe(Test);
    });
});
