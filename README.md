# Hospital Vitalis - Frontend Next.js e Typescript + Backend Spring Boot + Banco de Dados PostgreSQL via Docker Compose

Este projeto é uma aplicação web completa com frontend em Next.js e backend em Spring Boot. 

> **Importante:** Eu desenvolvi **apenas o backend e os consumos da API no front**. O resto do frontend foi desenvolvido e estilizado por outra pessoa e consome a API que criei.

## Sobre o Projeto

O backend foi construído com Spring Boot, utilizando Spring Security para autenticação e autorização, Flyway para migração do banco de dados e PostgreSQL como banco de dados, orquestrado via Docker Compose.

O front-end em Next.js consome a API REST fornecida pelo backend para exibir os dados e funcionalidades ao usuário.

## Tecnologias Utilizadas

- **Frontend:** Next.js e Typescript (não desenvolvido por mim) 
- **Backend:** Spring Boot, Spring Security, Flyway Migration
- **Banco de Dados:** PostgreSQL via Docker Compose
- **Containerização:** Docker / Docker Compose

## Funcionalidades do Backend

- API REST segura com autenticação e autorização.
- Migração automática do banco de dados com Flyway.
- Banco de dados PostgreSQL rodando em container Docker.
- Integração com front-end via API.

## Como Rodar o Projeto

### 1. Iniciar o banco de dados com Docker Compose

No diretório raiz do backend, execute:

```bash
docker-compose up -d
```

### 2. Rodar o backend (Spring Boot)

No diretório raíz do backend, execute:

```bash
./mvnw spring-boot:run
```

ou, se preferir, rode pelo seu IDE favorito.

### 3. Rodar o frontend (Next.js)

No diretório do frontend, execute: 

```bash
npm run dev
```

## Observação

Este repositório contém o código completo do projeto, mas apenas uma parte do frontend foi desenvolvida por mim. Minha contribuição principal foi o desenvolvimento do backend e os consumos da API no frontend.

## Contato

Para dúvidas ou sugestões, entre em contato: gustschott@gmail.com
