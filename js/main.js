$(document).ready(function(){
    $('#day').mask('00');
    $('#month').mask('00');
    $('#year').mask('0000');
})

const form = document.getElementById('form-preenchimento');

const yearInput = document.getElementById('year');
const monthInput = document.getElementById('month');
const dayInput = document.getElementById('day');

const yaerOutput = document.getElementById('years-results');
const monthOutput = document.getElementById('months-results');
const dayOutput = document.getElementById('days-results');

const mensagemErroAno = document.getElementById('error-year');
const mensagemErroMes = document.getElementById('error-month');
const mensagemErroDia = document.getElementById('error-day');
const mensagemErroPreenchimento = document.querySelectorAll('.mensagem-error');
const dadosTitulo = document.querySelectorAll('label');
const dadosInput = document.querySelectorAll('input');

//Data Atual
var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;

form.addEventListener('submit', function(e){
    e.preventDefault();
    dadoCorretoAno();
    dadoCorretoMes();
    dadoCorretoDia();
    calculadoraAno();
    calculadoraMes();
    calculadoraDia();
})

function mensagemFaltaPreenchimento(){
    mensagemErroPreenchimento[0].style.display='block';
    dadosTitulo[0].style.color = 'var(--cor-texto-erro)';
    dadosInput[0].style.border = '1px solid var(--cor-texto-erro)';

    mensagemErroPreenchimento[1].style.display='block';
    dadosTitulo[1].style.color = 'var(--cor-texto-erro)';
    dadosInput[1].style.border = '1px solid var(--cor-texto-erro)';

    mensagemErroPreenchimento[2].style.display='block';
    dadosTitulo[2].style.color = 'var(--cor-texto-erro)';
    dadosInput[2].style.border = '1px solid var(--cor-texto-erro)';
}

//Validação Ano
function mensagemDadosInvalidosAno(){
    mensagemErroAno.style.display='block';
    dadosTitulo[2].style.color = 'var(--cor-texto-erro)';
    dadosInput[2].style.border = '1px solid var(--cor-texto-erro)';
}

function dadoCorretoAno(){
    if(yearInput.value<0||yearInput.value>ano){
        mensagemDadosInvalidosAno();
        mensagemErroPreenchimento[2].style.display='none';
        return false
    } else if(yearInput.value<=0){
        mensagemFaltaPreenchimento();
        mensagemErroAno.style.display='none';
        return false
    } else{
        mensagemErroPreenchimento[2].style.display='none';
        mensagemErroAno.style.display='none';
        dadosTitulo[2].style.color = 'var(--cor-texto-pergunta)';
        dadosInput[2].style.border = '1px solid var(--cor-texto-pergunta)';
        return true
        }
}

//Validação Mês
function mensagemDadosInvalidosMes(){
    mensagemErroMes.style.display='block';
    dadosTitulo[1].style.color = 'var(--cor-texto-erro)';
    dadosInput[1].style.border = '1px solid var(--cor-texto-erro)';
}

function dadoCorretoMes(){
    if(monthInput.value<0||monthInput.value>12){
        mensagemDadosInvalidosMes();
        mensagemErroPreenchimento[1].style.display='none';
        return false
    } else if(monthInput.value<=0){
        mensagemFaltaPreenchimento();
        mensagemErroMes.style.display='none';
        return false
    } else{
        mensagemErroPreenchimento[1].style.display='none';
        mensagemErroMes.style.display='none';
        dadosTitulo[1].style.color = 'var(--cor-texto-pergunta)';
        dadosInput[1].style.border = '1px solid var(--cor-texto-pergunta)'
        return true
        }
}

//Validação Dia
function mensagemDadosInvalidosDia(){
    mensagemErroDia.style.display='block';
    dadosTitulo[0].style.color = 'var(--cor-texto-erro)';
    dadosInput[0].style.border = '1px solid var(--cor-texto-erro)';
}

function dadoCorretoDia(){
    if(dayInput.value<0||dayInput.value>31){
        mensagemDadosInvalidosDia();
        mensagemErroPreenchimento[0].style.display='none';
        return false
    } else if(dayInput.value<=0){
        mensagemFaltaPreenchimento();
        mensagemErroDia.style.display='none';
        return false
    } else{
        mensagemErroPreenchimento[0].style.display='none';
        mensagemErroDia.style.display='none';
        dadosTitulo[0].style.color = 'var(--cor-texto-pergunta)';
        dadosInput[0].style.border = '1px solid var(--cor-texto-pergunta)';
        return true
        }
}

function calculadoraAno(){
    if (dadoCorretoAno() === true ){
        const calculandoAnoMesMenor = ano - yearInput.value-1;
        const calculandoAnoMesMaior = ano - yearInput.value
        if(monthInput.value>=mes){
            yaerOutput.innerHTML = calculandoAnoMesMenor
        } else{
            yaerOutput.innerHTML = calculandoAnoMesMaior
        }
        
    } else {
        yaerOutput.innerHTML = '--'
    }
    
}

function calculadoraMes(){
    if(dadoCorretoMes() === true){
        const calculandoMesMenor = (monthInput.value-mes-12)*(-1);
        const calculandoMesMaior = mes-monthInput.value;
        if(monthInput.value>=mes){
            monthOutput.innerHTML=calculandoMesMenor
        } else{
            monthOutput.innerHTML=calculandoMesMaior
        }
    } else{
        monthOutput.innerHTML='--'
    }
}

function calculadoraDia(){
    if(dadoCorretoDia() === true){
        const calculandoDiaMaior = dayInput.value - dia;
        const calculandoDiaMenor = dia - dayInput.value
        if(dayInput.value>=dia){
            dayOutput.innerHTML = calculandoDiaMaior
        } else{
            dayOutput.innerHTML = calculandoDiaMenor
        }
    } else{
        dayOutput.innerHTML='--'
    }
}
