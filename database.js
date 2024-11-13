/**
 * Modulo de conexao com banco de dados
 * Uso do mongoose
 */

const mongoose = require('mongoose')

//definir URL e autenticação do banco de dados
const url = 'mongodb+srv://admin:123senac@clusterconest.wg44p.mongodb.net/'

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
            await mangoose.connect(url)
            isConnected = true //sinalizar que o banco esta conectado
        } catch (error) {
            console.log(`Problema detectado: ${error}`)
        }
    }

}

//Desconecter

const desconectar = async () => {
    if (isConnected === true) {
        try {
            await mangoose.disconnect(url)
            isConnected = false //sinalizar que o banco esta conectado
        } catch (error) {
            console.log(`Problema detectado: ${error}`)
        }
    }

}
    
}