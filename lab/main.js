console.log('hello world');

let fullName = "Amendobobo da silva"
console.log(fullName.split(' '));

let arrayString = fullName.split(' ')
console.table(arrayString) 

let arrayCount = arrayString.length
console.log(arrayCount);

let name = arrayString[0]
let lastName = arrayString[arrayCount - 1]

function Welcome() {
    console.log('hello world! dentro da função');
}
Welcome()

function WellcomeComParams(name) {
    console.log(`Olá, ${name}`);
}
WellcomeComParams('Chocolate')

// jeito que eu entendi que era pra fazer
// function Hello(fullName) {
//     console.log(`Olá ${fullName}`);
// }
// Hello(`${fullName}`)

// Jeito que era o correto de fazer(fazendo todo o tratamento que agente fez anteriormente)
function Hello(fullName) {
    let arrayString = fullName.split(' ')
    let firstName = arrayString[0]
    let lastName = arrayString[arrayString.length - 1]

    console.log(`Olá ${firstName} ${lastName}`);
}

Hello('amendobobo da silva')