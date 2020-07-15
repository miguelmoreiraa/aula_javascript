// Symbols
// Maneira de gerar um identificador único
// Ele é um identificador único
// const uniqueId = Symbol('Hello'); [ como vocês podem ver dito acima o Symbol é único
// const uniqueId2 = Symbol('Hello'); se eu fazer essa comparação 
// console.log(uniqueId === uniqueId2) o resultado sera de {false}...]

const uniqueId = Symbol('Hello');

const obj = {
    [uniqueId]: 'Hello'
};
console.log(obj);

// Esses tipos você pode usar para adicionar propriedades...
// Well known symbols
Symbol.iterator
Symbol.split
Symbol.toStringTag

//Iterator é uma interface para voce consumir passo a passo, uma lista ou uma estrutura de dados...
// Percorre os dados...

const arr = [1, 2, 3, 4];
for (let value of arr) { // Com o ES6 
    console.log(value) // Função iteradora que o array ja possui nativamente
}

// Usando Spread Operator para iterator
// const arr2 = [...str, ...arr]...

// Antes do ES6
const it = arr[Symbol.iterator](); // Não Precisa Gerar nem o interador com o  ES6/
while (true) {
    let { value, done } = it.next(); // Percorrendo a estrurura de dados
    if (done) { // Antes do ES6
        break;
    }
    console.log(value);
}
//
// Construção de uma função iteradora para um objeto literal...
const obj = {
    values: [1, 2, 3, 4], // aqui estamos construindo um object literal onde vamos acessar todos os indíces desse array
    [Symbol.iterator]() { // Criando o Symbol.iterator para fazer as interações dos itens
        let i = 0; // Criando uma variavel para ele fazer o loop
        return {
            next: () => {
                i++ // a cada return de next vai adicionar mais um item
                return {
                    value: this.values[i - 1], // Aqui para acessar a lista, a colocação desse -1 é para acessar a lista a partir do item 1
                    done: i > this.values.length // Quando o i for maior que o numero da lista ele retorna undefines
                };
            }
        };
    }
    // Esse objeto se tornou interavel
};

// Com o spread operator posso fazer um novo array
const arr2 = [...obj];
console.log(arr2);


for (let value of obj) {
    console.log(value)
}

// Antes do For
const it = obj[Symbol.iterator]()
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//Generator são para gerar e construir a interface de interação dos objetos
// São funções com pausas e "despausa" valores
function* hello() {
    console.log('Hello'); // além de passou minhas funções, também consigo controlar o fluxo de dados "const value = yield2; 
    yield;
    console.log('From');
    yield;
    console.log('Function! '); // console.log(value) para interao o outside que ficaria na console.log(it.next('Outside!'));
}

const it = hello();
console.log(it.next());

// Fazendo uma função para pegar um random de números infinitos
function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const it = naturalNumbers();
console.log(it.next()); // Sò vai invocando o step do meu while quando eu invocar esse next
console.log(it.next());
console.log(it.next());
console.log(it.next());

// Posso usar generator de uma forma de construir interadores...
const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for (let value of obj) {
    console.log(value)
}