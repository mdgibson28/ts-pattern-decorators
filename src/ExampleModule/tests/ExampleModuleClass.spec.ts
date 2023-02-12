import { ExampleModuleClass } from "../ExampleModuleClass";

describe("Module1", () => {

    it("should have a name", () => {
        let module1 = new ExampleModuleClass();
        expect(module1.name).toBeNull();
    });

});