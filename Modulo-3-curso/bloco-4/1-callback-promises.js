// Promises
const doSomethingPromise = () => new Promise((resolve, reject) => {

    setTimeout(function() {
        //did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function() {
        //did otherthing
        resolve('Secong data');
    }, 1000);
});

// Executando as duas promises em paralelas
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => console.log('OPS', error));

// Executando as duas promises sequencial
doSomethingPromise().then(data => {
    console.log(data.split(''));
    return doOtherThingPromise()
}).then(data2 => console.log(data2.split(''))).catch(error => console.log('OPS', error));



// Pending =  esta pendente em execução
// Fulfilled = terminou de executar
// Reject = caso ocorreu algum erro


// callbacks
function doSomething(callback) {
    setTimeout(function() {
        // did something
        callback('Fist data'); // Era muito comum usar funções de call back, para executar algo uma determinada assíncrona
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        // did other thing
        callback('Secong data');
    }, 1000);
}

function doAll() {
    try {
        doSomething(function(data) {
            var processedData = data.split('');
            try {
                doOtherThing(function(data2) {
                    var processedData2 = data2.split('');
                    try {
                        setTimeout(function() {
                            console.log(processedData, processedData2)
                        }, 1000);
                    } catch (err) {
                        // handle error
                    }
                });
            } catch (err) {
                // handle error
            }
        });
    } catch (err) {
        // handle error
    }
}
doAll();