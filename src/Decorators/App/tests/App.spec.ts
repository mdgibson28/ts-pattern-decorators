import { useApp } from "../../../Hooks";
import { Module } from "../../../Decorators";
import { App } from "../App";
import "reflect-metadata";
import { getModule } from "../../../Helpers/Metadata/GetMetadata";
import { Plugin } from "../../../Interfaces/Plugins/Plugin.interface";
import { AbstractApp } from "../../../Interfaces/App/App.abstract";

describe("App", () => {
    it("should mount an injected module", () => {
        @Module()
        class TestModule {}

        @App({
            modules: [TestModule],
        })
        class TestApp extends AbstractApp {}

        useApp(TestApp);

        expect(getModule(TestApp, TestModule).prototype).toBe(TestModule);
    });

    it("should mount two injected modules", () => {
        @Module()
        class TestModule {}

        @Module()
        class TestModule2 {}

        @App({
            modules: [TestModule, TestModule2],
        })
        class TestApp extends AbstractApp {}

        useApp(TestApp);

        expect(getModule(TestApp, TestModule).prototype).toBe(TestModule);
        expect(getModule(TestApp, TestModule2).prototype).toBe(TestModule2);
    });

    it("should register a plugin", () => {
        const register = jest.fn();

        class TestPlugin implements Plugin {
            public register = register;
        }

        @App({
            plugins: [new TestPlugin()],
        })
        class TestApp extends AbstractApp {}

        useApp(TestApp);

        expect(register).toBeCalled();
    });
});
