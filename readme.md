
# Projeto Criação de API em NODE.JS

## Projeto CRUD  

**Foi utilizado as seguintes tecnlogias no projeto.**  

- [x]  **Node.JS.**
- [x]  **JavaScript.**
- [x]  **Express.**
- [x]  **MongoDB.**
- [x]  **Insomnia**

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

  

    npm init -y

  

Este comando cria um **package.json**, ele tem algumas instruções sobre nossa aplicação, este package.json serve para uma principal funcionalidade na aplicação ele vai guardar a informação de versão das dependências do projeto, vamos supor que usaremos outras dependências o **package.json** guarda todas elas.

  

    npm install express

  

Express e um micro-framework ele vai nos ajudar a cuidar de rotas e views, as rotas são os endereços das URL.

  

E as views são as visualizações.

  

    npm install -D nodemon

  

Dependência usada para reiniciar o sistema sempre que houver uma modificação automaticamente.

  

Após a instalação do **nodemon**, criar uma nova tag dentro do **package.json** na parte de scripts.

  

    "scripts": {
    
    "test": "echo \"Error: no test specified\" && exit 1",
    
    "dev": "nodemon server.js"
    
    },

  

Após a criação do script rodar no prompt/cmd “npm run dev“.

  

**npm run** serve para rodar os scripts de dentro do **package.json**.

 ## MongoDB.

### O que é o MongoDB?

Instalando MongoDB dentro do Prompt após a instalação do Docker.

`docker pull mongo`

Dentro da pasta do nosso projeto, executar o comando e aguardar o mongoDB ser instalado.

Instalando o Docker e o que o Docker?

Docker e um software que permite a gente fazer a **Conteinerização** de recursos de softwares ou de qualquer tipo de aplicação da nossa máquina.

**Conceito de Conteinerização:**

Quando você instala diversos softwares ou atualizações e ele evita conflitos entre eles, como mongo, mysql entre outros...Por isso usamos o Docker porque e feito em as instalações em “**containers**” máquinas virtuais, se algum momento precisar deletar ou mexer em algo no nosso sistema, então a gente sobe uma máquina virtual com a instalação do MongoDB, utilizando o SO Linux.

Iniciando uma máquina virtual com o **Docker + MongoDB**.

    docker run –name (primeiro parâmetro, de como quero chamar essa maquina)

 - -p27017:27017 (basicamente como o mongo vai estar rodando em outro sistema a parte fazendo o redirecionamento de portas, então o mongodb  utiliza a porta 27017 da nossa máquina ele redireciona a porta do mongodb que está instalado dentro desse container).
 - -d (qual imagem queremos usar que e o mongo).

Após inicializar a máquina virtual utilizar **docker ps** para mostrar quais imagens/máquinas estão rodando.

E agora como faço para ver se o MongoDB está mesmo funcionando?

