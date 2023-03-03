import { App, Module } from "../../../Decorators";
import { useApp } from "../../UseApp";
import { useModule } from "../UseModule";

describe("UseModule", () => {
    it("should return the module instance when the module had never been instantiated previously", () => {
        @Module()
        class TestModule {}

        @App({
            selector: "app-root",
            modules: [TestModule],
        })
        class TestApp {}

        useApp(TestApp);

        expect(useModule(TestApp, TestModule)).toBeInstanceOf(TestModule);
    });

    it("should return the same module instance that was previously created", () => {
        @Module()
        class TestModule {}

        @App({
            selector: "app-root",
            modules: [TestModule],
        })
        class TestApp {}

        useApp(TestApp);

        const module = useModule(TestApp, TestModule);
        module.test = "test";

        expect(module).toBeInstanceOf(TestModule);

        const module2 = useModule(TestApp, TestModule);
        expect(module2.test).toEqual(module.test);
    });
});
