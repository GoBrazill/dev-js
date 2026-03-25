const text1 = document.getElementById('text1')
const text2 = document.getElementById('text2')

let nome = 'vinicius'
let idade = 21
let cidade = 'São Paulo'

let num1 = 5
let num2 = 7

let soma = num1 + num2
let subtracao = num1 - num2
let multiplicacao = num1 * num2
let divisao = num1 / num2

text1.innerText= "Com template string: Meu nome é " + nome + ", tenho" + idade + "anos e moro em" + cidade
console.log("Com template string: Meu nome é " + nome + ", tenho" + idade + "anos e moro em" + cidade);

alert("soma: " + soma + ", subtração: " + subtracao + ", multiplicação: " + multiplicacao + " e divisão: " + divisao)
console.log("soma: " + soma + ", subtração: " + subtracao + ", multiplicação: " + multiplicacao + " e divisão: " + divisao);

text2.innerText= `Com concatenação: Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}`
console.log(`Com concatenação: Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}`);