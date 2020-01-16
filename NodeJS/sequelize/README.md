## Start

```
$ yarn add sequelize

$ yarn add sequelize-cli -D
```

## Migrations

- Para criar o esboço de uma migration:
  
  `$ yarn sequelize migration:create --name=create-users`

- Para rodar uma migration:
  
  `$ yarn sequelize db:migrate`

- Para voltar atrás na migration:
  - Desfaz a última migration que rodou
  	
    `$ yarn sequelize db:migrate:undo`
  
  - Desfaz todas as migrations rodadas
  	
    `$ yarn sequelize db:migrate:undo:all`
