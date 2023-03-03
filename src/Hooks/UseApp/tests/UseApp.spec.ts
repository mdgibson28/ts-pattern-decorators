import { APPLICATION_TOKEN } from "../../../Constants";
import { Module } from "../../../Decorators";
import { App } from "../../../Decorators/App/App";
import { getInjectableName } from "../../../Helpers/Metadata/GetMetadata";
import { useApp } from "../useApp";
import "reflect-metadata";

describe("useApp", () => {
    it("should mount an App", () => {
        @Module()
        class TestModule {}

        @App({ selector: "app-root", modules: [TestModule] })
        class TestApp {}

        useApp(TestApp);

        expect(globalThis[APPLICATION_TOKEN]).toBeInstanceOf(TestApp);
    });
});
