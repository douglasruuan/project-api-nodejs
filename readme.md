# Projeto Criação de API em NODE.JS
## Projeto CRUD

**Foi utilizado as seguintes tecnlogias no projeto.**

- [x] **Node.JS.**
- [x] **JavaScript.**
- [x] **Express.**
- [x] **MongoDB.**
- [x] **Insomnia**
### Resumo de tudo que foi feito no Curso de Node.

## O que é Api.Rest e NodeJS?

Basicamente o **Node.js** e uma plataforma que utiliza a V8 que e a engine, de entendimento de JavaScript do GoogleChrome, engine do Browser ao lado do **Back-End**, pra tratarmos requisições e respostas ao lado do servidor, bancos de dados..

Conceito **Api.Rest**:

**FULLMVC**: Quando você cria a sua parte visual junto ao seu **BACK-END**, quando o servidor e o **Front-End** estão unidos, ou seja, não estão separados.

**Api.Rest:** Quando você separa o **Front-End** do **Back-End**, então você tem o **Back-End** que você manipula as informações do Banco de Dados receber requisições e enviar respostas.

**Front-End** separado construindo com alguma linguagem com alguma biblioteca muito conhecida **Front-End** como: React, View, ReactNative e Angular e diversas outras.

**Quais Benefícios de usarmos uma Api.Rest?**

Uma **APIrest** oferece para gente mais flexibilidade no nosso **Front-End.**

A gente consegue tratar os dados de uma maneira mais fácil, aumenta um pouco a complexidade do projeto, mas tornando um resultado final muito melhor, além disto conseguimos trabalhar com uma única API com diferentes plataformas, conseguimos ter um único **Back-End** construindo com **Node.JS** servindo informações, para uma aplicação Mobile, construindo com qualquer Linguagem, e também servindo aplicações WEB.

Então podemos utilizar o **Node.JS** fornecendo uma única informação de **Back-End** oferecendo para diversos **Front-Ends** ao mesmo tempo.


## Instalando Depedências.
Após criar uma pasta, e instalar o **Node.JS**, dentro do Prompt/CMD ir até a pasta e utilizar.

**npm init -y**

Este comando cria um **package.json**, ele tem algumas instruções sobre nossa aplicação, este package.json serve para uma principal funcionalidade na aplicação ele vai guardar a informação de versão das dependências do projeto, vamos supor que usaremos outras dependências o **package.json** guarda todas elas.

**npm install express**

Express e um micro-framework ele vai nos ajudar a cuidar de rotas e views, as rotas são os endereços das URL.

E as views são as visualizações.

**npm install -D nodemon**

Dependência usada para reiniciar o sistema sempre que houver uma modificação automaticamente.

Após a instalação do **nodemon**, criar uma nova tag dentro do **package.json** na parte de scripts.

    "scripts": {
    
    "test":  "echo \"Error: no test specified\" && exit 1",
    
    "dev":  "nodemon server.js"
    
    },

Após a criação do script rodar no prompt/cmd “npm run dev“.

**npm run** serve para rodar os scripts de dentro do **package.json**.





























### Projeto Criado Junto ao Curso RocketSeat.
[RocketSeat](https://app.rocketseat.com.br/starter/)

### Douglas Coelho.
[GitHub Repositories](https://github.com/douglasruuan?tab=repositories)
