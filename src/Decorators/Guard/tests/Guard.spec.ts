import { INJECTABLE_TOKEN, INJECTION_TYPE_GUARD } from "../../../Constants";
import { Guard } from "../Guard";
import "reflect-metadata";

describe("Injectable", () => {
    it("should be defined", () => {
        expect(Guard).toBeDefined();
    });

    it("should be a function", () => {
        expect(typeof Guard).toBe("function");
    });

    it("should decorate a class with a metadata key matching the class name", () => {
        @Guard()
        class Test {}
        
        expect(Reflect.getMetadata(INJECTABLE_TOKEN, Test)).toBe(INJECTION_TYPE_GUARD);
    });
});
