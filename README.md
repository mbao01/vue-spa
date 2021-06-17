# vue-spa

## Branches

Each branch focuses on a performance optimization technique
| Branch | Description |
|---|---|
| critical-css | focusses on extracting critical css for above the fold optimization |
| lazyloading | focuses on page/route, component and image lazy loading (Pay As You Go) |
| prerender | focuses on prerendering spa during build time. reduces first contentful paint time and makes web app visually ready |
| no-prerender | no optimization applied |
| third-party | focuses on tree-shaking third-party libraries (Pay For What You Use ) |
| gimbal | adds performance auditing to development process through webpack plugin |
| main | combines all optimization techniques in preceding branches |

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
