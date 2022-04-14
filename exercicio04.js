//4 - Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.


function definirImparOuPar(numero){   
    if (numero % 2 == 0) {
        return " É PAR " 
}   else if (numero != 0) {
        return " É IMPAR"
}
}        

console.log(definirImparOuPar (78963))