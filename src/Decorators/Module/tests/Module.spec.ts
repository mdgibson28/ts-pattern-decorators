import { Module } from "../Module";
import { Provider } from "../../Provider";
import "reflect-metadata";

describe("Module", () => {
    it("should define metadata", () => {
        @Module({
            providers: [],
        })
        class TestModule {}

        const metadata = Reflect.getMetadata("providers", TestModule);
        expect(metadata).toEqual([]);
    });

    it("should define metadata with providers", () => {
        @Provider()
        class TestService {}

        @Module({
            providers: [TestService],
        })
        class TestModule {}

        const metadata = Reflect.getMetadata("providers", TestModule);
        expect(metadata).toEqual([TestService]);
    });
});
