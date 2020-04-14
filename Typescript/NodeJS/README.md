### iniciar projeto

`$ yarn init -y`

### express

```
$ yarn add express

$ yarn add typescript -D

$ yarn tsc --init (gera o tsconfig.json)
```

- tsconfig.json:

```
"outDir": "./dist", (criar esse diretório)
"rootDir": "./src",
```

- para declaração de tipos:

`$ yarn add @types/"nome da lib" -D`

### ts-node-dev

`$ yarn add ts-node-dev -D`

- apagar dist, se tiver sido criado

- package.json:

```
"scripts": {
  "build": "tsc",
  "dev:server": "ts-node-dev src/server.ts",
},
```

- obs.:

"dev:server": "ts-node-dev --transpileOnly src/server.ts" (roda sem checagem do código)

"dev:server": "ts-node-dev --ignore-watch node_modules src/server.ts"

`$ yarn dev:server`
