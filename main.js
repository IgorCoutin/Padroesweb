//Pedido das notas
var nota1 = prompt("Informe a primeira nota do aluno:");
var nota2 = prompt("Informe a segunda nota:");

// Calculo da media
var media = ((parseFloat(nota1) + parseFloat(nota2))/2);
    document.write("A média do aluno é: ",media, "<br>", "<br>");
    var situacao, cor;

// Verifica se está aprovado
if (media >= 6 ) {
    document.write("O aluno está aprovado!",);
    situacao = "Aprovado";
      cor= "blue";
}

else  { 
    document.write( "O aluno está reprovado!");
    situacao = "Reprovado";
      cor= "red";
}

document.getElementById("media").innerHTML = "Média: " + media.toFixed(2);
    document.getElementById("situacao").innerHTML = "Situação: " + situacao;
    document.getElementById("situacao").style.color = cor;