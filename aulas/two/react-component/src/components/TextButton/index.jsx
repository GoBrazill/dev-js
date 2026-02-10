// modo antigo de declarar um componente dinâmico(com parâmetro)
function TextButton(params) {    
    console.log(params);

    let obj = {
        name: 'João',
        age: 30,
        address: 'rua joao pedro',
        phoneNumber: 1148953473
    }

    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.address);
    console.log(obj.phoneNumber);


    // Desestruturação de um objeto pegando só as informações que queremos usando {}
    let {name, age} = obj
    console.log(name);
    console.log(age);
    
    
    
    return (
        <button type="button">
            {params.label}
        </button>
    )
}

export default TextButton