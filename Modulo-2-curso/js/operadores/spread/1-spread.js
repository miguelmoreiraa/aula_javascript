//Spread ...
var partes = ['ombro', 'joelhos'];
var musica = ['cabeca', ...partes, 'e', 'pés'];

// var musica = ['cabeca', 'ombro', 'joelhos', 'e', 'pés']; essa linha é a mesma lógica da linha 3...


function fn(x, y, z) {}
var args = [0, 1, 2];
fn(...args);