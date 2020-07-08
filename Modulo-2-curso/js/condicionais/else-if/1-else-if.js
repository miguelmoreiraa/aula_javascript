/** 
 
    if (condition){
        // code
    } else if (condition) {
        // code
    }

 **/

const array = [2, 3, 4, 5, 6, 8, 10, 15];


console.log('\nelse if');
array.forEach(item => {
    if (item % 2 === 0) {
        console.log(`O número ${item} é divisível por 2`);
    } else if (item % 3 === 0) {
        console.log(`O número ${item} é divisível por 3`);
    } else if (item % 5 === 0) {
        console.log(`O número ${item} é divisível por 5`);
    }
});

console.log('\nif');
array.forEach(item => {
    if (item % 2 === 0) {
        console.log(`O número ${item} é divisível por 2`);
    }
    if (item % 3 === 0) {
        console.log(`O número ${item} é divisível por 2`);
    }
    if (item % 5 === 0) {
        console.log(`O número ${item} é divisível por 2`);
    }
});

// O 6 é divisível por 2 e por 3 so que no else if ele so vai cair no if ja se você fazer umas sequencia de if vai mostrar os dois
// tanto por 2 quanto por 3.