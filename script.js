
const botao = document.querySelector(".iniciar")
const mostrarPopup = document.querySelector(".popup-mostrar");
const popUpDoisFechar = document.querySelector(".popupdois");

// função ao clicar em iniciar
botao.addEventListener("click", () => {
  popUpDoisFechar.style.display = "none";
  mostrarPopup.style.display = "block";
});


/* Função que controla o fluxo de informação do usuario e devolve outro popup mostrando o controle de idade*/


// função ao clicar em Aceitar
// Mostrando segundo popup e verificando Maioridae

const botaoAceitar = document.querySelector(".aceitar");
const popUpResposta = document.querySelector(".popupdois");
const fecharPopUp = document.querySelector(".popup-mostrar");
botaoAceitar.addEventListener("click", () => {
  //verificando Idade
  const infoIdade = Number(document.getElementById("caixa-texto").value);
  if (infoIdade >= 18) {
    const podeVotar = 'Você pode votar';
    document.querySelector("#texto").innerHTML = `${podeVotar}`;
  } else {
    const naoPodeVotar = 'Você não pode votar';
    document.querySelector("#texto").innerHTML = `${naoPodeVotar}`;
  }
  // Fechando Popup que solicita Idade e Mostrando Popup Resposta

  popUpResposta.style.display = "block";
  fecharPopUp.style.display = "none"
});


// Fechar com botão X de Popup-Mostrar

const popUpFechar = document.querySelector(".close-popup")
popUpFechar.addEventListener("click", () => {
  fecharPopUp.style.display = "none";
  console.log("Fechou com botão X, a validção foi cancelada");
});


// fechar com botão fechar do segundo popup

const botaoClose = document.querySelector(".fechapop");
const popUpClose = document.querySelector(".popupdois");
botaoClose.addEventListener("click", () => {
  popUpClose.style.display = "none";
  console.log("Fechou com botão fechar");
});

//Fechar com botão X do PopupDois 

const fecharComX = document.querySelector(".fechar")
fecharComX.addEventListener("click", () => {
  popUpClose.style.display = "none";
  console.log("Fechou com botão X, no popupdois, operação concluida");
});



