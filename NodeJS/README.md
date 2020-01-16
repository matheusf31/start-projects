# Começo básico de um projeto backend

---

### Início:

```
		$ yarn init -y	
		$ yarn add express
```

---
	
### Para utilizar sintaxe import/export dentro do node:
		babel / babelnode / >sucrase<
		$ yarn add sucrase -D
		$ yarn sucrase-node 'local arquivo' (para rodar server)

---
	
### Para deixar o server rodando:
		$ yarn add nodemon -D
		package.json: 
			"scripts": {
    				"dev": "nodemon src/server.js"
  			},
  		
---
			
### Para deixar rodando com o sucrase:
		criar nodemon.json:
			{
				"execMap": {
					"js": "node -r sucrase/register"
				}
			}
		
		$ yarn dev

---
			
### Para debuggar:
		no arquivo package.json:
			"scripts": {
	  		...
	  		"dev:debug": "nodemon --inspect src/server.js"
			}

		
		$ yarn dev:debug
		
		no vscode:
			debug > nova config > editar:
				"request": "attach", 
				tirar o program e colocar:
					"protocol": "inspector", 
					"restart": true

---
	
### Configurar Eslint, Editorconfig e Prettier:
		$ yarn add eslint -D
		$ yarn eslint --init
			1) Check syntax, find problems, enforce code style
			2) JS
			3) Nenhum
			4) Node
			5) .. airbnb
			6) JS
			
			remover package-lock
			$ yarn
				
		$ yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
			
			eslintrc.js:
					module.exports = {
						env: {
							es6: true,
							node: true
						},
						extends: ["airbnb-base", "prettier"],
						plugins: ["prettier"],
						globals: {
							Atomics: "readonly",
							SharedArrayBuffer: "readonly"
						},
						parserOptions: {
							ecmaVersion: 2018,
							sourceType: "module"
						},
						rules: {
							"prettier/prettier": "error",
							"class-methods-use-this": "off",
							"no-param-reassign": "off",
							camelcase: "off",
							"no-unused-vars": ["error", { argsIgnorePattern: "next" }]
						}
					};
			
			criar .prettierrc.js
				{
					"singleQuote": true,
					"trailingComma": "es5"
				}

			para aplicar em todos os arquivos:
				$ yarn eslint --fix src --ext .js
	
			.editorconfig:
				root = true

				[*]
				indent_style = space
				indent_size = 2
				charset = utf-8
				trim_trailing_whitespace = true
				insert_final_newline = true

---

### Estrutura de pastas:

```
src: 
	- app.js 	(criar a classe app para conter os middlewares, rotas, etc)
	- server.js  	(atribuir uma porta ao server)
	- routes.js  	(criar as rotas do server)

app:			(maioria do código de regra de negócio, lógica ou qualquer outro)
	- controllers:
	- models:
	- middlewares

config:	      		(configurações da aplicação)
	- database.js	(config da base de dados / credenciais para acessar o banco)

database:     		(tudo relativo a parte de database fora a config de conexão)
	- migrations:
```

---

### Alguns conceitos básicos
	
  - CRUD: create, read, update, delete
  
  - Sucrase: para utilizarmos a sintaxe import/export
  
  - Nodemon: para manter o servidor em execução
  
  - Docker: para criação de ambientes isolados (imagem + container + docker registry + dockerfile)
  
  - ORM: abstração do banco de dados (mudar a forma como ele funciona), onde tabelas viram models. Utilizamos JS para manipulação de dados, e não o SQL na maioria das vezes
  	
	- Migrations: controle de versão para o banco de dados, cada arquivo contém instruções para criação, alteração ou remoção de tabelas ou colunas. NÃO PODEM SER EDITADAS APÓS SER ENVIADA A OUTROS DEVS/PRODUÇÃO
	
	- Seeds: popular base de dados para desenvolvimento/testes (executáveis apenas por código e não são usados em produção)
	
  - MVC: models, view, controller (estruturar pastas e arquivos)
  	
	- Model: Armazena abstração do banco, manipular dados nas tabelas
  	
	- Controller: Cuida das regras de negócio. Ponto de entrada das requisições. Feito com classes. Sempre retorna um JSON. Não chama outros controllers/método. Controller contém: 5 métodos, criar, listar 1, listar todos, deletar, atualizar. Nova entindade > novo controler.
  	
	- View: Retorno ao cliente/usuário/navegador (pode ser o json para o reactJS)
