import { useApp } from "../../../Hooks";
import { Module } from "../../../Decorators";
import { App } from "../App";
import "reflect-metadata";
import { getModule } from "../../../Helpers/Metadata/GetMetadata";

describe("App", () => {
    it("should mount an injected module", () => {
        @Module()
        class TestModule {}

        @App({
            selector: "app-root",
            modules: [TestModule],
        })
        class TestApp {}

        useApp(TestApp);

        expect(getModule(TestApp, TestModule).prototype).toBe(TestModule);
    });

    it("should mount two injected modules", () => {
        @Module()
        class TestModule {}

        @Module()
        class TestModule2 {}

        @App({
            selector: "app-root",
            modules: [TestModule, TestModule2],
        })
        class TestApp {}

        useApp(TestApp);

        expect(getModule(TestApp, TestModule).prototype).toBe(TestModule);
        expect(getModule(TestApp, TestModule2).prototype).toBe(TestModule2);
    });
});
