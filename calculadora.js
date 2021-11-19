var valor;

function botao(num){
    valor = document.calc.visor.value += num;
}

function reseta(){
    document.calc.visor.value = '';
}

function calcula(){
    valor = document.calc.visor.value;
    document.calc.visor.value = eval(valor);
}