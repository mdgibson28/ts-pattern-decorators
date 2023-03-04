---
to: src/Decorators/index.ts
inject: true
append: true
---
export * from './<%= h.changeCase.pascalCase(h.changeCase.param(name)) %>';