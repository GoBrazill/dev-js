let ateu = "26"
console.log(`Tipo de texto ${typeof ateu}`);


let AteuConvertido = Number(ateu)
console.log(`Tipo de numero: ${typeof AteuConvertido}`);


let agnostico = Boolean(AteuConvertido)
console.log(`Tipo de boolean: ${agnostico}`);

// A diferença entre valores primitivos e referência é 
// que os valures primitivos se armazenam em lugares diferentes na memória, 
// já a redeclaração de um objeto ou array são armazenados na mesmo lugar que a declaração inicial, 
// referênciando o mesmo lugar.