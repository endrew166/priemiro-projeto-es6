"use strict";

// Operações com Array em ES6+
var array = [1, 3, 4, 5, 8, 9];
var novoArray = array.map(function (item, index) {
  return item + index;
});
console.log(novoArray); // Reduce: consumir todo o vetor e transformar em uma única informação

var soma = array.reduce(function (total, proximoValor) {
  return total + proximoValor;
});
console.log(soma); // Filter: filtrar somete os itens que queremos

var filterPares = array.filter(function (item) {
  // if (item % 2 === 0)
  //     return true
  // else
  //     return false;    
  return item % 2 === 0; // << resumido 
});
console.log(filterPares);
var usuarios = [{
  nome: 'Usuario 1',
  idade: 10
}, {
  nome: 'Usuario 2',
  idade: 15
}, {
  nome: 'Usuario 3',
  idade: 18
}];
var novosUsuarios = usuarios.filter(function (usuario) {
  return usuario.idade >= 15;
});
console.log(novosUsuarios); // Find

var find = usuarios.find(function (item) {
  return item.nome === 'Usuario 1';
});

if (find) {
  console.log(find);
} // forEach


usuarios.forEach(function (item, index) {
  console.log(item);
});
