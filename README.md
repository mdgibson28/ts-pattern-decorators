# Typescript Project Boilerplate

A start project for building libraries in Typescript.

- Bundles with Rollup
- Lint with EsLint
- Unit testing with Jest
- Documentation generation with Typedoc


## Install dependencies

```node
npm i
```

## Packaging and Publishing

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

## Code Quality

```node
npm run test                // run code formatting and tests
```

```node
npm run test:lint           // run eslint
```

```node
npm run test:unit           // run unit tests
```