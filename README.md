# product-widgets

**Architecture of feature modules:**

**ProductsContainer** -> controls loading of data to ProductWigdetsStore and creates basic layout of ProductCards
**ProductCard** -> displays individual product and includes ProductHeader and ProductSettings
**ProductSettings** -> controls modification of product mutable properties
**ProductHeader** -> displays readonly properties of product, styles controlled by selectedColor property

**Reusable Inputs and Core components:**

BaseTooltip, BaseLoader, InputCheckbox, InputColorpicker, InputToggle

**State management:**

**ProductWigdetsStore** -> products loading and state management for loaded products
**useProductWidgets** -> fetching of products from API

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
