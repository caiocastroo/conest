/**
 * Processo de renderizção
 * clientes.html
 */



//Crud Create >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Passo 1- slide (capturar os dados dos imputs do form)
let formCliente = document.getElementById('frmClient')
let nomeCliente = document.getElementById('inputNameClient')
let foneCliente = document.getElementById('inputPhoneClient') 
let emailCliente = document.getElementById('inputEmailClient')

//Evento  associado ao botão adicionar (quando o botão for pressionado)
formCliente.addEventListener('submit', async (event) => {
    //Evitar o comportamento pradrão de envio em um form
    event.preventDefault()
    //Teste importante! (fluxo de dados)
    //console.log(nomeCliente.value, foneCliente.value, emailCliente.value)

    //Passo 2 - slide (envio das informações para o main)
    //Criar um objeto
    const cliente = {
        nomeCli: nomeCliente.value, 
        foneCli: foneCliente.value, 
        emailCli: emailCliente.value
    }
    api.novoCliente(cliente)
})
//Fim CRUD Create <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//Reset Form >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
api.resetarFormulario((args)=>{
   document.getElementById('inputNameClient').value=""
   document.getElementById('inputPhoneClient').value=""
   document.getElementById('inputEmailClient').value=""
})

//Fim - Reset Form >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>