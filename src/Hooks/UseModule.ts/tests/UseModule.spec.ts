import { App, Module } from "../../../Decorators";
import { useApp } from "../../UseApp";
import { useModule } from "../UseModule";

describe("UseModule", () => {
    it("should return the module instance when the module had never been instantiated previously", () => {
        @Module()
        class TestModule {}

        @App({
            modules: [TestModule],
        })
        class TestApp {}

        useApp(TestApp);

        expect(useModule(TestModule)).toBeInstanceOf(TestModule);
    });

    it("should return the same module instance that was previously created", () => {
        @Module()
        class TestModule {}

        @App({
            modules: [TestModule],
        })
        class TestApp {}

        useApp(TestApp);

        const module = useModule(TestModule);
        module.test = "test";

        expect(module).toBeInstanceOf(TestModule);

        const module2 = useModule(TestModule);
        expect(module2.test).toEqual(module.test);
    });

    it("should return the instance of a requested module when the module is lower in the tree than the entry point", () => {
        @Module()
        class TestSubModule {}

        @Module({
            modules: [TestSubModule],
        })
        class TestModule {}

        @App({
            modules: [TestModule],
        })
        class TestApp {}

        useApp(TestApp);

        expect(useModule(TestSubModule)).toBeInstanceOf(TestSubModule);
    });
});
