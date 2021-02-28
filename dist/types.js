"use strict";
// Em Ts só existe true ou false (escrito) para boolean
var isOpen;
isOpen = true || false;
//string ('text', "text", `text`)
var message;
message = 'text 01';
message = "text 02";
message = "text " + isOpen; // dentro de `` é considerado tudo como string
//number (int, flot e hexadecimal)
var total;
total: 20;
total: 20.5;
total: 0xff0;
//Tem que tipar que é array e de que tipo
//Array (type[]) 
var itemsNumber;
itemsNumber = [1, 2, 3];
var itemsString;
itemsString = ['text', 'text'];
//Array (Array<type>) 
var itemsStrings;
itemsStrings = ['text', 'text'];
var itemsNumbers;
itemsNumbers = [1, 2, 3];
//tuple
//Aqui ja sabemos que é um array e de que tipo ele é 
var values;
values: [1, 'text'];
//enum
//enumerator para criação de chave-valor
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#212121";
})(Colors || (Colors = {}));
//any (Qualquer coisa) - Não recomendavel usar
var coisa;
coisa = [1];
//void ( retorna vazio)
function logger() {
    console.log('foo');
}
//never - nunca retornará
function error() {
    throw new Error('error');
}
//Object - Qualquer coisa
//É tudo aquilo que não é string, number, boolean, Array
var camiseta;
camiseta = {
    tamanho: 'M',
    cor: 'Red',
    qtde: '20'
};
