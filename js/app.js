// Passo a passo do projeto
// 1 selecionar uma quantidade de produtos
// 2 selecionar um produto
// 3 fazer o produto selecionado ser adicionado ao carrinho
// 4 somar totais do carrinho

let carrinho = document.getElementById('lista-produtos'); //variavel para buscar o elemento html dos produtos
let inputQnt = document.getElementById('quantidade') ; //variavel para a validação do campo input
let htmlTotal = document.getElementById('valor-total'); //variavel do valor total exibido no carrinho
let valorTotal = parseInt(document.getElementById('valor-total').value); //variavel do valor total que sera calculado
valorTotal = 0; //zera o valor total
let carrinhoArray = []; //cria o array que vamos usar para ver se não há produtos repetidos no carrinho

limpar();


function adicionar(){//quando acionado a função
    if(parseInt(inputQnt.value)>=1){ //este if verifica se a quantidade de produto que vai ser adicionada é válida

    let produtoElemento = document.getElementById('produto'); //define produto como a seleção atual da caixa
    let qnt = parseInt(document.getElementById('quantidade').value); //guarda como numero a quantidade escrita
    let nomeCompleto = produtoElemento.value; //transforma o elemento html em texto
    let nomeArray = nomeCompleto.split(" - "); //separa o nome do valor
    let nomeValor = nomeCompleto.split("$"); //separa o valor do nome
    nome = nomeArray[0]; //faz o nome deixar de ser um array
    valorUnit = parseInt(nomeValor[1]); //faz o valor deixar de ser um array
    
    subTotal = parseInt(valorUnit * qnt); //calcula o total que sera adicionado
    valorTotal = valorTotal + subTotal; //soma o valor anterior do carrinho com a nova adição
    htmlTotal.innerHTML = `R$ ${valorTotal}`; //altera o valor total exibido na pagina

    let id = nome; //define o id do item como nome
    let returnId = document.getElementById(id); //variavel para manipular o item repetido
    
    if(carrinhoArray.some(Element => Element == id)){ //some para verificar se o produto que estamos adicionando já existe no carrinho
        let selected = returnId.innerText; //recupera o nome do produto no carrinho
        let add = selected.split("x"); //recupera a quantidade que havia no carinho
        let addQnt = parseInt(add[0]); //converte em numero
        qnt = qnt + addQnt; //soma a quantidade nova com a quantidade anterior

        returnId.remove(); //remove o elemento do produto anterior para que possamos inserir um novo
        carrinho.innerHTML = `<section class="carrinho__produtos__produto" id="${id}">  
                                <span class="texto-azul">${qnt}x</span> ${nome} <span class="texto-azul">R$${valorUnit}</span>
                            </section>` + carrinho.innerHTML; //adciona o produto repetido agora com a quantidade alterada sem alterar outros produtos


    }else{
        carrinhoArray.push(id); //adiciona o id do produto ao array, se for adicionado novamente vai parar no if
        
        carrinho.innerHTML = carrinho.innerHTML+`<section class="carrinho__produtos__produto" id="${id}"> 
                                <span class="texto-azul">${qnt}x</span> ${nome} <span class="texto-azul">R$${valorUnit}</span>
                            </section>`; //adiciona o produto no carrinho
        };
    }else{
        alert("Erro: Insira uma quantidade válida"); //envia um alerta para quando o cliente inserir uma quantidade invalida
    }
};

function limpar(){ //função dedicada a limpar e zerar os elementos e calculos da pagina
    carrinho.innerHTML = ''
    inputQnt.value = ''
    valorTotal = 0
    htmlTotal.innerHTML = `R$ ${valorTotal}`
    carrinhoArray = []
};