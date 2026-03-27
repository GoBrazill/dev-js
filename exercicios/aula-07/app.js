let frutas = ['banana', 'maçã', 'manga', 'laranja', 'limão']

console.log(frutas);

frutas.push('tomate')
frutas.pop()
frutas.shift()
frutas.unshift('cacao')

console.log(frutas);

let nums = [486, 9, 68, 4, 87, 45, 92, 542, 88, 25]

let pares = nums.filter(n => n % 2 == 0)
console.log(pares);

let dobro = nums.map(n => n * 2)
console.log(dobro);

let soma = nums.reduce((acc, n) => acc + n, 0)
console.log(soma);

nums.sort((a, b) => a - b)
console.log(nums);

nums.reverse()
console.log(nums);