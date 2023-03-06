---
to: src/Decorators/<%= h.changeCase.pascalCase(h.changeCase.param(name)) %>/tests/<%= h.changeCase.pascalCase(name) %>.spec.ts
---
import { <%= h.changeCase.pascalCase(name) %> } from '..';

describe('<%= h.changeCase.pascalCase(name) %>', () => {
    it("should be defined", () => {
        expect(<%= h.changeCase.pascalCase(name) %>).toBeDefined();
    });
});
