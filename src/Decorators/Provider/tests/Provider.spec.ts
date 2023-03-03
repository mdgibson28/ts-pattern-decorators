import { INJECTABLE_NAME, INJECTABLE_TOKEN, INJECTION_TYPE_PROVIDER } from "../../../Constants";
import { Provider } from "../Provider";
import "reflect-metadata";

describe("Provider", () => {
    it("should be defined", () => {
        expect(Provider).toBeDefined();
    });

    it("should be a function", () => {
        expect(typeof Provider).toBe("function");
    });

    it('should define an injectable token in metadata', () => {
        @Provider()
        class Test {}

        const metadata = Reflect.getMetadata(INJECTABLE_TOKEN, Test);
        expect(metadata).toEqual(INJECTION_TYPE_PROVIDER);
    });

    it('should define an injectable name in metadata', () => {
        @Provider()
        class Test {}

        const metadata = Reflect.getMetadata(INJECTABLE_NAME, Test);
        expect(metadata).toEqual("Test");
    });
});
