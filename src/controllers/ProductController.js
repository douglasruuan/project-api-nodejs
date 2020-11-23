const mongoose = require("mongoose"); // Importando o mongoose
//Para lidarmos com a parte de Banco de Dados.

const Product = mongoose.model('Product');
//Importa nosso model de product

//Exportando alguns objetos com algumas funções.
module.exports = {

    async index(req, res) {
        const {
            //criando uma destruturação para requisição query são para parametros GET.
            //Inicializando na página 1.
            page = 1
        } = req.query;
        const products = await Product.paginate({
            /*Objeto Vazio se quisermos passar algum WHERE*/
        }, {
            page, //Pagina Atual
            limit: 10 //Limite de dados que vamos retornar por pagina
        });

        return res.json(products);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    async store(req, res) {
        const product = await Product.create(req.body); //fazendo a requisão do corpo (body)

        return res.json(product); //Retornando em formato de json o product.
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        return res.json(product);
    },
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};