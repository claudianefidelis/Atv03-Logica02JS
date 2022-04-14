//7 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles.
// Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.


function divisaodeNumeros(num1,num2){
    const divisãonum = num1/num2
    if (divisãonum % 2 === 0){
        return `${num1} dividido por ${num2} = ${divisãonum}. Esse valor é par`
}   else if (divisãonum != 0) {
        return `${num1} dividido por ${num2} = ${divisãonum}. Esse valor é impar` 
}
}

console.log(divisaodeNumeros(10,2))