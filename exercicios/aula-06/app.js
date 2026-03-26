function ola(nome, idade) {
    console.log(`Olá ${nome}, você tem ${idade} anos?`);
}

ola('amendobobo', 25)

const dobro = function(num) {
    return num * 2
}

console.log(`O dobro desse número é: ${dobro(9)}`);
 
const soma = (num1, num2) => {
    console.log(`A soma dos númerros é: ${num1 + num2}`);
    
}

soma(5, 7)

const parOuImpar = (num) => {
    if (num % 2 == 0) {
        console.log('Seu número é par!');
    } else {
        console.log('Seu número é ímpar');
        
    }
}

parOuImpar(2)