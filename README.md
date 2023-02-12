# Typescript Project Boilerplate

A start project for building libraries in Typescript.

- Bundles with Rollup
- Lint with EsLint
- Unit testing with Jest
- Documentation generation with Typedoc


## Install

```node
npm i -D mdgibson28/ts-pattern-decorators
```

## Decorators

### @JsonBuilder

Enables building of class properties from json. When using the JsonBuilder decorator, setting the value from a json object will build an instance of the provided class and map properties from the json value to the new class instance.

The decorator detects if it should build an array of instances or single instanced by checking if the value passes was an array.

The decorator uses Object.assign() to map json properties to the class instance.

```typescript
class MyClass {
    public name:string;
    public age:number;
}

class MyTestClass {
    @JsonBuilder(MyClass) 
    public myProperty:MyClass;
}

class MyTestClassWithArray {
    @JsonBuilder(MyClass) 
    public myProperty:MyClass[];
}
```

## Develop

### Packaging and Publishing

```node
npm run build               // rebuild dist
```

```node
npm run publish:patch       // publish a new patch version
```

```node
npm run publish:minor       // publish a new minor version
```

```node
npm run publish:major       // publish a new major version
```

### Code Quality

```node
npm run test                // run code formatting and tests
```

```node
npm run test:lint           // run eslint
```

```node
npm run test:unit           // run unit tests
```