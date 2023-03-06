import { Module, Provider } from "../../../Decorators";
import { findProvider } from "../FindProvider";

describe("FindProvider", () => {
    @Provider()
    class TestProvider {}

    @Provider()
    class TestProvider2 {}

    @Provider()
    class TestProvider3 {}

    @Module({
        providers: [TestProvider3],
    })
    class TestModule2 {}


    @Module({
        modules: [TestModule2],
        providers: [TestProvider, TestProvider2],
    })
    class TestModule {}


    it("should find a provider in a module", () => {
        const provider = findProvider(TestModule, "TestProvider");
        expect(provider).toBeDefined();
        expect(provider instanceof TestProvider).toBe(true);
    });

    it("should find a provider in a sub-module", () => {
        const provider = findProvider(TestModule, "TestProvider2");
        expect(provider).toBeDefined();
        expect(provider instanceof TestProvider2).toBe(true);
    });

    it("should find a provider in a sub-sub-module", () => {
        const provider = findProvider(TestModule, "TestProvider3");
        expect(provider).toBeDefined();
        expect(provider instanceof TestProvider3).toBe(true);
    });

    it("should return undefined if provider is not found", () => {
        const provider = findProvider(TestModule, "TestProvider4");
        expect(provider).toBeUndefined();
    });
}
);