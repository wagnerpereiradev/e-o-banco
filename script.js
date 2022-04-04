var usuario = prompt("Crie um nome de usuário");
var senhaCreate = prompt("Crie uma senha");
var senha = NaN;



function login() {

    var inputName = document.querySelector("#name");
    var user = inputName.value;

    var inputPassword = document.querySelector("#password");
    var senha = inputPassword.value;

    console.log(usuario, senhaCreate, user, senha)

    if (usuario === user && senhaCreate === senha) {
        alert("Login efetuado com sucesso!")


        let sc1 = document.querySelector("#sc1");
        sc1.innerText = ("Olá, " + user + "!");
    } else {
        let sc1 = document.querySelector("#sc1");
        sc1.innerText = ("Senha ou usuário incorreto");
    }
}






var saldo = 1000; //Float 1.36


function ver_saldo() {


    var inputPassword = document.querySelector("#password");
    var senha = inputPassword.value;

    const validaSaldo = prompt("Valide sua senha:");

    if (validaSaldo == senha) {
        let sc1 = document.querySelector("#sc1");
        sc1.innerText = (usuario + ", seu saldo é de R$" + (saldo.toFixed(2)));
    } else {
        let sc1 = document.querySelector("#sc1");
        sc1.innerText = ("Faça login ou tente novamente.");
    }

}

function ver_saldo2() {

    let sc1 = document.querySelector("#sc1");
    sc1.innerText = (usuario + ", seu saldo é de R$" + (saldo.toFixed(2)));

}

function fazer_deposito() {
    var inputPassword = document.querySelector("#password");
    var senha = inputPassword.value;
    var validacao = prompt("Valide sua senha:");

    if (validacao === senha) {
        var deposito = parseFloat(prompt('Qual o valor para depósito?'));
        // Not a Number

        if (isNaN(deposito) || deposito === '') {
            alert('Por favor, informe um número:');
            fazer_deposito();
        }


        if (deposito > 0) {
            saldo += deposito;
            ver_saldo2();
        } else {
            var deposito = 0;
            alert("Operação não autorizada.")
            fazer_deposito()
        }

        var dataAtual = new Date;
        linhaExtrato.push("\n" + "=============================");
        linhaExtrato.push("\n" + dataAtual + " DEPÓSITO NO VALOR DE: R$" + (deposito.toFixed(2)));
    } else {
        alert("Senha incorreta, faça login ou tente novamente")
    }
}

function fazer_saque() {

    var inputPassword = document.querySelector("#password");
    var senha = inputPassword.value;
    var validacao = prompt("Valide sua senha:");

    if (validacao === senha) {
        var saque = parseFloat(prompt('Qual o valor para saque?'));
        var saldoNew = saldo - saque;

        if (saque > 0 && saldoNew >= 0) {
            if (isNaN(saque) || saque === '') {
                alert('Por favor, informe um número:');
                fazer_saque();
            } else {
                saldo -= saque;

                ver_saldo2();
            }
        } else {
            var saque = 0;
            alert("Operação não realizada.")
        }
        var dataAtual = new Date;
        linhaExtrato.push("\n" + "=============================");
        linhaExtrato.push("\n" + dataAtual + " SAQUE NO VALOR DE: R$" + (saque.toFixed(2)));
    } else {
        alert("Senha incorreta, faça login ou tente novamente")
    }
}

function erro() {
    alert('Por favor, informe um número entre 1 e 4');

}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        let sc1 = document.querySelector("#sc1");
        sc1.innerText = (usuario + ', foi um prazer ter você por aqui 😁');
        document.querySelector('#name').value = '';
        document.querySelector('#password').value = '';
    } else {

    }
}



// Extrato

var linhaExtrato = [];

function extrato() {
    var inputPassword = document.querySelector("#password");
    var senha = inputPassword.value;
    var validacao = prompt("Valide sua senha:");

    if (validacao === senha) {
        alert(linhaExtrato.join(' '));
    } else {
        alert("Senha incorreta, faça login ou tente novamente")
    }

}

function transferencia() {

    var inputPassword = document.querySelector("#password");
    var senha = inputPassword.value;
    var validacao = prompt("Valide sua senha:");

    if (validacao === senha) {
        var destino = prompt("Digite a conta para qual quer tranferir:");
        if (isNaN(destino) || destino === '') {
            alert('Por favor, informe um número:');
            transferencia();
        }

        var valorTed = parseFloat(prompt("Digite o valor que deseja transferir:"));

        if (valorTed <= saldo && valorTed > 0) {
            alert("Transferência de R$" + valorTed + " para conta " + destino);
            saldo -= valorTed;

            var dataAtual = new Date;
            linhaExtrato.push("\n" + "=============================");
            linhaExtrato.push("\n" + dataAtual + " TED DE: R$" + (valorTed.toFixed(2)) + " para " + destino);
            ver_saldo2();
        } else {
            alert("Operação não realizada.")
        }
    } else {
        alert("Senha incorreta, faça login ou tente novamente")
    }
}