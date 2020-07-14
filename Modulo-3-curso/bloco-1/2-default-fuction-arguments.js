function multiply(a, b) {
    // b = b || 1; // Ao uns anos tras o programador fazia isso para que se alguém esquecesse de passar o outro paramêtro
    // Só que se se fosse multiplicar algo por zero desta maneira não ia  funcionar
    b = typeof b === 'undefined' ? 1 : b; // Então fazia isso para pegar o zero também
    // operador lógico
    return a * b;
}
console.log(multiply(5, 5));

function multiplyout(a, b = a) { // desta forma com o = você consegue passar os paramêtros sem especifica-ló
    // a ordem é importante por exemplo multiplyout(b = a, a) aqui não posso fazer isso pois não consigo acessar o a sem referenciar
    return a * b;
}
console.log(multiplyout(5));

// lazy evaluation
function randomNumber() {
    return Math.random() * 10;
}

function multiplyout(a, b = randomNumber()) {
    return a * b;
}
console.log(multiplyout(5));