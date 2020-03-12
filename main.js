// delcarar varuaveis em ES6
//const: cria uma vaiavel do tipo constante.
//para objetos e arrays

const nomeVariavel = "Joao";
//objeto
const usuario = {nome:'Jesus', iade:26};
//permite a mutação do objeto mas não substituição
usuario.nome = 'Maria';

const meuVetor = [1, 2, 3, 4, 5,];
//permite a mutação do array  através das alterações nos indices
meuVetor[0] = 90;
meuVetor[2] = 93;

console.log(usuario);
console.log(meuVetor);

let valor = 3;
let nome = 'Claude late';
let altua = 1.86
let contemValor = true;

console.log(contemValor);
if(true){

}
function somar(){

}
for(var i= 0; i<5; i++){

}

 var exbirMensaggem = function(){
     mensagem = 'Minha mensagem';
     console.log(mensagem);
     var mensagem;
 }  

 exbirMensaggem();
 if(true){
     let escopoFuncao = 'teste';
     let escopoBloco = 'teste 2';
    console.log(escopoBloco);
    console.log(escopoBloco);
}
 
 let escopoFuncao = 'teste';
 let escopoBloco = 'teste 2';
 console.log(escopoFuncao);
 console.log(escopoBloco);