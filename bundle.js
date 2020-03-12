"use strict";

// delcarar varuaveis em ES6
//const: cria uma vaiavel do tipo constante.
//para objetos e arrays
var nomeVariavel = "Joao"; //objeto

var usuario = {
  nome: 'Jesus',
  iade: 26
}; //permite a mutação do objeto mas não substituição

usuario.nome = 'Maria';
var meuVetor = [1, 2, 3, 4, 5]; //permite a mutação do array  através das alterações nos indices

meuVetor[0] = 90;
meuVetor[2] = 93;
console.log(usuario);
console.log(meuVetor);
var valor = 3;
var nome = 'Claude late';
var altua = 1.86;
var contemValor = true;
console.log(contemValor);

if (true) {}

function somar() {}

for (var i = 0; i < 5; i++) {}

var exbirMensaggem = function exbirMensaggem() {
  mensagem = 'Minha mensagem';
  console.log(mensagem);
  var mensagem;
};

exbirMensaggem();

if (true) {
  var _escopoFuncao = 'teste';
  var _escopoBloco = 'teste 2';
  console.log(_escopoBloco);
  console.log(_escopoBloco);
}

var escopoFuncao = 'teste';
var escopoBloco = 'teste 2';
console.log(escopoFuncao);
console.log(escopoBloco);
