import { useApp } from "../../../Hooks";
import { Module, Presenter, Provider, Route } from "../../../Decorators";
import { App } from "../App";
import "reflect-metadata";
import { getModule, getProvider, getRoute } from "../../../Helpers/Metadata/GetMetadata";
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

    it("should mount an injected provider", () => {
        @Provider()
        class TestProvider {}

        @App({
            providers: [TestProvider],
        })
        class TestApp extends AbstractApp {}

        useApp(TestApp);

        expect(getProvider(TestApp, TestProvider).prototype).toBe(TestProvider);
    });

    it("should mount an injected route", () => {
        @Presenter()
        class TestPresenter {}

        @Route({
            presenter: TestPresenter
        })
        class TestRoute {}

        @App({
            providers: [TestRoute],
        })
        class TestApp extends AbstractApp {}

        useApp(TestApp);

        expect(getRoute(TestApp, TestRoute).prototype).toBe(TestRoute);
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
