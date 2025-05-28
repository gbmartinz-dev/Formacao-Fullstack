var area = document.getElementById("area");

function entrar(){
  var nome = prompt("Qual é o seu nome?");
  if (nome === " " || nome === null){
    alert("Ops algo deu errado, tente novamente!");
    area.innerHTML = "Clique no botão para acessar..."
  } else {
    area.innerHTML = "Bem-vindo " + nome + "! ";

    let botaoSair = document.createElement("button");
    botaoSair.innerHTML = "Sair da conta";
    botaoSair.onclick = sair;

    area.appendChild(botaoSair);
  }
}

function sair(){
  alert("Até mais!");
  area.innerHTML = "Você saiu da conta!";
}