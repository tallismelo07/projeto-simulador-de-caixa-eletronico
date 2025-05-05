// Input depositar e sacar
const inputDeposito = document.getElementById('valorDeposito');
const inpurSacar = document.getElementById('valorSaque');
// Saldo Disponivel
const saldoPrincipal = document.getElementById('saldo');
// Botao depositar e sacar
const botaoDepositar = document.getElementById('botaoDepositar');
const botaoSacar = document.getElementById('botaoSacar');
// mensagem
const mensagem = document.getElementById('mensagem');

botaoDepositar.addEventListener('click', evento => {
    evento.preventDefault();
    
    const valorDeposito = Number(inputDeposito.value);
    const saldoAtual = Number(saldoPrincipal.innerText);

    const novoSaldo = saldoAtual + valorDeposito;
    saldoPrincipal.innerText = novoSaldo.toFixed(2);
    mensagem1(novoSaldo);
});

botaoSacar.addEventListener('click', evento => {
    evento.preventDefault();

    const valorDeSaque = Number(inpurSacar.value);
    const saldoAtual = Number(saldoPrincipal.innerText);

    const novoAtualizado = saldoAtual - valorDeSaque;
    saldoPrincipal.innerText = novoAtualizado.toFixed(2);
    mensagem2(novoAtualizado);
});

function mensagem1(valor1) {
    mensagem.innerText = `Voce depositou: R$ ${valor1.toFixed(2)}`;
}

function mensagem2(valor2) {
    mensagem.innerText = `Voce sacou: R$ ${valor2.toFixed(2)}`;
}