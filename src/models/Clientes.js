/**
 * Modelo de dados(Clientes)
 */

//Importação de bivliotecas
const {model, schema, Schema} = require ('mongoose')

//Crição da estrutura de dados ("tabela") que será usada no banco 
const clientesSchema = new Schema ({
    nomeClinete:{
        type: String
    },
    foneClinete:{
        type: String
    },
    emailClinete:{
        type: String
    }
})

//exportar para o main
module.exports = model('Clientes', clientesSchema)