import { Module } from "../Module";
import { Injectable } from "../../Injectable";
import "reflect-metadata";

describe("Module", () => {
    it("should define metadata", () => {
        @Module({
            providers: [],
        })
        class TestModule {}

        const metadata = Reflect.getMetadata("providers", TestModule);
        expect(metadata).toEqual([]);
    });

    it("should define metadata with providers", () => {
        @Injectable()
        class TestService {}

        @Module({
            providers: [TestService],
        })
        class TestModule {}

        const metadata = Reflect.getMetadata("providers", TestModule);
        expect(metadata).toEqual([TestService]);
    });
});
