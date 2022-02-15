# Live Code JavaScript

Código fonte do live code realizado na [Twitch](https://www.twitch.tv/rinha_de_devs)

Você encontra o conteúdo também no **Youtube**:

- [Live do dia 18/11](https://www.youtube.com/watch?v=UnMi4sbMd3A)
- [Live do dia 25/11](https://www.youtube.com/watch?v=ra6YJKHnMY8)
- [Live do dia 02/12](https://www.youtube.com/watch?v=gGMDHColjD4)
- [Live do dia 11/01](https://www.youtube.com/watch?v=63ii34yg2Pg)
- [Live do dia 18/01](https://www.youtube.com/watch?v=zBrzVk_tlrc)

Tópicos abordados:

- História do JS
- Criação de variáveis
- Diferença entre **var**, **let** e **const**
- Escopo
- Funções
- Objetos
- Hoisting
- Currying
- Closure
- Callback
- Promise
- NodeJS e criação de um server sem usar nenhum framework
- Adoção de padrão arquitetural Hexagonal
- Implementado **CRUD**
- Adicionado framework http Fastify
- Adicionado banco CassandraDB
- Implementação de Testes Unitários


## Objetivo

Projeto de estudo exemplificando a utilização das seguintes tecnologias:

- JavaScript
- NodeJS v16
- Fastify
- CassandraDB
- Docker-Compose (Para desenvolvimento)

## Propósito

Disponibilizar um serviço de backend que faça a gestão dos dados de cervejas.
Em outras palavras, criar uma **API Rest** para **CRUD** de cervejas.

## Instalando dependências

Esse projeto utiliza **npm** para instalar as dependências basta rodar o comando:

```bash
npm install
```

## Rodando a aplicação

Para rodar a aplicação:

```bash
npm run dev
```

### Rodar em desenvolvimento

Essa aplicação utiliza **docker-compose** para provisionar a infraestrutura:

```bash
docker-compose up -d
npm run dev
```

## Rodando testes

Para rodar os testes:

```bash
npm test
```