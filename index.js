const button = document.querySelector(".button");

function go() {
  var a = document.getElementById("num-a").value;
  var b = document.getElementById("num-b").value;
  var c = b;
  var b = a;
  var a = c;

  if (a.length === 0 || b.length === 0) {
    var mensagemErro = document.createElement("p");
    mensagemErro.textContent = "Não pode haver nenhum campo vazio.";
    mensagemErro.classList.add("error-message");
    setInterval(function () {
      mensagemErro.textContent = "";
    }, 2000);

    // Adiciona a mensagem de erro ao DOM
    var container = document.getElementById("paragrafoContainer");
    container.appendChild(mensagemErro);

    return; // Retorna antecipadamente para evitar a criação do parágrafo se houver campos vazios
  }

  // Se chegou aqui, não há campos vazios, então remove a mensagem de erro (caso exista)
  var mensagemErroExiste = document.querySelector(".error-message");
  if (mensagemErroExiste) {
    mensagemErroExiste.remove();
  }

  var paragrafo = document.createElement("p");

  paragrafo.innerHTML = `O valor de A é: ${a}, o valor de B é: ${b}.`;
  paragrafo.classList.add("paragrafo");

  let paragrafoExiste = document.querySelector(".paragrafo");
  if (paragrafoExiste) {
    paragrafoExiste.remove();
  }

  var container = document.getElementById("paragrafoContainer");
  container.appendChild(paragrafo);

  setTimeout(function () {
    document.getElementById("num-a").value = "";
    document.getElementById("num-b").value = "";
    c = "";
    paragrafo.textContent = "";
  }, 4000);
}

button.addEventListener("click", () => {
  go();
});
