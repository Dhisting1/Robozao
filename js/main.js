const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");
const trocarCor = document.querySelector(".cor");
const mudaCorBtn = document.querySelector("#mudaCor");
const roboImg = document.querySelector("#robozao");
let indiceCorAtual = 0;
const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },
  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -4,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 43,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};
const robos = [
  "Robotron-Azul",
  "Robotron-Branco",
  "Robotron-Amarelo",
  "Robotron-Preto",
  "Robotron-Rosa",
  "Robotron-Vermelho",
];
mudaCorBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  mudaDeCor();
});

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.textContent, evento.target.parentNode);
    atualizaEstatistica(evento.target.textContent, evento.target.dataset.peca);
  });
});

function mudaDeCor() {
  roboImg.setAttribute("src", `../img/${robos[indiceCorAtual]}.png`);
  indiceCorAtual++;
  if (indiceCorAtual === robos.length) {
    indiceCorAtual = 0;
  }
}
function manipulaDados(operation, controle) {
  const peca = controle.querySelector("[data-contador]");

  if (operation === "-") {
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}

function atualizaEstatistica(operacao, peca) {
  estatistica.forEach((elemento) => {
    if (operacao === "-") {
      elemento.textContent =
        Number(elemento.textContent) -
        pecas[peca][elemento.dataset.estatistica];
    } else {
      elemento.textContent =
        Number(elemento.textContent) +
        pecas[peca][elemento.dataset.estatistica];
    }
  });
}
