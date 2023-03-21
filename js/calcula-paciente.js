//mudando titulo dinamicamente
//declarando variaveis utilizando o let
let titulo = document.querySelector('.titulo')
titulo.textContent = 'clinica bom coração'
//-----------------------------------------------------------------------

//selecionando todos os pacientes da tabela e colocando dentro de um lista
let pacientes = document.querySelectorAll('.paciente')
console.log(pacientes)


//percorrendo a lista de pacientes
for(var i = 0; i <= pacientes.length; i++){
    let paciente = pacientes[i]

    //recebendo o peso do paciente   
    let dataTd = paciente.querySelector('.info-data')
    let data = dataTd.textContent


    //recebendo a altura do paciente
    let horarioTd = paciente.querySelector('.info-horario')
    let horario = horarioTd.textContent

    
    let totalTd = paciente.querySelector('.info-total')
    
    let total = calculaTotal(paciente)
    totalTd.textContent = total
}

function calculaTotal (paciente){
    let total = 0
     //calculando o imc do paciente
     total = peso / (altura * altura)
     //toFixed para ajustar as casas decimais
     return total.toFixed(2)
}