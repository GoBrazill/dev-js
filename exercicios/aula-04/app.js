let idade = prompt('Qual a sua idade?')

if(idade < 12) {
    alert('Você é uma criança')
} else if (idade < 17 ) {
    alert('Você é um adolescente')
} else if (idade < 59) {
    alert('Você é um adulto')
} else if (idade < 0) {
    alert('Idade inválida')
} else {
    alert('Você é VELHO(idoso)')
}

let mes = 5

switch (mes) {
    case 1:
        console.log('Janeiro');

        break
    case 2:
        console.log('Fevereiro');

        break
    case 3: 
        console.log('Março');
        
        break
    case 4:
        console.log('Abril');
        
        break
    case 5:
        console.log('Maio');
        
        break
    case 6:
        console.log('Junho');

        break
    case 7:
        console.log('Julho');
        
        break
    case 8: 
        console.log('Agosto');

        break
    case 9:
        console.log('Setembro');

        break
    case 10:
        console.log('Outubro');

        break
    case 11:
        console.log('Novembro');
        
        break
    case 12:
        console.log('Dezembro');
        
        break
    default:
        console.log('Esse mês não existe rapá');
        
        break
}

let nota = prompt('Qual a sua nota?')

if(nota >= 9) {
    console.log('Exelente')
} else if (nota >= 7) {
    console.log('Bom');
    
} else if (nota >= 5) {
    console.log('Regular');
    
} else if(nota < 5) {
    console.log('Reprovado');
} else {
    console.log('Nota inválida');
    
}