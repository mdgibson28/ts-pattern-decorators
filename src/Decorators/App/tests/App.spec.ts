import { useBootstrap } from "../../../Hooks";
import { AbstractApp } from "../../../Interfaces/App/App.abstract";
import {
    APPLICATION_TOKEN,
    INJECTABLE_TOKEN,
    INJECTION_TYPE_MODULE,
    INJECTION_TYPE_PROVIDER,
} from "../../../Constants";
import { Module, Provider } from "../../../Decorators";
import { App } from "../App";
import "reflect-metadata";

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

        const module =
            globalThis[appToken][INJECTION_TYPE_MODULE][TestModule];

        expect(module instanceof TestModule).toBe(true);
    });

    it("should allow dynamic module injection", () => {
        @Module()
        class TestModule {}

        @App({
            selector: "app-root",
            modules: [TestModule],
        })
        class TestApp extends AbstractApp {}
        
        @Module()
        class TestModule2 {}

        const app = new TestApp();
        app.module(TestModule2);

        useBootstrap(app);

        const testModuleToken = Reflect.getMetadata(
            INJECTABLE_TOKEN,
            TestModule
        );
        expect(testModuleToken).toBe(INJECTION_TYPE_MODULE);

        const testModule2Token = Reflect.getMetadata(
            INJECTABLE_TOKEN,
            TestModule2
        );
        expect(testModule2Token).toBe(INJECTION_TYPE_MODULE);

        const appToken = app.getToken();
        expect(appToken).toBe(APPLICATION_TOKEN + "TestApp");

        const module =
            globalThis[appToken][INJECTION_TYPE_MODULE][TestModule];
        const module2 =
            globalThis[appToken][INJECTION_TYPE_MODULE][TestModule2];

        expect(module instanceof TestModule).toBe(true);
        expect(module2 instanceof TestModule2).toBe(true);
    });

    it("should mount a module with a provider provider", () => {
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

        useBootstrap(new TestApp());

        const moduleToken = Reflect.getMetadata(INJECTABLE_TOKEN, TestModule);
        expect(moduleToken).toBe(INJECTION_TYPE_MODULE);

        const providerToken = Reflect.getMetadata(
            INJECTABLE_TOKEN,
            TestProvider
        );
        expect(providerToken).toBe(INJECTION_TYPE_PROVIDER);

        const module =
            globalThis[APPLICATION_TOKEN][INJECTION_TYPE_MODULE][TestModule];
        const provider = module[INJECTION_TYPE_PROVIDER][TestProvider];

        expect(module instanceof TestModule).toBe(true);
        expect(provider instanceof TestProvider).toBe(true);
    });
});
