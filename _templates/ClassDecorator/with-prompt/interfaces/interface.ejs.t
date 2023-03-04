---
to: src/Interfaces/<%= h.changeCase.pascalCase(h.changeCase.param(name))  %>/<%= h.changeCase.pascalCase(name)  %>.ts
---

import { Type } from "../Type.interface";

export type <%= h.changeCase.pascalCase(h.changeCase.param(name)) %> = Type<any>;