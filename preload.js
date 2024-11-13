/**
 * Segurança e desempenho
 */

const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('api', {
    fecharJanela: () => ipcRenderer.send('close-about'),
    janelaClientes: () => ipcRenderer.send('open-client'),
    janelaProdutos: () => ipcRenderer.send('open-produtos'),
    janelaFornecedores: () => ipcRenderer.send('open-fornecedores'),
    janelaRelatorios: () => ipcRenderer.send('open-relatorios')
})