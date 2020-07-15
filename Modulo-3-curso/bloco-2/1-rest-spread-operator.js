// Forma antes do ES6 a se retorna vários argumentos
// Neste function a exibição do arguments vem como um Object. 
function sum(a, b) {
    var value = 0;
    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }
    return value;
}
console.log(sum(5, 5, 5, 2, 3));

// rest operator ...
// Nesta function com o rest operator a exibição vem como um array que é mais fácil de se manipular...
function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum(5, 5, 5, 2, 3));

// rest operator usando arrow fuctions...
// Nesta function com o rest operator a exibição vem como um array que é mais fácil de se manipular...
const sum = (...rest) => {
    return rest.reduce((acc, value) => acc + value, 0);
}
console.log(sum(5, 5, 5, 2, 3));

//Pegando o resto como array...
const sum = (a, b, ...rest) => {
    console.log(a, b, rest);
}
console.log(sum(5, 5, 5, 2, 3));

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)
const sum = (...rest) => {
    //  return multiply.apply(undefined,rest); <----- antes do ES6
    return multiply(...rest); // Com o ES6 a maneira de usar um spread operator
    // O spread operator funciona de maneira que vai pegar todos os itens do array e transformar em argumentos.
}
console.log(sum(5, 5, 5, 2, 3));

// spread operator também é usado em string, literal objects e objetos iteraveis
// o spread tem a função de quebrar os itens e passar pra algum lugar

const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function logArgs(...args) {
    console.log(args);
}
logArgs(...str); // usando o spread na string você conssegue quebrar cada letra e transformar em um array e pode passar pra outra função
logArgs(...arr);

// AO INVES DE USARMOS COM CONCAT PARA JUNTAR DOIS ARRAY COM O ES6 PODEMOS USAR O SPREAD OPERATOR, const arr2 = [...arr, 5, 6, 7];

// O spread operator com objeto só pode ser usado na construção de outro objeto... *literal objects*

const obj = { // Criação do Primeiro literal objects
    test: 123
};

const obj2 = { // Criação do Segundo literal objects
    ...obj, // Acessando o primeiro obj
    test2: 'hello' // literal objects não são elementos interaveis
};

console.log(obj2);