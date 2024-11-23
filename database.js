/**
 * Modulo de conexao com banco de dados
 * Uso do mongoose
 */

const mongoose = require('mongoose')

//definir URL e autenticação do banco de dados e acrecentar ao final da url um nome para o banco de dados
const url = 'mongodb+srv://admin:123senac@clusterconest.wg44p.mongodb.net/dbconest'

//ststus de conexão (icone de conexão)
let isConnected = false

const dbConnect = async () => {
    if (isConnected === false) {
        await conectar()      
    }
}

//conectar

const conectar = async () => {
    if (isConnected === false) {
        try {
            await mongoose.connect(url)
            isConnected = true //sinalizar que o banco esta conectado
            console.log('Mongodb Conectado')
        } catch (error) {
            console.log(`Problema detectado: ${error}`)
        }
    }

}

//Desconecter

const desconectar = async () => {
    if (isConnected === true) {
        try {
            await mongoose.disconnect(url)
            isConnected = false //sinalizar que o banco esta conectado
            console.log('Mongodb Desconectado')
        } catch (error) {
            console.log(`Problema detectado: ${error}`)
        }
    }

}
//exportar para o main as funções desejadas
module.exports = {dbConnect, desconectar}
    
