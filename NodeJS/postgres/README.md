# Postgres

### Start

- Para criar um container com a imagem do postgres:11 (sem as aspas)
	
	`$ docker run --name 'nome da database' -e POSTGRES_PASSWORD='senha' -p 5432:5432 -d postgres:11`

- Para acessar o postgres pelo terminal:
	
	`$ docker exec -it 'nome do container' psql -U postgres`

- Para adicionar o postgres ao projeto:
	
	`$ yarn add pg pg-hstore`
