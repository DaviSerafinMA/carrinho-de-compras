// Passo a passo do projeto
// 1 selecionar uma quantidade de produtos
// 2 selecionar um produto
// 3 fazer o produto selecionado ser adicionado ao carrinho
// 4 somar totais do carrinho

let carrinho = document.getElementById('lista-produtos')
let inputQnt = document.getElementById('quantidade').value
let htmlTotal = document.getElementById('valor-total')
let valorTotal = parseInt(document.getElementById('valor-total').value)
valorTotal = 0
let carrinhoArray = []


limpar();


function adicionar(){//quando acionado a função
    if(inputQnt>=1){
    let produtoElemento = document.getElementById('produto'); //define produto como a seleção atual da caixa
    let qnt = parseInt(document.getElementById('quantidade').value); //guarda como numero a quantidade escrita
    let nomeCompleto = produtoElemento.value; //transforma o elemento html em texto
    let nomeArray = nomeCompleto.split(" - "); //separa o nome do valor
    let nomeValor = nomeCompleto.split("$"); //separa o valor do nome
    nome = nomeArray[0]; //faz o nome deixar de ser um array
    valorUnit = parseInt(nomeValor[1]); //faz o valor deixar de ser um array
    
    subTotal = parseInt(valorUnit * qnt); //calcula o total que sera adicionado
    valorTotal = valorTotal + subTotal; //soma o valor anterior do carrinho com a nova adição
    htmlTotal.innerHTML = `R$ ${valorTotal}` //altera o valor total exibido na pagina

    //console.log(nome)
    let id = nome
    let returnId = document.getElementById(id)
    
    if(carrinhoArray.some(Element => Element == id)){
        let selected = returnId.innerText
        let add = selected.split("x")
        let addQnt = parseInt(add[0])
        qnt = qnt + addQnt
        console.log(qnt)
        returnId.remove()
        carrinho.innerHTML = carrinho.innerHTML+`<section class="carrinho__produtos__produto" id="${id}"> 
                                <span class="texto-azul">${qnt}x</span> ${nome} <span class="texto-azul">R$${valorUnit}</span>
                            </section>`

        console.log(carrinho.innerHTML)
        console.log(returnId)
    }else{
        carrinhoArray.push(id);
        console.log(carrinhoArray);
        
        carrinho.innerHTML = carrinho.innerHTML+`<section class="carrinho__produtos__produto" id="${id}"> 
                                <span class="texto-azul">${qnt}x</span> ${nome} <span class="texto-azul">R$${valorUnit}</span>
                            </section>`
        };
    }else{
        alert("Insira uma quantidade válida")
    }
};

function limpar(){
    carrinho.innerHTML = ''
    inputQnt.value = ''
    valorTotal = 0
    htmlTotal.innerHTML = `R$ ${valorTotal}`
    carrinhoArray = []
};