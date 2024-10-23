let totalGeral; // Variável global que armazena o valor total da compra
limpar(); // Chama a função 'limpar' ao iniciar o script para resetar o carrinho

// Função que adiciona produtos ao carrinho
function adicionar() {
    // Captura o valor do campo de input de 'produto' e 'quantidade'
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    // Verifica se um produto válido foi selecionado
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido."); // Exibe um alerta se o campo de produto estiver vazio
        return; // Interrompe a função caso não seja um produto válido
    }

    // Verifica se a quantidade inserida é um número válido e maior que zero
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida."); // Exibe um alerta se a quantidade for inválida
        return; // Interrompe a função caso a quantidade seja inválida
    }

    // Extrai o nome do produto e o valor unitário a partir do valor do campo de 'produto'
    let nomeProduto = produto.split('-')[0]; // Pega a primeira parte da string antes do traço
    let valorUnitario = parseFloat(produto.split('R$')[1]); // Pega o valor após 'R$' e converte para número
    let preco = quantidade * valorUnitario; // Calcula o preço total multiplicando quantidade pelo valor unitário

    // Adiciona o produto ao carrinho (seção de HTML) exibindo a quantidade, nome e preço
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;

    // Atualiza o valor total da compra
    totalGeral = totalGeral + preco;

    // Exibe o valor total atualizado no campo correspondente
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;

    // Reseta o campo de quantidade para 0 após a adição ao carrinho
    document.getElementById('quantidade').value = 0;
}

// Função que limpa o carrinho, resetando o total e removendo todos os itens do HTML
function limpar() {
    totalGeral = 0; // Reinicia o valor total da compra para 0
    document.getElementById('lista-produtos').innerHTML = ''; // Remove todos os produtos listados no carrinho
    document.getElementById('valor-total').textContent = 'R$0'; // Atualiza o campo de valor total para exibir R$0
}
