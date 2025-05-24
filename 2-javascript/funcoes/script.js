// Funções

function mediaAluno(nota1, nota2){
    var media = (nota1 + nota2) / 2;

    if(media >= 7){
      // Se a média for maior ou igual a 7, o aluno está aprovado
      console.log("Aprovado com a média: " + media)
    } else if(media >= 5){
      // Se a média for maior ou igual a 5 e menor que 7, o aluno está em recuperação
      console.log("Recuperação com a média: " + media)
    } else if(media < 5){
      // Se a média for menor que 5, o aluno está reprovado
      console.log("Reprovado com a média: " + media)
    }
}

mediaAluno(10, 5); // Aprovado com a média: 7.5
mediaAluno(5, 5); // Recuperação com a média: 5

function aluno(nome, curso){
  // Cria uma variável chamada mensagem e atribui a ela uma string que contém o nome e o curso do aluno
  var mensagem = "Seja bem vindo " + nome + " do curso de " + curso;
  console.log(mensagem);
}

aluno("Lucas", "JavaScript"); // Seja bem vindo Lucas do curso de JavaScript