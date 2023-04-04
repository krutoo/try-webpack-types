# Trying to use webpack with typescript

This repository shows typescript error:

```
src/index.ts:7:14 - error TS4023: Exported variable 'factories' has or is using name 'Output' from external module "/Users/user/Projects/try-webpack-types/node_modules/webpack/types" but cannot be named.
```

## How to reproduce?

Just try to build project with declarations

```bash
npm run build
```
