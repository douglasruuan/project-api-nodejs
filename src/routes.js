const express = require("express"); //Importando O Express.
const routes = express.Router(); //Variavel para as rotas do express.

const ProductController = require('./controllers/ProductController');
//Importando nosso ProductController e chamamos o metodo index.

routes.get("/products", ProductController.index); //Criando um get.
routes.get("/products/:id", ProductController.show); //Get por ID
routes.post("/products", ProductController.store) //Criando um Post
routes.put("/products/:id", ProductController.update); //Update/Atualização POR ID.
routes.delete("/products/:id", ProductController.destroy); //DELETE POR ID.

module.exports = routes;
//Exportando o Routes para usarmos dentro do Server.JS