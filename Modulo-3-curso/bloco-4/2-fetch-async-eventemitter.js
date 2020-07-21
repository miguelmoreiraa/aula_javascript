// FETCH
fetch('/data.json').then(responseStream => { // Fazendo uma requisição de dados (famosa request)
    console.log(responseStream);
});

fetch('/data.json').then(responseStream => { // Fazendo uma requisição de dados
    responseStream.json().then(data => { // Fazendo uma promise para pegar os dados do json
        console.log(data);
    });
});

fetch('data.json')
    .then(responseStream => responseStream.json())
    .then(data => { // Encadeando meu then
        console.log(data);
    });


fetch('data.json')
    .then(responseStream => responseStream.json())
    .then(data => { // Encadeando meu then
        console.log(data);
    }).catch(err => {
        console.log('Erro: ', err); // Se tiver um problema de rede, ele cairá no catch. como por exemplo eu passa uma porta do servidor que não existe
    });

// Nesse fetch abaixo estou fazendo a tratativa de erros difentes
// Para ele não fazer a requisição do meu json com a request do fetch errado então faça essa tratativa diferente
// Serial uma forma mais segura de eu não executar meu json quando ele estive errado.
// Ele não consegue parsiar o stream pra json nesse fetch abaixo
fetch('http://localhost:8080/data.json')
    .then(responseStream => {
        if (responseStream.status === 200) {
            return responseStream.json();
        } else {
            throw new Error('Request error');
        }
    }).then(data => { // Encadeando meu then
        console.log(data);
    }).catch(err => {
        console.log('Erro: ', err); // Se tiver um problema de rede, ele cairá no catch. como por exemplo eu passa uma porta do servidor que não existe
    });


// Fazendo um fetch tratando os dados com o method post
// E usando um tratativa de dado diferente no JSON
fetch('http://localhost:8080/data.json', {
        method: 'post',
        body: JSON.stringify
    })
    .then(responseStream => {
        if (responseStream.status === 200) {
            return responseStream.json();
        } else {
            throw new Error('Request error');
        }
    }).then(data => { // Encadeando meu then
        console.log(data);
    }).catch(err => {
        console.log('Erro: ', err); // Se tiver um problema de rede, ele cairá no catch. como por exemplo eu passa uma porta do servidor que não existe
    });


// ES7 - ASYNC / AWAIT
// É uma forma de criar umas promises de maneira mais simples, lidar com outras promises, dentro de promises
const simpleFunc = async() => {
    return 12345;
};
simpleFunc().then(data => { // Essa promise ja retorna resolvida ao colocar a palava async
    console.log(data); // Return de uma promise resolvida
});

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1234);
    }, 1000)
});

// Aqui estão tranformando uma resquest assincrona em sequencial usando wait
// O wiat é utilizado para esperar uma promise se resolver
const simpleFunc = async() => {
    const data = await asyncTimer();
    console.log(data);
    const dataJSON = await fetch('/data.json').then(resStream =>
        resStream.json()
    );
    return dataJSON;
};
simpleFunc().then(data => { // Essa promise ja retorna resolvida ao colocar a palava async
    console.log(data); // Return de uma promise resolvida
});

// Aqui estão uma resquest assincrona em sequencial 
const simpleFunc = async() => {
    const data = await Promise.all([
        asyncTimer(),
        fetch('/data.json').then(resStream => resStream.json())
    ]);
    return data;
};
simpleFunc().then(data => { // Essa promise ja retorna resolvida ao colocar a palava async
    console.log(data); // Return de uma promise resolvida
});

// EVENTEMITTER
// EventeEmitter é exclusivo do NODE

const EventeEmitter = require('events');
const emitter = new EventeEmitter();
emitter.on('User logged', data => { // Ao emitir o evento o const emitter o consumiu...
    console.log(data);
});
emitter.emit('User logged', { user: 'Miguel Moreira' });


// Còdigo abaixo usando class e fazendo um código mais genérico
const EventeEmitter = require('events');
class Users extends EventeEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}
const users = new Users();
users.on('User logged', data => { // Usando o método on eu logaria mais usuários
    console.log(data);
});
users.userLogged({ user: 'Miguel Moreira' });
users.userLogged({ user: 'Celso Henrique' });



// Còdigo abaixo usando class e fazendo um código mais genérico
const EventeEmitter = require('events');
class Users extends EventeEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}
const users = new Users();
users.once('User logged', data => { // Usando o método once eu logaria apenas o primeiro usuário
    console.log(data);
});
users.userLogged({ user: 'Miguel Moreira' });
users.userLogged({ user: 'Celso Henrique' });


// Còdigo abaixo usando class e fazendo um código mais genérico
const EventeEmitter = require('events');
class Users extends EventeEmitter {
    userLogged(data) {
        setTimeout(() => { // Usando o setTimeout para para programa events
            this.emit('User logged', data);
        }, 10000);
    }
}
const users = new Users();
users.on('User logged', data => {
    console.log(data);
});
users.userLogged({ user: 'Miguel Moreira' });
users.userLogged({ user: 'Celso Henrique' });