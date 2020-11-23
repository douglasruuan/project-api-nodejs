const express = require("express"); //Importando o Express utilizando o require.
const mongoose = require("mongoose"); //Importando o mongoose
const cors = require("cors"); // Importando o cors
const requireDir = require("require-dir"); //Importando a biblioteca de require


//Iniciando O APP.
const app = express(); // definição de variavel para executar o express.
app.use(express.json()); //Permitir envie dados no formato json.
app.use(cors()); //permite o uso do cors
//parametros podemos passar os dominios que quisermos
//deixando assim todos os dominios podem ser acessado publicamente

//Iniciando o DataBase/Banco de Dados.

//Primeiro parametro passaremos a URL de Conexão com o MongoDB.
//Padrão começamos com mongodb://.
//Se voce tiver usuario e password //user@passw.
//:Porta que utilizamos e / nome da database que vamos utilizar (esquima).
//Depois passaremos um Objeto como parametro como uma única informação.
//{useNewUrlParser: true}.
//Se você estiver dando erro e o mongoose retornar algum erro e só retirar o {useNewUrlParser: true}.
//Tive que utilizar useUnifiedTopology: true pra a versão mais recente do mongoose e esta rodando normalmente.
mongoose.connect("mongodb://localhost:27017/Projeto-NodeJS-Rocketseat", {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
requireDir("./src/models");
//Requerimento dos models, Utilizando a biblioteca para fazer o require de todos os models da pasta models.

//const Product = mongoose.model('Product');
//Não iremos mais utilizar.
//Essa variavel eu devo ter acesso ao Product para conseguir inserir novos valores.

//Rota Importada do Routes
app.use("/api", require("./src/routes"));
//Use e como se fosse um "coringa", ira receber todo tipo de requisição, get/post/delete...TODAS.
// o /api e so complento para utilizarmos na URL se não quiser não precisa.




app.listen(3001); //nosso projeto sera rodado na porta 3001