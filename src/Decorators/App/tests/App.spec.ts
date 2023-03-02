import { useBootstrap } from "../../../Hooks";
import { AbstractApp } from "../../../Interfaces/App/App.abstract";
import {
    APPLICATION_MODULES,
    APPLICATION_TOKEN,
    INJECTABLE_NAME,
    INJECTABLE_TOKEN,
    INJECTION_TYPE_MODULE,
    INJECTION_TYPE_PROVIDER,
} from "../../../Constants";
import { Module, Provider } from "../../../Decorators";
import { App } from "../App";
import "reflect-metadata";
import { getInjectableName, getMetadata } from "../../../Helpers/Metadata/GetMetadata";

describe("App", () => {
    it("should mount an injected module", () => {
        @Module()
        class TestModule {}

        @App({
            selector: "app-root",
            modules: [TestModule],
        })
        class TestApp extends AbstractApp {}
        const app = new TestApp();

        useBootstrap(app);

        const moduleToken = Reflect.getMetadata(INJECTABLE_TOKEN, TestModule);
        expect(moduleToken).toBe(INJECTION_TYPE_MODULE);

        const appToken = app.getToken();
        expect(appToken).toBe(APPLICATION_TOKEN + "TestApp");

        const modules = getMetadata(APPLICATION_MODULES, TestApp);
        
        expect(modules[getInjectableName(TestModule)]).toBe(TestModule);
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
        class TestApp extends AbstractApp {}
        const app = new TestApp();

        useBootstrap(app);

        const moduleToken = Reflect.getMetadata(INJECTABLE_TOKEN, TestModule);
        expect(moduleToken).toBe(INJECTION_TYPE_MODULE);

        const appToken = app.getToken();
        expect(appToken).toBe(APPLICATION_TOKEN + "TestApp");

        const module1 = globalThis[appToken][INJECTION_TYPE_MODULE][TestModule];
        const module2 = globalThis[appToken][INJECTION_TYPE_MODULE][TestModule2];

        expect(module1 instanceof TestModule).toBe(true);
        expect(module2 instanceof TestModule2).toBe(true);
    });

    it("should mount a module with a provider", () => {
        @Provider()
        class TestProvider {}

        @Module({
            providers: [TestProvider],
        })
        class TestModule {}

        @App({
            selector: "app-root",
            modules: [TestModule],
        })
        class TestApp extends AbstractApp {}
        const app = new TestApp();

        useBootstrap(app);

        const moduleToken = Reflect.getMetadata(INJECTABLE_TOKEN, TestModule);
        expect(moduleToken).toBe(INJECTION_TYPE_MODULE);

        const providerToken = Reflect.getMetadata(
            INJECTABLE_TOKEN,
            TestProvider
        );
        expect(providerToken).toBe(INJECTION_TYPE_PROVIDER);

        const module =
            globalThis[app.getToken()][INJECTION_TYPE_MODULE][TestModule];
        const provider = module[INJECTION_TYPE_PROVIDER][TestProvider];

        expect(module instanceof TestModule).toBe(true);
        expect(provider instanceof TestProvider).toBe(true);
    });

    it("should mount a module with two providers", () => {
        @Provider()
        class TestProvider {}

        @Provider()
        class TestProvider2 {}

        @Module({
            providers: [TestProvider, TestProvider2],
        })
        class TestModule {}

        @App({
            selector: "app-root",
            modules: [TestModule],
        })
        class TestApp extends AbstractApp {}
        const app = new TestApp();

        useBootstrap(app);

        const moduleToken = Reflect.getMetadata(INJECTABLE_TOKEN, TestModule);
        expect(moduleToken).toBe(INJECTION_TYPE_MODULE);

        const providerToken = Reflect.getMetadata(
            INJECTABLE_TOKEN,
            TestProvider
        );
        expect(providerToken).toBe(INJECTION_TYPE_PROVIDER);

        const module =
            globalThis[app.getToken()][INJECTION_TYPE_MODULE][TestModule];
        const provider1 = module[INJECTION_TYPE_PROVIDER][TestProvider];
        const provider2 = module[INJECTION_TYPE_PROVIDER][TestProvider2];

        expect(module instanceof TestModule).toBe(true);
        expect(provider1 instanceof TestProvider).toBe(true);
        expect(provider2 instanceof TestProvider2).toBe(true);
    });
});
