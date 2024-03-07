//Questao 01

indice = 13;
k = 0;
soma = 0;

while (k < indice) {
    k = k + 1;
    soma = soma + k;

    console.log(soma);
}

console.log(`O valor de soma ao final do processamento e igual a: ${soma}`);
//Resultado de soma ao final do processamento e igual a 91

//Questao 02

//criei uma funcao que recebe como parametro um numero. Para fazer um teste
function numeroFibonacci(numero) {
    if (numero < 0) {
        return false; //A sequencia funciona apenas com numeros inteiros positivos.
    }
    //A sequencia de Fibonacci comeca com duas variaveis com valores 0 e 1
    let x = 0;
    let y = 1;
    //criei um while que verifica a condicao de y ser menor que numero. O que por sua vez determina que esse valor sera somado com o seu anterior e processado passando assim para a proxima interacao
    while (y < numero){
        let varTemporaria = y;
        y = x + y;
        x = varTemporaria;
    }
    //verificando se y e estritamente igual a numero
    return y === numero;
}

//criei a minha entrada sendo previamente definida. por sua vez para fazer novos testes a variavel tem que ter seu valor modificado manualmente aqui.
let numeroEntrada = 34; //para cada teste mudar o valor aqui

//aqui acontece o teste de verificacao da funcao numeroFibonacci, para verificar se o numero pertence ou nao a sequencia
if(numeroFibonacci(numeroEntrada)){
    console.log(`${numeroEntrada} Pertence a sequencia de Fibonacci!`);
} else {
    console.log(`${numeroEntrada} Nao pertence a sequencia de Fibonacci!`);
};

//questao 03
// a) 9. Sempre e somado 2 a sequencia
// b) 128. A logica e multiplicar o elemento por 2
// c) 49. A logica e que essa e uma sequencia de numeros ao quadrados a partir do elemento 0, o proximo elemento e o 7 ao quadrado que da 49
// d) 100. A logica e que essa e uma sequencia de numeros pares ao quadrado, iniciada a partir do elemento 2.
// e) 13. A logica e essa e a sequencia de Fibonacci, onde o numero atual e somado por seu antecessor
// f) 200. A reposta e numeros que comecam com a letra D kkkkk. A minha professora mostrou essa questao na sala a nao mais de 1 mes atas kkkk

//questao 04
//Reposta: Eu ligaria cada um dos interruptores para ver qual acenderia a luz da minha sala, sabendo assim o interruptor referente a sala em numero 1 que a sala onde estou.
//em seguida ligaria o segundo interruptor, e verificaria se a sala de numero 2 esta acessa, caso nao estivesse, signicaria que esse e o interruptor referente a sala numero 3. 
//o restante sendo automaticamente o interruptor da sala numero 2.
//sobrando assim uma ida que foi economizada

//questao 05

//criei uma funcao inverso que recebe como parametro uma entrada
function inverso(entrada) {
    //foi criado uma variavel que foi iniciada de forma vazia
    //em seguida um loop para que recebe como input o parametro entrada e ira interar o tamanho da entrada em seguida ira inverter e retornar como output a entrada de tras para frente
    let invertido = '';
    for (let i = entrada.length - 1; i >= 0; i--) {
        invertido += entrada[i];
    }
    return invertido;
}

// Example usage:
let entradaOriginal = "Weller de Souza Pereira";
let entradaInvertida = inverso(entradaOriginal);

console.log("A entrada era:", entradaOriginal);
console.log("A entrada agora e:", entradaInvertida);