`$ yarn add sequelize`

`$ yarn add sequelize-cli -D`

- Para criar o esboço de uma migration:
  `$ yarn sequelize migration:create --name=create-users`

- Para rodar uma migration:
  `$ yarn sequelize db:migrate`

- Para voltar atrás na migration:
  - Desfaz a última vez que rodou
  	`$ yarn sequelize db:migrate:undo`
  - Desfaz a todas que já rodou
  	`$ yarn sequelize db:migrate:undo:all`
