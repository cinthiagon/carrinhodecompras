# Carrinho de Compras Simples 🛒🛍️💳

Este projeto é uma implementação simples de um carrinho de compras usando JavaScript, HTML e CSS. Ele permite que o usuário adicione produtos ao carrinho, calcule o preço total de forma automática e limpe o carrinho a qualquer momento.

## Funcionalidades

- Adicionar produtos ao carrinho.
- Definir a quantidade de cada produto.
- Calcular o preço total automaticamente com base na quantidade e no valor unitário.
- Exibir a lista de produtos adicionados com suas quantidades e respectivos preços.
- Limpar o carrinho, reiniciando o total e a lista de produtos.

## Estrutura do Código

### JavaScript

O código principal está no arquivo `index.js` e contém duas funções principais:

- **`adicionar()`**: 
  - Captura os valores de entrada de produto e quantidade.
  - Calcula o preço total de acordo com a quantidade e o valor unitário do produto.
  - Adiciona o produto ao carrinho e atualiza o valor total exibido na página.
  - Zera o campo de quantidade após adicionar o produto.

- **`limpar()`**: 
  - Redefine o carrinho de compras, removendo todos os produtos e resetando o total geral.

### HTML e CSS

O layout básico da página é gerado com HTML. O estilo simples é aplicado com CSS para exibir a lista de produtos e o total de maneira clara.

## Origem

O código foi criado por meio de um exercício proposto no módulo de Lógica de Programação da Alura, através do projeto [Alura Include - Empregatec 2024](https://www.agorams.com.br/startup-sesi-abre-inscricoes-para-segunda-turma-de-formacao-de-desenvolvedores-de-software/).


