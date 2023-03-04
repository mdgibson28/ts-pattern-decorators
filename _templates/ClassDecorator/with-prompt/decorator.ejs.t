---
to: src/Decorators/<%= h.changeCase.pascalCase(h.changeCase.param(name)) %>/<%= h.changeCase.pascalCase(name) %>.ts
---
import { <%= h.changeCase.pascalCase(name) %>Dependencies } from "../../Interfaces/<%= h.changeCase.pascalCase(h.changeCase.param(name)) %>/<%= h.changeCase.pascalCase(name) %>Dependencies.interface";

export function <%= h.changeCase.pascalCase(name) %>(dependencies:<%= h.changeCase.pascalCase(name) %>Dependencies = {}): ClassDecorator {
    return (prototype) => {
        return prototype;
    };
}