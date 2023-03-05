---
to: src/Interfaces/<%= h.changeCase.pascalCase(h.changeCase.param(name))  %>/<%= h.changeCase.pascalCase(name)  %>.abstract.ts
---

import { Type } from "../Type.interface";

export interface <%= h.changeCase.pascalCase(h.changeCase.param(name)) %> = Type<any>;