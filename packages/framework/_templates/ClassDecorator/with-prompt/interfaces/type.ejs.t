---
to: src/Interfaces/<%= h.changeCase.pascalCase(h.changeCase.param(name))  %>/<%= h.changeCase.pascalCase(name)  %>.type.ts
---

import { Type } from "../Type.interface";

export type <%= h.changeCase.pascalCase(h.changeCase.param(name)) %>Type = Type<any>;