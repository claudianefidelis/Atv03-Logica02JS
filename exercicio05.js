//5 - Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.




function menorOuMaiorIdade(numero){
    const idade = (2022-numero)
        if (idade >= 18){
            return "MAIOR DE IDADE"
}       else if (idade < 18){
            return "MENOR DE IDADE"
}

}

console.log(menorOuMaiorIdade(2020))