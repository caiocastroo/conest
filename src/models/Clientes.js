/**
 * Modelo de dados(Clientes)
 */

//Importação de bivliotecas
const {model, schema, Schema} = require ('mongoose')

//Crição da estrutura de dados ("tabela") que será usada no banco 
const clientesSchema = new Schema ({
    nomeCliente:{
        type: String
    },
    foneCliente:{
        type: String
    },
    emailCliente:{
        type: String
    }
})

//exportar para o main
// Para modificar o nome da coleção ("tabela"), basta, modificar na a linha abaixo o rotulo 'Clientes', sempre iniciando com letra maiuscula
module.exports = model('Clientes', clientesSchema)