//Criando lista de produtos
const produtos = ["Computador", "Telefone", "Mouse", "Teclado"]

console.log('listando todos os produtos: ' + produtos);

//mostrando quantos produtos tem na lista
console.log('Quantidade de produtos na lista: ' +produtos.length);

//Retirando Mouse da lista e retornando os produtos restantes
console.log('tirando produto mouse: ' + produtos.filter(p => p !=='Mouse'));

//Procurando por determinado produto
const findProduto = produtos.find(p => p === 'Computador');

if(findProduto){
    console.log('Produto Existe na Lista')
}else{
    console.log('Produto não existe na Lista')
}

//Removendo o segundo item da lista
console.log('Removendo o segundo produto da lista: ' + produtos.splice(1, 1));
console.log(produtos);

//Criando lista de numeros
const numeros = [1,3,5,7,0,9];
console.log(numeros);

//ordenando lista
console.log(numeros.sort());

//removendo o primeiro numero da lista
console.log(numeros.shift());

//invertendo a ordem da lista
console.log(numeros.reverse());

//adicionando um numero a lista
numeros.push(8);
console.log(numeros.sort());

//Criando uma String com a data de hoje

let hoje = '15/07/2024';

//separando as variaveis de data e mostrando dia, mês e ano

const [dia, mes, ano] = hoje.split('/');

console.log('Dia: '+ dia);
console.log('Mês: '+ mes);
console.log('Ano: '+ ano);