let pessoa = {
    nome: 'Vini',
    idade: 21,
    profissao: 'Desenvolvedor',
    apresentar () {
        return`Olá eu sou ${this.nome}, tenho ${this.idade} e sou ${this.profissao}.`;
    }
}

console.log(pessoa.apresentar());

let carro = {
    marca: 'BMW',
    modelo: 'M3',
    ano: '2025',
    ligar () {
        console.log('Carro ligado');
    }
}

carro.ligar();

let loja = {
    nome: 'padaria do zé',
    produtos: ['Pão francês', 'Sonho', 'Queijo quente', 'Brigadeiro', 'Bolo de chocolate']
}

for (let chave in loja) {
    console.log(loja[chave]);
}

