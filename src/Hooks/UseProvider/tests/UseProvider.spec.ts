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

    it("should return a provider on a sub module", () => {
        @Provider()
        class TestProvider {}

        @Provider()
        class TestProvider2 {}

        @Module({
            providers: [TestProvider2],
        })
        class TestSubModule {}

        @Module({
            providers: [TestProvider],
            modules: [TestSubModule],
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

        const provider2 = useProvider(TestProvider2);
        expect(provider).toEqual(provider2);
    });
});
