var obj = {
    prop1: 'Digital Innovation One' // Maneira Clássica de escrever objetos líterais
};

var prop1 = 'Digital Innovation One';
var obj = {
    prop1: prop1 // Outra maneira para atribuir valores para propriedades em métodos
};
console.log(obj);


var prop1 = 'Digital Innovation One';
var obj = {
    prop1 // No ES6 foi implementado isso para não precisar repetir a palavra
};
console.log(obj);

function method1() {
    console.log('method called'); // Short Range
}
var obj = {
    method1
};
obj.method1();

var obj = {
    sum: function sum(a, b) { // Outra maneira de fazer, essa direta no método 
        // pode ser uma função anônima tbm  sum: function (a, b){}
        return a + b;
    }
};
console.log(obj.sum(1, 5));

var obj = {
    sum(a, b) { // Outra maneira de fazer, omitindo a função
        return a + b;
    }
};
console.log(obj);

var propName = 'test';

var obj = {};

obj[propName + 'concat'] = 'prop value'; // Antes do ES6, que declarava o obj antes e posteriosmente fazer a definição

console.log(obj);


var propName = 'test';

var obj = {
    [propName + 'concat']: 'prop value' // Com o surgimento do ES6 posso fazer isso dentro do objeto já.
};
console.log(obj);