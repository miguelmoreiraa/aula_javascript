var arr = ['Apple', 'Banana', 'Orange'];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

// Destructuring Assignment
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']]; // Ai é como a gente destruisse nosso array e atribuir ele a variáveis
console.log(tomato2) // e a escrita desta desta forma ficou bem mais enxuta.


var obj = {
    name: 'Celso'
}
var name = obj.name;

// Destructuring Assignment
var obj = {
    name: 'Celso'
}
var { name } = obj;
console.log(name);

var obj = {
    name: 'Celso',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
};
// Forma antiga de atribuir uma variável *var age = obj.props.age;
var { props: { age: age2, favoriteColors: [color1, color2] } } = obj;
console.log(color1);

// Destructuring Assignment
function sum([a, b] = [5, 5]) {
    return a + b;
}
console.log(sum());