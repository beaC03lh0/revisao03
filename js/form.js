let botaoAdd = document.querySelector('#agendamento')
botaoAdd.addEventListener('click', function (evento) {

    evento.preventDefault()

    let form = document.querySelector('#form-adiciona')

    let paciente = getValueForm(form)


    // let erros = validarReserva(paciente)

    // if (erros.length > 0) {
    //     mensagemErro(erros)
    //     return
    // }

     addPaciente(paciente)

})

//-------------------------Validar um paciente---------------------------
//                                  |
//                                  |
//                                 \/
function validarPaciente(paciente) {
    let erros = []

    if (paciente.nome.length == 0) {
        erros.push('O nome não pode estar em branco')
    }
 
    if (paciente.horario.length == 0) {
        erros.push('O horario não pode estar em branco')
    }
   
    if (validaData(paciente.data)) {
        erros.push('data Invalido')
    }
   

    return erros
}

//-------------------------Mensagens de erro---------------------------
//                                  |
//                                  |
//                                 \/

function mensagemErro(erros) {
    let ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''

    erros.forEach(function (erro) {
        let li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })
}

//-------------------------Montar um paciente---------------------------
//                                  |
//                                  |
//                                 \/

function addPaciente(paciente) {
    let pacienteTr = montarTr(paciente)
    let tabela = document.querySelector('#tabela01')

    tabela.appendChild(pacienteTr)
}
//----------------------Montar uma linha da tabela------------------------
//                                  |
//                                  |
//                                 \/

function montarTr(paciente) {
    let pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    
    pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montarTd(paciente.data, 'info-quant'))
    pacienteTr.appendChild(montarTd(paciente.horario, 'info-horario'))
    pacienteTr.appendChild(montarTd(paciente.total, 'info-total'))
    

    return pacienteTr
}

//----------------------Montar uma celula da linha------------------------
//                                  |
//                                  |
//                                 \/

function montarTd(dado, classe) {
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}

//----------------------Receber valores para tabela------------------------
//                                  |
//                                  |
//                                 \/

function getValueForm(form) {
    let paciente = {
        nome: form.nome.value,
        data: form.data.value,
        hora: form.horario.value,

        
    }
    return paciente
}