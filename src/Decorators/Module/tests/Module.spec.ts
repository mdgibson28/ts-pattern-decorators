import { Module } from "../Module";
import { Provider } from "../../Provider";
import "reflect-metadata";
import { INJECTABLE_NAME, MODULES_TOKEN, PROVIDERS_TOKEN } from "../../../Constants";
import { getInjectableName, getMetadata } from "../../../Helpers/Metadata";

describe("Module", () => {
    it("should be defined", () => {
        expect(Module).toBeDefined();
    });
    
    it('should define an injectable name', () => {
        @Module()
        class TestModule {}

        const metadata = getMetadata(TestModule, INJECTABLE_NAME);
        expect(metadata).toEqual("TestModule");
    });

    it("should define metadata", () => {
        @Module({
            providers: [],
        })
        class TestModule {}

        const metadata = getMetadata(TestModule, PROVIDERS_TOKEN);
        expect(metadata).toEqual({});
    });

    it("should define metadata with providers", () => {
        @Provider()
        class TestService {}

        @Module({
            providers: [TestService],
        })
        class TestModule {}

        const metadata = getMetadata(TestModule, PROVIDERS_TOKEN);
        expect(metadata[getInjectableName(TestService)].prototype).toEqual(TestService);
    });

    it("should define metadata with a sub module", () => {
        @Module()
        class TestSubModule {}

        @Module({
            modules: [TestSubModule],
        })
        class TestModule {}

        const metadata = getMetadata(TestModule, MODULES_TOKEN);
        expect(metadata[getInjectableName(TestSubModule)].prototype).toEqual(TestSubModule);
    });
});
