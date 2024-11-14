/**
 * Processo principal
 */

const { app, BrowserWindow, nativeTheme, Menu, shell, ipcMain } = require('electron/main')
const path = require('node:path')

// Importação do módulo de conexão
const { dbConnect, desconectar } = require('./database.js')
// Status de conexão com banco de dados. No MOngoDB é mais eficiente manter uma única conexão aberta durante todo o tempo de vida do aplicativo e usá-la quando necessário. Fechar e reabrir constantemente a conexão aumenta a sobrecarga e reduz o desempenho do servidor.
// Á variável abaixo é usada para garantir que o banco de dados inicie desconectado (evitar abrir outra instância)
let dbcon = null

// Janela principal
let win
function createWindow() {
    nativeTheme.themeSource = 'dark'
    win = new BrowserWindow({
        width: 1010,
        height: 720,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    Menu.setApplicationMenu(Menu.buildFromTemplate(template))

    win.loadFile('./src/views/index.html')

    // Botões
    ipcMain.on('open-client', () => {
        clientWindow()
    })

    ipcMain.on('open-supplier', () => {
       fornecedoresWindow()
    })

    ipcMain.on('open-product', () => {
        productWindow()
    })

    ipcMain.on('open-report', () => {
        reportWindow()
    })
}

// Janela sobre
function aboutWindow() {
    nativeTheme.themeSource = 'dark'
    const main = BrowserWindow.getFocusedWindow()
    let about
    if (main) {
        about = new BrowserWindow({
            width: 360,
            height: 215,
            autoHideMenuBar: true,
            resizable: false,
            minimizable: false,
            parent: main,
            modal: true,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js')
            }
        })
    }

    about.loadFile('./src/views/sobre.html')

    ipcMain.on('close-about', () => {
        console.log("Recebi a mensagem close-about")
        if (about && !about.isDestroyed()) {
            about.close()
        }
    })
}

// Janela clientes
function clientWindow() {
    nativeTheme.themeSource = 'dark'
    const main = BrowserWindow.getFocusedWindow()
    let client
    if (main) {
        client = new BrowserWindow({
            width: 800,
            height: 600,
            autoHideMenuBar: true,
            parent: main,
            modal: true,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js')
            }
        })
    }

    client.loadFile('./src/views/clientes.html')
}

// Janela fornecedores
function fornecedoresWindow() {
    nativeTheme.themeSource = 'dark'
    const main = BrowserWindow.getFocusedWindow()
    let fornecedores
    if (main) {
        fornecedores = new BrowserWindow({
            width: 800,
            height: 600,
            autoHideMenuBar: true,
            parent: main,
            modal: true,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js')
            }
        })
    }
    fornecedores.loadFile('./src/views/fornecedores.html')
}

// Janela produtos
function produtosWindow() {
    nativeTheme.themeSource = 'dark'
    const main = BrowserWindow.getFocusedWindow()
    let produtos
    if (main) {
        produtos = new BrowserWindow({
            width: 800,
            height: 600,
            autoHideMenuBar: true,
            parent: main,
            modal: true,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js')
            }
        })
    }
    produtos.loadFile('./src/views/produtos.html')
}

// Janela relatórios
function reportWindow() {
    nativeTheme.themeSource = 'dark'
    const main = BrowserWindow.getFocusedWindow()
    let report
    if (main) {
        report = new BrowserWindow({
            width: 800,
            height: 600,
            autoHideMenuBar: true,
            parent: main,
            modal: true,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js')
            }
        })
    }
    report.loadFile('./src/views/relatorios.html')
}

app.whenReady().then(() => {
    createWindow()

    // Melhor locar para estabelecer a conexão com o banco de dados 
    // Importar o módulo de conexão no início do código

    //Conexão com o banco
    ipcMain.on('db-connect', async (event, message) => {
        // A linha abaixo estabelece a conexão com o banco
        dbcon = await dbConnect()
        //enviar ao redenrizador uma menssagem para trocar o icone status do banco de dados
        event.reply('db-message, "Conectado')
    })

    //desconectar do banco ao encerrar a aplicação
    app.on('before-quit', async () => {
        await desconectar(dbcon)
    })

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})


const template = [
    {
        label: 'Arquivo',
        submenu: [
            {
                label: 'Sair',
                accelerator: 'Alt+F4',
                click: () => app.quit()
            }
        ]
    },
    {
        label: 'Zoom',
        submenu: [
            {
                label: 'Aplicar zoom',
                accelerator: 'CmdOrCtrl+=',
                click: () => win.webContents.zoomFactor += 0.1
            },
            {
                label: 'Reduzir',
                role: 'zoomOut'
            },
            {
                label: 'Restaurar o zoom padrão',
                role: 'resetZoom'
            },
        ]
    },
    {
        label: 'Ajuda',
        submenu: [
            {
                label: 'Repositório',
                click: () => shell.openExternal('https://github.com/volpini13/conest.git')
            },
            {
                label: 'Sobre',
                click: () => aboutWindow()
            }
        ]
    }
]