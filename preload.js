/**
 * Segurança e desempenho
 */

const {contextBridge, ipcRenderer} = require('electron')

//Estabelecer a conexão com o banco (envio de pedido para main abrir a conexão com banco de dados)
ipcRenderer.send('db-connect')

contextBridge.exposeInMainWorld('api', {
    dbMensagem: (message) => ipcRenderer.on('db-message', message),
    fecharJanela: () => ipcRenderer.send('close-about'),
    janelaClientes: () => ipcRenderer.send('open-client'),
    janelaProdutos: () => ipcRenderer.send('open-produtos'),
    janelaFornecedores: () => ipcRenderer.send('open-fornecedores'),
    janelaRelatorios: () => ipcRenderer.send('open-relatorios')
})