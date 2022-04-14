//3 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens
// de acordo com cada situação:





function mediaAluno(nota1, nota2, nota3){
    const media = (nota1 + nota2 + nota3)/3
    if (media >= 7){
        return "APROVADO"
}   else if (media >= 5 && media < 7){
        return "Recuperação"
}   else if (media < 5) {     
        return "Reprovado"
}
}

console.log(mediaAluno(5,1,1))