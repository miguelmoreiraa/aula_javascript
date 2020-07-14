var sum01d = function log(a, b) {
        return a + b;
    }
    // Arrow Fuctions

var sum = (a, b) => a + b;
// Se tiver um argumento só não preciso do uso dos parentes, mas se tiver dois ou mais, obrigatoriamente preciso do uso dos parentes
// var sum = a, b => a;
//var sum = (a, b) => a + b{
// se eu for criar uma variável var x = ...
// ou fazer um if if(){}
// obrigatoriamente eu tenho que abrir chaves
//}    
console.log(sum(5, 15));

var createObj = () => ({ test: 123 }); // Objeto literal
console.log(createObj());

function Car() { //Função construtora
    this.foo = 'bar'
}
console.log(new Car());

// Hoisting com arrow functions não funciona, então você tem que usar as functions clássícas.
// Hoisting é quando voce declara as functions ou variáveis no topo da sua função. 

var obj = {
    showContext: function showContext() {
        // console.log(this); // está referenciando ao proprio objeto
        // this.log('teste'); 

        setTimeout(() => {
            this.log('after 1000ms'); //Arrow functions tem uma propriedade de ter um contexto igual o código que envolve ele.
            // as chaves ao redor de uma arrow functions o this dele vai ser referenciar essas chaves, 
            //chamado contexto lexico
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();