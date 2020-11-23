const mongoose = require('mongoose'); //Importando o Mongoose
const mongoosePaginate = require('mongoose-paginate'); //Importando o paginate

const ProductSchema = new mongoose.Schema({
    //Dentro desta variavel vamos passar um objeto.
    //Quais vão ser os campos que vão ser salvo dentro do banco de dados.
    //Cada produto tem que ter um Titulo do Tipo Texto, e ele é obrigatorio dele tem quer verdade.
    //Mesma coisa para Description que é a descrição.
    //Url que é o link que vamos dar para nosso produto.
    //E por ultimo a colununa CreatedAt que vai ser preenchida automaticamente
    //Ela vai salvar a data e preenchida sozinha com o valor da data-atual do banco de dados, criada do produto.

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


ProductSchema.plugin(mongoosePaginate);
mongoose.model('Product', ProductSchema);
//Isso aqui para registrar um modelo na nossa aplicação.
