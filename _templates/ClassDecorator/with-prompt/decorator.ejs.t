---
to: src/Decorators/<%= h.changeCase.pascalCase(h.changeCase.param(name))  %>/<%= h.changeCase.pascalCase(name)  %>.ts
---

export function <%= h.changeCase.pascalCase(name) %>(): ClassDecorator {
    return (prototype) => {
        return prototype;
    };
}