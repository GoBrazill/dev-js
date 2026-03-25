for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let par = 1
while(par <= 20){
    if (par % 2 == 0) {
        console.log(par);
        par++
    }
        par++
}

let senha = 1234
let tentativa

do {
    tentativa = prompt('Senha: ')

} while (tentativa != senha)