Primeiramente teremos que instalar [Robo3T](https://robomongo.org/) , após a instalação e executar o programa, dar um **create** no nome, e usar um nome de seu gosto para projeto, usarei “**docker**” como exemplo e passar a porta que **criamos** no prompt, e pronto estamos conectados ao **MongoDB**.

Sempre que reiniciar o computador, a imagem irá parar de funcionar, **não** precisamos executar o docker run para executa-la novamente. Podemos ver as imagens que não estão rodando e sim estão pausadas utilizando `docker ps -a` assim mostrando todas que estão executando ou pausada.

Para executar uma imagem pausada usamos `docker start (nome da maquina utilizado em names).`

## Fazendo a nossa conexão do projeto junto ao MongoDB

Primeiramente dentro do nosso projeto junto com Prompt/CMD, instalaremos uma nova dependência.

    npm install mongoose

Mongoose e uma ORM de banco não relacional com MongoDB,

ORM: Basicamente encapsula a lógica das operações do banco de dados atráves do código invés da gente usar “querys” a linguagem de banco de dados, vamos supor que estivermos numa base de SQL, invés de fazer “**insert into table**” a gente vai só utilizar código **JavaScript** para fazer Insert, Deletes, Updates e tudo mais.

O ORM ira fazer um **Object Relational Mapping** que é a relação de transformar as nossas tabelas em objetos em **JavaScript.**

Depois de fazer a instalação do **mongoose** iremos alterar no **server.js**

    const  mongoose  =  require('mongoose'); //Importando o mongoose

Iniciando o DataBase/Banco de Dados.

    mongoose.connect('mongodb://localhost:27017/projeto-nodejs-rocketseat', {
    
    useNewUrlParser:  true,
    
    useUnifiedTopology:  true
    
    });

Primeiro parâmetro passaremos a URL de Conexão com o MongoDB.

Padrão começamos com `mongodb://.`

Se você tiver usuário e password `//user@passw.`

:Porta que utilizamos e / nome da database que vamos utilizar (SCHEMA).

Depois passaremos um Objeto como parametro como uma única informação.

    {useNewUrlParser: true}.

Se você estiver dando erro e o mongoose retornar algum erro e só retirar o `{useNewUrlParser: true}`.

Tive que utilizar `useUnifiedTopology: true` para a versão mais recente do mongoose e esta rodando normalmente.

  

Dando Continuidade iremos criar nosso primeiro **Model.**

**Model:** Dentro do modelo **MVC** ele representa uma tabela do banco de dados ou uma estrutura de dados que a gente vai gravar dentro do Banco de dados.

Iremos criar um Model de Produto.

Para começar iremos criar uma pasta dentro do nosso projeto chamada **SRC,** dentro da pasta SRC iremos criar uma pasta chamada **MODELS** e dentro iremos crirar um arquivo **Product.js.**

Dentro desse Product, iremos criar um SCHEMA, bom o que é SCHEMA?

Basicamente o **SCHEMA** são os campos de um Produto deve ter e que tipos de valores esses campos vão salvar, ficara assim nossa **Product.JS** que está a página ao lado.

Após feito o product iremos ter que fazer um **Required** ou requerimento da tabela dentro da **server.js**

    require('./src/models/Product');

Requiremento da Tabela Product, dentro do banco de dados.

Quando estivermos trabalhando com muitos **models** ao mesmo tempo temos uma biblioteca que podemos utiizar para ela faz o papel do **require** em todos os arquivos automaticamente, pra gente não precisar fazer um **require** a cada models que vamos utilizar.

    npm install require-dir //Dentro do prompt

    const  requireDir  =  require('require-dir');    
    //Importando a biblioteca de require    
    requireDir('./src/models');

Requerimento dos models, Utilizando a biblioteca para fazer o **require** de todos os models da pasta models.
Dentro desta variável vamos passar um objeto.
Quais vão ser os campos que vão ser salvo dentro do banco de dados.    
Cada produto tem que ter um Titulo do Tipo Texto, e ele é obrigatorio dele tem quer verdade.    
Mesma coisa para Description que é a descrição.    
Url que é o link que vamos dar para nosso produto.    
E por ultimo a colununa CreatedAt que vai ser preenchida automaticamente    
Ela vai salvar a data e preenchida sozinha com o valor da data-atual do banco de dados, criada do produto.

    const  mongoose  =  require('mongoose'); //Importando o Mongoose
    
    const  ProductSchema  =  **new**  _mongoose_.Schema({
    title: {    
    type:  String,    
    required:  true,    
    },    
    description: {    
    type:  String,    
    required:  true,    
    },    
    url: {    
    type:  String,    
    required:  true,    
    },    
    createdAt: {    
    type:  Date,    
    default:  _Date_.now,    
    },    
    });    
    mongoose.model('Product', ProductSchema);

Isso aqui para registrar um modelo na nossa aplicação. 

## Separando os Arquivos de Dentro do Projeto.

Dentro da pasta **SRC,** criar um arquivo chamado **routes.js** para separar as rotas,

Após retirar a rota do **server.js** e colocar dentro do **routes.js** iremos exportar a variável **routes**, criada para importar dentro do **server.js.**

Após separar a rota para **routes** iremos separar a lógica da **routes** para outro arquivo.

Dentro da pasta **SRC** iremos criar outra pasta chamada **controller** e dentro desta pasta iremos criar outro arquivo chamado **ProductController.js**.

ProductController será o arquivo que lidar com as operações que a gente vai ter dentro dos **models.**

**Routes** ficará assim:

    const  express  =  require("express"); //Importando O Express.    
    const  routes  =  express.Router(); //Variavel para as rotas do express.    
    const  ProductController  =  require('./controllers/ProductController'); 
       
    //Importando nosso ProductController e chamamos o método index.    
    
    routes.get("/products", ProductController.index);    
    _module_._exports_  =  routes;

Exportando o Routes para usarmos dentro do Server.JS 

E o **ProductController**:

    const  mongoose  =  require("mongoose"); // Importando o mongoose  
      
    //Para lidarmos com a parte de Banco de Dados.    
    const  Product  =  mongoose.model('Product');
    
    //Importa nosso model de product    
    //Exportando alguns objetos com algumas funções.
    
    _module_._exports_  = {    
    async  index(_req_, _res_) {    
    const  products  =  await  Product.find();    
    return  _res_.json(products);    
    },    
    };

## Instalando e Usando Insominia.rest

Quando estamos listando dados, podemos acessar nossa API diretamente pelo navegador, pelo lado do cliente. Mas, se precisarmos testar a criação de um novo registro por meio do método POST ou a exclusão de um dado por meio do método DELETE, podemos notar algumas dificuldades. Como podemos fazer esses testes?
Você já criou uma tag HTML de formulário para testar o envio de dados para um servidor? Isso pode ser bem cansativo e não muito produtivo, não é mesmo? Para resolver essas questões, temos à nossa disposição ferramentas que nos ajudam nos testes de APIs REST. Uma dessas ferramenta é o Insomnia.

Após a instalação do Insomnia Clicar no (+) e por NewRequest botar o nome que você for fazer o `“get,post ...”` eu usei Index após la em cima passar a URL podendo também criar uma base_url em **Environment** ficando assim:

    { "base_url": [http://localhost:3001/api](http://localhost:3001/api)"}

Voltando na página principal apenas digitar `base_url/products.`

## ProductController.JS – Routes.JS

Modificando o **ProductController** e o **Routes**:
Routes com Delete,Update e post...

    const  express  =  require("express"); //Importando O Express.    
    const  routes  =  express.Router(); //Variavel para as rotas do express.   
     
    const  ProductController  =  require('./controllers/ProductController');    
    //Importando nosso ProductController e chamamos o método index.
    
    routes.get("/products", ProductController.index); //Criando um get.    
    routes.get("/products/:id", ProductController.show); //Get por ID    
    routes.post("/products", ProductController.store) //Criando um Post    
    routes.put("/products/:id", ProductController.update); //Update/Atualização POR ID.    
    routes.delete("/products/:id", ProductController.destroy); //DELETE POR ID.  
      
    _module_._exports_  =  routes;    
    //Exportando o Routes para usarmos dentro do Server.JS

  

**ProductController** para efetivar as alterações do Routes.

    const  mongoose  =  require("mongoose"); // Importando o mongoose
    
    //Para lidarmos com a parte de Banco de Dados.    
    const  Product  =  mongoose.model('Product');    
    //Importa nosso model de product
    
    //Exportando alguns objetos com algumas funções.    
    _module_._exports_  = {    
    async  index(_req_, _res_) {    
    const  products  =  await  Product.find();    
    return  _res_.json(products);    
    },    
    async  show(_req_, _res_) {    
    const  product  =  await  Product.findById(_req_.params.id);    
    return  _res_.json(product);    
    },    
    async  store(_req_, _res_) {    
    const  product  =  await  Product.create(_req_.body); //fazendo a requisão do corpo (body)    
    return  _res_.json(product); //Retornando em formato de json o product.    
    },    
    async  update(_req_, _res_) {    
    const  product  =  await  Product.findByIdAndUpdate(_req_.params.id, _req_.body, {    
    new:  true    
    });    
    return  _res_.json(product);    
    },    
    async  destroy(_req_, _res_) {    
    await  Product.findByIdAndRemove(_req_.params.id);    
    return  _res_.send();    
    }    
    };

## Utilizando um Paginate para Controller das Paginas.

Nos temos o Index que retorna todos os nossos resultados, no insominia aparece todas as paginas de Produtos, com o paginate podemos limitar para o usuário ver e melhor perfeição para nos modificarmos.

    npm install mongoose-paginate

Após a instalação dentro do Product.js fazemos a importação dele, e depois que importar iremos ate o final da pagina e fazemos o:

    ProductSchema.plugin(mongoosePaginate);

E após no ProductController iremos alterar na parte do Index determinando o número de paginas passando parâmetros.


    module.exports  = {
    async  index(req, res) {    
    const {    
    //criando uma destruturação para requisição query são para parametros GET.    
    //Inicializando na página 1.
    
    page  =  1    
    } =  req.query;    
    const  products  =  await  Product.paginate({/*Objeto Vazio se quisermos passar algum WHERE*/}, {    
    page, //Pagina Atual    
    limit:  10  //Limite de dados que vamos retornar por pagina    
    });

   
 ## Adicionando CORS
Permitindo outros endereços tenham acesso a nossa **API.**
Por enquanto a gente só está conseguindo acessar nossa **API** pelo Navegador acessando pelo próprio endereço dela, ou pelo Insominia.
Quando tivermos nossa aplicação em outro domínio, e eu queira acessar nossa aplicação que está em outro endereço, ele não vai permitir.
Tudo isso por causa do CORS, Cross Access Origin Security basicamente ele previne o acesso de domínios que não são do mesmo domínio da nossa api, pra gente permitir esse acesso de outros domínios, teremos que instalar o cros.

    npm install cors

Após feita a instalação do **cors**

    const  cors  =  require("cors"); // Importando o cors    
    app.use(cors()); //Permite o uso do cors

Parâmetros podemos passar os domínios que quisermos
deixando assim todos os dominios podem ser acessado publicamente. 
  
  
  
  
  

### Projeto Criado Junto ao Curso RocketSeat.
[RocketSeat](https://app.rocketseat.com.br/starter/)

  

### Douglas Coelho.
[GitHub Repositories](https://github.com/douglasruuan?tab=repositories)