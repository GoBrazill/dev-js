document.addEventListener('DOMContentLoaded', () => {

    const produtoFormElement = document.getElementById('produtoForm')
    const produtoTableElement = document.getElementById('produtoTable')
    
    getElementsByTagName('tbody')[0]
    
    const produtoIdElement = document.getElementById('produtoId')
    const cancelarBtnElement = document.getElementById('cancelar')

    // variável para rastrear se estamos editando um produto
    let editing = false

    // função para obter os produtos da LocalStorage
    function getProdutos() {
        const produtos = localStorage.getItem('produtos')
        return produtos ? JSON.parse('produtos') : []
    }

    // função para salvaar um novo produto
    function salvarProduto() {
        localStorage.setItem('produtos', JSON.stringify(produtos))
    }

    // função para excluir um item
    function exibirProduto() {
        // Limpa a table antes de exibir os produtos
        produtoTableElement.innerHTML= ''

        const produtos = getProdutos()

        for (let i = 0; i < produtos.length; i++) {
            const produto = produtos[i]

            // Cria uma nova linha na tabela
            const row = produtoTableElement.insertRow()

            const nomeCell = row.insertCell()
            nomeCell.textContent = produto.nome

            const precoCell = row.insertCell()
            precoCell.textContent = 'R$ ' + produto.preco.toFixed(2)
            
            const disponibilidadeCell = row.insertCell()
            disponibilidadeCell.textContent = produto.disponibilidade
            disponibilidadeCell.ClassList.add(produto.disponibilidade === 'Disponivel' ? 'disponivel' : 'Indisponivel')

            const actionCell = row.insertCell()

            const editarBtn = document.createElement('button')
            editarBtn.textContent = 'Editar'
            editarBtn.onclick = () => editarProduto(i)
            actionCell.appendChild(editarBtn)

            const excluirBtn = document.createElement('button')
            excluirBtn.textContent = 'Excluir'
            excluirBtn.onclick = () => excluirProduto(i)
            actionCell.appendChild(excluirBtn)
        }
    }

    // função para adicionar ou atualizar um produto
    produtoFormElement.addEventListener('submit', () => {
        eventPreventDefault()

        const nome = document.getElementById('nome').value
        const preco = parseFloat(document.getElementById('preco').value)
        const disponibilidade = document.getElementById('disponibilidade').value
        const produtoId = produtoIdElement.value

        if(nome && !isNaN(preco)) {
            const produtos = getProdutos()

            if(editing) {
                produtos[produtoId].nome = nome
                produtos[produtoId].preco = preco
                produtos[produtoId].disponibilidade = disponibilidade
                editing = false
            } else {
                produtos.push( {nome: nome, preco: preco, disponibilidade: disponibilidade} )
            }
            salvarProduto(produtos)
            exibirProduto()
            produtoFormElement.reset
            produtoIdElement.value = ''
        }
        else {
            alert('Por favor, preencha o nome e o preco corretamente')
        }

    })
})