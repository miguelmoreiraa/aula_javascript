// Como um hoisting você não pode executar o console.log antes de criar a variavel isso com let e const
// Então teríamos que criar a const e depois fazer o console.log
// E também no JavaScript quando estoura um erro consequentemente as coisas posteriores não serão executadas

// E também no JavaScript quando estoura um erro consequentemente as coisas posteriores não serão executadas
//  console.log(name);
//  const name = "Celso Henrique"
//  console.log('Keep going')

// Para que as coisas sejam executadas mesmo que tenha erro, você precisa usar o try catch que seria...
// E assim ao capturar o erro conseguimos tratar nosso erro e dar sequencia do nosso código
// try {
//     console.log(name);
//     const name = "Celso Henrique";
// } catch (err) {
//     console.log('Error:', err);
// } finally {
//     console.log('Keep going')
// }

// Customizando meu erro
class CustomError extends Error {
    constructor({ message, data }) {
        super(message);
        this.data = data
    }
}
try {
    const name = "Celso Henrique";
    const myError = new CustomError({
        message: 'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    });
    throw myError;
} catch (err) {
    console.log(err);
    console.log(err.data);
} finally {
    console.log('Keep going')
}

// Com a criação de class temos um controle maior do erros e  conseguimos inserir dados e tonar..
// O nossos erros mais dinamicos e mais ricos de informações

// Atraves da aba network do browser conseguimos acompanhar a quantidades de resquest 
// Com a oalava debugger o chorme automaticamente vai para o código no erro
// console.warn - deixa em amarelo um alerta
// console.error - mostra um erro
// console.trace - mostra aonde ta sendo executado
// tem como agrupar os console com console.group
// console.group('My Group')
// console.log('Info inside group')
// console.group('More info inside group')
// console.groupEnd('My Group')
// Com o console.time conseguimos ver o tempo de execução no nosso código
// console.time('Log Name');
// setTime(() =>{
// console.timeEnd('Log Time');
//},2000);
// O console.table forma o erro numa tabela para uma melhor visualização
// console.table(['Miguel Moreira', 'Digital Innovation One']);
// Se a condição não for verdadeira retorna um assert
// console.assert(1===, 'Ops')
// Esse console log você pode estilizar ele
// console.log('5c styled log', 'color: blue');