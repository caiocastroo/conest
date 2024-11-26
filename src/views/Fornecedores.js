/**
 * Processo de renderizção
 * clientes.html
 */



//Crud Create >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Passo 1- slide (capturar os dados dos imputs do form)
let formFornecedores = document.getElementById('frmSupplier')
let nomeFornecedores = document.getElementById('inputNameSupplier')
let foneFornecedores = document.getElementById('inputPhoneSupplier') 
let siteFornecedores = document.getElementById('inputSiteSupplier')

//Evento  associado ao botão adicionar (quando o botão for pressionado)
formFornecedores.addEventListener('submit', async (event) => {
    //Evitar o comportamento pradrão de envio em um form
    event.preventDefault()
    //Teste importante! (fluxo de dados)
    //console.log(nomeCliente.value, foneCliente.value, emailCliente.value)

    //Passo 2 - slide (envio das informações para o main)
    //Criar um objeto
    const fornecedores = {
        nomeFor: nomeFornecedores.value, 
        foneFor: foneFornecedores.value, 
       siteFor: siteFornecedores.value
    }
    api.novoFornecedores(fornecedores)
})
//Fim CRUD Create <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//Reset Form >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
api.resetarFormulario((args)=>{
   document.getElementById('inputNameSupplier').value=""
   document.getElementById('inputPhoneSupplier').value=""
   document.getElementById('inputSiteSupplier').value=""
})

//Fim - Reset Form >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>