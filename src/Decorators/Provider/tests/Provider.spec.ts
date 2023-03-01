import { INJECTABLE_TOKEN, INJECTION_TYPE_PROVIDER } from "../../../Constants";
import { Provider } from "../Provider";
import "reflect-metadata";

describe("Provider", () => {
    it("should be defined", () => {
        expect(Provider).toBeDefined();
    });

    it("should be a function", () => {
        expect(typeof Provider).toBe("function");
    });

    it("should decorate a class with a metadata key matching the class name", () => {
        @Provider()
        class Test {}
        
        expect(Reflect.getMetadata(INJECTABLE_TOKEN, Test)).toBe(INJECTION_TYPE_PROVIDER);
    });
});
