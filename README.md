# USARP Tool API

### 👨‍💻️ Tecnologias

- JavaScript
- Node.js
- Express
- MariaDB
- Sequelize
- JWT
- Docker

## Authentication Endpoints

| Route        | HTTP Verb | Request Body                                                                                    | Description      |
| ------------ | --------- | ----------------------------------------------------------------------------------------------- | ---------------- |
| /auth/signup | `POST`    | {"fullname": "John Doe", "email": "john.doe@example.com", "password": "123456","gender": 1,"birthdate":"2024-03-05","profile":"aluna","organization":"UFC" } | Create new user. |
| /auth/signin | `POST`    | {"email": "john.doe@example.com", "password": "123456"}                                         | Login endpoint.  |

## Baixar o projeto

```bash
  # Clonar o repositório
  ❯ git clone https://github.com/DAUUX/usarp-tool-api.git

  # Entrar no diretório
  ❯ cd usarp-tool-api
```

## Setup do projeto

**Utilizando npm, acesse a pastar do projeto e instale as dependências**

```bash
  # Instalar as dependências
  ❯ npm install
```

**Renomeie o arquivo .env.example para apenas .env**
**Examplo dos valores para o arquivo .env**

| Variável       | Descrição                    | valor padrão  |
| -------------- | ---------------------------- | ------------- |
| JWT_SECRET_KEY | Secret keyword for jwt token | `example-key` |
| DB_HOST        | Database connection host     | `localhost`   |
| DB_PORT        | Database port                | `3306`        |
| DB_NAME        | Database name                | `usarptool`   |
| DB_USERNAME    | Database username            | `mariadb`     |
| DB_PASSWORD    | Database password            | `mariadb`     |

## Banco de dados

**Com os valores do arquivo .env preenchidos executes os comandos abaixos**

Para criar o container docker do banco de dados.

```bash
  # Criar o container
  ❯ docker-compose up --build -d
```

Execute as migrações para criar as tabelas do banco de dados.

```bash
  ❯ npx sequelize db:migrate
```
Execute o script de modo desenvolvimento.

```bash
  ❯ npm run dev
```
