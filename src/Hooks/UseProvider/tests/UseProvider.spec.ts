import { App, Module, Provider } from "../../../Decorators";
import { useApp } from "../../UseApp";
import { useProvider } from "../UseProvider";

describe("UseProvider", () => {
    it("should return the provider instance when the provider had never been instantiated previously", () => {
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
        class TestApp {}

        useApp(TestApp);

        expect(useProvider(TestProvider)).toBeInstanceOf(TestProvider);
    });

    it("should return the same provider instance that was previously created", () => {
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
        class TestApp {}

        useApp(TestApp);

        const provider = useProvider(TestProvider);

        expect(provider).toBeInstanceOf(TestProvider);

        const provider2 = useProvider(TestModule);
        expect(provider).toEqual(provider2);
    });

    it("should return the instance of a requested provider when the provider is lower in the tree than the entry point", () => {
        @Provider()
        class TestProvider {}

        @Module({
            providers: [TestProvider],
        })
        class TestSubModule {}

        @Module({
            modules: [TestSubModule],
        })
        class TestModule {}

        @App({
            selector: "app-root",
            modules: [TestModule],
        })
        class TestApp {}

        useApp(TestApp);

        expect(useProvider(TestProvider)).toBeInstanceOf(TestProvider);
    });
});
