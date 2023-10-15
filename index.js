//1: função onde imprime uma string com uma frase de apresentação;
function apresentacao() {
    console.log("Sou a Ada, tenho 18 anos, moro em Belo Horizonte e sou estudante");
};

//2: função onde aprimora a apresentação da função anterior, agora recebendo informações do prompt;
let apresentacaoMelhor = function (nome, idade, cidade, seEstuda) {
    if ( seEstuda === 'não') {
        seEstuda = 'não';
    } else {
        seEstuda ='';
    }
    console.log('Eu sou '+nome+ ', tenho ' +idade+ ' anos, moro em ' +cidade+' e '+seEstuda+' sou estudante');
};
 
//3: função que realiza a soma de dois números;
function somaDoisNumeros(num1, num2) {
    return num1 + num2;
}
console.log(somaDoisNumeros());

//4: função que verifica se um número é maior que o outro;
let testaQualEMaior = (num1, num2) => {
    return (num1 >= num2);
};
console.log(testaQualEMaior());

//5 : função que inverte os números recebidos de um array;
function inverteArray(numeros) {
    let numerosInvertidos = (numeros.splice(0).reverse());
    console.log("Numeros Invertidos:" , numerosInvertidos);
}
inverteArray([28, 18, 2 , 5])

//6: função que retorna somente números que sejam pares dentro de um array;

function retornaNumerosPares(array) {
    let numerosPares = [];
    for (let i = 0; numerosPares.length < array; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}
  console.log(retornaNumerosPares(5))

  //7: função que retorna o maior número dentro de um array;
function retornaMaiorNumero(array) {
    let maiorNumero = 0;
    for (let i = 0; i < array.length; i++) {
       if (array[i] > maiorNumero); {
           maiorNumero = array[i];
       }
    }
    console.log("Maior Numero:", maiorNumero);
};

//8: função que retorna quantidade de elementos dentro de um array;
const quantidade = ["Eduarda","Maia", "Azevedo", "Bascur" ]
function retornaQuantidadeDeElementos(array) {
    for(let itens of array) {
        console.log(itens);
    };
    return array.length;
};

//9: função que guarda um objeto contendo um filme, o ano de lançamento, o diretor, e o elenco;
function filme() {
    const astrodev = {
        filme: 'O Diabo Veste Prada',
        ano: 2006, 
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway' , 'Emily Blunt', 'Stanley Tucci']
    };
    console.log(astrodev);
};

//10: função que retorna cada objeto dentro de uma string formando uma frase;
function retornaObjeto() {
    const astrodev = {
        filme: 'O Diabo Veste Prada',
        ano: 2006, 
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway' , 'Emily Blunt', 'Stanley Tucci']
    }
    console.log(`Venha assistir ao filme ${astrodev.filme} de ${astrodev.ano} dirigido por ${astrodev.diretor} estrelado por ${astrodev.atores}`  )
};

//11: função que multiplica array por 2;
function multiplicaArrayPor2() {
    const valores = [20, 30, 40, 50];
    const valor = 2;
    const resultado = valores.length * valor;
    console.log(resultado);
};

