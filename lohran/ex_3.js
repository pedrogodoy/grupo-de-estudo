function verificarVogal(palavra) {                                                                      //Criei uma funcao que recebe um parametro PALAVRA

    let vogais = 0;                                                                                     //variavel que recebe quantas vogais tem 
    let palavraVerificar = palavra.toLowerCase();                                                       //variavel recebe a palavra digitada transformando a letras em minusculas 

    for (let i = 0; i < palavraVerificar.length; i++) {                                                 //criado um loop que ira repetir o total de letras que possue na palavra

        const letra = palavraVerificar[i];                                                              //criado uma variavel para receber o valor de cada letra 

        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {        //criado uma condicional que verifica se a letra é uma vogal 
            vogais++;                                                                                   // acrescenta +1 na variavel vogais
        }

    }
    return vogais                                                                                       // retorna o resultado 
}

const palavra = "JacArei";                                                                              // criado uma variavel que guarda a palavra escolhida
console.log(`A palavra ${palavra} possui ${verificarVogal(palavra)} vogais!!`);                         // imprimir o resultado 