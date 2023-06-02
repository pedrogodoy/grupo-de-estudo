const n1 = 15;


console.log(verificar (n1));


function verificar (numero){

    const resto = numero % 2;

    if (resto == 0){

        return (`O valor digitado ${n1} é PAR`);
    
    }else {
        return (`O valor digitado ${n1} é IMPAR`);
    }
    
}





