// Passo a passo do projeto
// 1 selecionar uma quantidade de produtos
// 2 selecionar um produto
// 3 fazer o produto selecionado ser adicionado ao carrinho
// 4 somar totais do carrinho
let carrinho = document.getElementById('lista-produtos')
let inputQnt = document.getElementById('quantidade')
let htmlTotal = document.getElementById('valor-total')
let valorTotal = parseInt(document.getElementById('valor-total').value)
valorTotal = 0
const carrinhoArray = []
console.log(carrinhoArray)
let id = parseInt(1)

limpar();


function adicionar(){//quando acionado a função
    let produtoElemento = document.getElementById('produto'); //define produto como a seleção atual da caixa
    let qnt = parseInt(document.getElementById('quantidade').value); //guarda como numero a quantidade escrita
    let nomeCompleto = produtoElemento.value; //transforma o elemento html em texto
    let nomeArray = nomeCompleto.split(" - "); //separa o nome do valor
    let nomeValor = nomeCompleto.split("$"); //separa o valor do nome
    nome = nomeArray[0]; //faz o nome deixar de ser um array
    valorUnit = parseInt(nomeValor[1]); //faz o valor deixar de ser um array
    
    subTotal = parseInt(valorUnit * qnt)
    valorTotal = valorTotal + subTotal
    htmlTotal.innerHTML = `R$ ${valorTotal}`

    
    carrinhoArray.push(nome)
    console.log(carrinhoArray)
    
    carrinho.innerHTML = carrinho.innerHTML+`<section class="carrinho__produtos__produto"> 
                            <span class="texto-azul">${qnt}x</span> ${nome} <span class="texto-azul">R$${valorUnit}</span>
                        </section>`
    if(inputQnt==''){
        alert("Preencha o campo de quantidade!")
    }
    id = id + parseInt(1)
    console.log(id)
};

function limpar(){
    carrinho.innerHTML = ''
    inputQnt.value = ''
    valorTotal = 0
    htmlTotal.innerHTML = `R$ ${valorTotal}`
    carrinhoArray = []
};