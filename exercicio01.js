//1 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.




function diaDaSemana (numero){
switch (numero) {
    case "1":
        return "Domingo"
    case "2":
        return "Segunda"
    case "3":
        return "Terça"
    case "4":
        return "Quarta"
    case "5":
        return "Quinta"
    case "6":
        return "Sexta"
    default:
        return "Algo errado, não é dia da semana."
}

}

console.log(diaDaSemana ("9"))